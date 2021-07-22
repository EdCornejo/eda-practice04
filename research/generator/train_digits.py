#!/usr/bin/env python

import cv2
import json
import numpy as np

SZ = 20
CLASS_N = 10

# local modules
from common import clock, mosaic


class NpEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.integer):
            return int(obj)
        elif isinstance(obj, np.floating):
            return float(obj)
        elif isinstance(obj, np.ndarray):
            return obj.tolist()
        else:
            return super(NpEncoder, self).default(obj)


def split2d(img, cell_size, flatten=True):
    h, w = img.shape[:2]
    sx, sy = cell_size
    cells = [np.hsplit(row, w//sx) for row in np.vsplit(img, h//sy)]
    cells = np.array(cells)
    if flatten:
        cells = cells.reshape(-1, sy, sx)
    return cells

def load_digits(fn):
    digits_img = cv2.imread(fn, 0)
    digits = split2d(digits_img, (SZ, SZ))
    labels = np.repeat(np.arange(CLASS_N), len(digits)/CLASS_N)
    return digits, labels

def deskew(img):
    m = cv2.moments(img)
    if abs(m['mu02']) < 1e-2:
        return img.copy()
    skew = m['mu11']/m['mu02']
    M = np.float32([[1, skew, -0.5*SZ*skew], [0, 1, 0]])
    img = cv2.warpAffine(img, M, (SZ, SZ), flags=cv2.WARP_INVERSE_MAP | cv2.INTER_LINEAR)
    return img

def svmInit(C=12.5, gamma=0.50625):
    model = cv2.ml.SVM_create()
    model.setGamma(gamma)
    model.setC(C)
    model.setKernel(cv2.ml.SVM_RBF)
    model.setType(cv2.ml.SVM_C_SVC)

    return model

def svmTrain(model, samples, responses):
    model.train(samples, cv2.ml.ROW_SAMPLE, responses)
    return model

def svmPredict(model, samples):
    return model.predict(samples)[1].ravel()

def svmEvaluate(model, digits, samples, labels):
    predictions = svmPredict(model, samples)
    accuracy = (labels == predictions).mean()
    print('Percentage Accuracy: %.2f %%' % (accuracy*100))

    confusion = np.zeros((10, 10), np.int32)
    for i, j in zip(labels, predictions):
        confusion[int(i), int(j)] += 1
    print('confusion matrix:')
    print(confusion)

    vis = []
    for img, flag in zip(digits, predictions == labels):
        img = cv2.cvtColor(img, cv2.COLOR_GRAY2BGR)
        if not flag:
            img[...,:2] = 0
        
        vis.append(img)
    return mosaic(25, vis)


def preprocess_simple(digits):
    return np.float32(digits).reshape(-1, SZ*SZ) / 255.0


def get_hog() : 
    winSize = (20,20) # image size
    blockSize = (8,8) # illumination sensitive block, grande, cambios locales no impotantes normalmente es el doble del cellsize
    blockStride = (4,4) # solapamiento entre bloques vecinos y controla el grado de normalización del contraste. Normalmente el blockStride se establece en el 50% del blockSize.
    cellSize = (8,8) # feature vector size, muy grande puede q no tome valores reelevantes
    nbins = 9 # nbins: nbins establece el número de bins en el histograma de gradientes. Los autores del documento HOG habían recomendado un valor de 9 para capturar gradientes entre 0 y 180 grados en incrementos de 20 grados.
    derivAperture = 1
    winSigma = -1.
    histogramNormType = 0
    L2HysThreshold = 0.2
    gammaCorrection = 1
    nlevels = 64
    signedGradient = True

    hog = cv2.HOGDescriptor(winSize,blockSize,blockStride,cellSize,nbins,derivAperture,winSigma,histogramNormType,L2HysThreshold,gammaCorrection,nlevels, signedGradient)

    return hog
    affine_flags = cv2.WARP_INVERSE_MAP|cv2.INTER_LINEAR



if __name__ == '__main__':

    print('Loading digits from digits.png ... ')
    # Load data.
    digits, labels = load_digits('digits.png')

    print('Shuffle data ... ')
    # Shuffle data
    rand = np.random.RandomState(10)
    shuffle = rand.permutation(len(digits))
    digits, labels = digits[shuffle], labels[shuffle]
    
    print('Deskew images ... ')
    digits_deskewed = list(map(deskew, digits))
    
    print('Defining HoG parameters ...')
    # HoG feature descriptor
    hog = get_hog();

    print('Calculating HoG descriptor for every image ... ')
    hog_descriptors = []
    for img in digits_deskewed:
        hog_descriptors.append(hog.compute(img))
    hog_descriptors = np.squeeze(hog_descriptors)

    print('Spliting data into training (90%) and test set (10%)... ')
    train_n=int(0.9*len(hog_descriptors))
    digits_train, digits_test = np.split(digits_deskewed, [train_n])
    hog_descriptors_train, hog_descriptors_test = np.split(hog_descriptors, [train_n])
    labels_train, labels_test = np.split(labels, [train_n])
    
    
    np.savetxt('./data/hog_descriptors_train.csv', hog_descriptors_train, delimiter=',')
    np.savetxt('./data/hog_descriptors_test.csv', hog_descriptors_test, delimiter=',')
    np.savetxt('./data/labels_train.csv', labels_train, delimiter=',')
    np.savetxt('./data/labels_test.csv', labels_test, delimiter=',')

    # train = np.concatenate((hog_descriptors_train, [[y] for y in labels_train]), axis=1)
    # test = np.concatenate((hog_descriptors_test, [[y] for y in labels_test]), axis=1)

    # print(train.shape)
    # print(test.shape)

    # np.savetxt('./data/train.csv', train, delimiter=',')
    # np.savetxt('./data/test.csv', test, delimiter=',')
    data_train = []
    for index, item in enumerate(hog_descriptors_train):
        entry = {"point": item, "label": labels_train[index]}
        data_train.append(entry)

    with open('./data/train.js', 'w') as f:
        json.dump(data_train, f, cls=NpEncoder, indent=4)


    data_test = []
    for index, item in enumerate(hog_descriptors_test):
        entry = {"point": item, "label": labels_test[index]}
        data_test.append(entry)

    with open('./data/test.js', 'w') as f:
        json.dump(data_test, f, cls=NpEncoder, indent=4)


    print('Training SVM model ...')
    model = svmInit()
    svmTrain(model, hog_descriptors_train, labels_train)

    print('Evaluating model ... ')
    vis = svmEvaluate(model, digits_test, hog_descriptors_test, labels_test)

    cv2.imwrite("digits-classification.jpg", vis)
    cv2.imshow("Vis", vis)
    cv2.waitKey(0)
    cv2.destroyAllWindows()