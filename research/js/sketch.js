let width = 500;
let height = 300;

let data = []

let root;

function getMax(object) {
    return Object.keys(object).filter(x => {
         return object[x] == Math.max.apply(null,
         Object.values(object));
   });
};

function setup () {
    createCanvas (width, height);
    frameRate(30)
    background(0) ;

    // data = [
    //     [40 ,70],
    //     [70 ,130],
    //     [90 ,40],
    //     [110 , 100],
    //     [140 ,110],
    //     [160 , 100],
    //     [150, 30]
    // ];

    // data = [];
    // for ( let i = 0; i < 12; i ++) {
    //     var x = Math.floor ( Math.random () * width );
    //     var y = Math.floor ( Math.random () * height );
    //     data.push ([x, y]) ;

    //     fill (255 , 255 , 255) ;
    //     circle (x, height - y, 7) ; // 200 -y para q se dibuje apropiadamente
    //     textSize (8) ;
    //     text(x + ',' + y, x + 5, height - y);// 200 -y para q se dibuje apropiadamente
    // }

    // Draw from data 
    // for ( let i = 0; i < data.length; i ++) {
    //     var x = data[i][0]
    //     var y = data[i][1]
    //     console.log(x, y)
    //     fill (255 , 255 , 255);
    //     circle (x, height - y, 7) ; // 200 -y para q se dibuje apropiadamente
    //     textSize (8) ;
    //     text(x + ',' + y, x + 5, height - y);// 200 -y para q se dibuje apropiadamente
    // }
    
    // root = build_kdtree(data);
    // console.log(root);
    // console.log("digraph G {\n" + generate_dot(root) + "}");

    // var point = [140 ,90]; // query
    // console.log(closest_point_brute_force(data, point))
    // console.log(naive_closest_point(root, point))

    // var count = count || 1;
    // var results = [];
    // closest_point(root, point, count, 0, results);
    // if (results.length > count)
    //     results.slice(0, count);
    // console.log('closest_point', results)

    // let found = []
    // var rectangle = [[0, 100], [0, 100]] // xmin xmax, ymin ymax
    // range_query_rect(root, rectangle, found)
    // console.log('range_query_rect', found)
    
    // let found = []
    // var center = [50, 50]
    // range_query_circle(root, center, 30, found)
    // console.log('range_query_circle', found)

//     let found = []
//     nnquery(root, [200, 200], 1, found)
//     console.log('nnquery', found)


//     data = [
//         {"point": [5.1, 3.5, 1.4, 0.2], "label": "Iris-setosa"},
//         {"point": [4.9, 3.0, 1.4, 0.2], "label": "Iris-setosa"},
//         {"point": [4.7, 3.2, 1.3, 0.2], "label": "Iris-setosa"},
//         {"point": [4.6, 3.1, 1.5, 0.2], "label": "Iris-setosa"},
//         {"point": [5.0, 3.6, 1.4, 0.2], "label": "Iris-setosa"},
//         {"point": [5.4, 3.9, 1.7, 0.4], "label": "Iris-setosa"},
//         {"point": [4.6, 3.4, 1.4, 0.3], "label": "Iris-setosa"},
//         {"point": [5.0, 3.4, 1.5, 0.2], "label": "Iris-setosa"},
//         {"point": [4.4, 2.9, 1.4, 0.2], "label": "Iris-setosa"},
//         {"point": [4.9, 3.1, 1.5, 0.1], "label": "Iris-setosa"},
//         {"point": [5.4, 3.7, 1.5, 0.2], "label": "Iris-setosa"},
//         {"point": [4.8, 3.4, 1.6, 0.2], "label": "Iris-setosa"},
//         {"point": [4.8, 3.0, 1.4, 0.1], "label": "Iris-setosa"},
//         {"point": [4.3, 3.0, 1.1, 0.1], "label": "Iris-setosa"},
//         {"point": [5.8, 4.0, 1.2, 0.2], "label": "Iris-setosa"},
//         {"point": [5.7, 4.4, 1.5, 0.4], "label": "Iris-setosa"},
//         {"point": [5.4, 3.9, 1.3, 0.4], "label": "Iris-setosa"},
//         {"point": [5.1, 3.5, 1.4, 0.3], "label": "Iris-setosa"},
//         {"point": [5.7, 3.8, 1.7, 0.3], "label": "Iris-setosa"},
//         {"point": [5.1, 3.8, 1.5, 0.3], "label": "Iris-setosa"},
//         {"point": [5.4, 3.4, 1.7, 0.2], "label": "Iris-setosa"},
//         {"point": [5.1, 3.7, 1.5, 0.4], "label": "Iris-setosa"},
//         {"point": [4.6, 3.6, 1.0, 0.2], "label": "Iris-setosa"},
//         {"point": [5.1, 3.3, 1.7, 0.5], "label": "Iris-setosa"},
//         {"point": [4.8, 3.4, 1.9, 0.2], "label": "Iris-setosa"},
//         {"point": [5.0, 3.0, 1.6, 0.2], "label": "Iris-setosa"},
//         {"point": [5.0, 3.4, 1.6, 0.4], "label": "Iris-setosa"},
//         {"point": [5.2, 3.5, 1.5, 0.2], "label": "Iris-setosa"},
//         {"point": [5.2, 3.4, 1.4, 0.2], "label": "Iris-setosa"},
//         {"point": [4.7, 3.2, 1.6, 0.2], "label": "Iris-setosa"},
//         {"point": [4.8, 3.1, 1.6, 0.2], "label": "Iris-setosa"},
//         {"point": [5.4, 3.4, 1.5, 0.4], "label": "Iris-setosa"},
//         {"point": [5.2, 4.1, 1.5, 0.1], "label": "Iris-setosa"},
//         {"point": [5.5, 4.2, 1.4, 0.2], "label": "Iris-setosa"},
//         {"point": [4.9, 3.1, 1.5, 0.1], "label": "Iris-setosa"},
//         {"point": [5.0, 3.2, 1.2, 0.2], "label": "Iris-setosa"},
//         {"point": [5.5, 3.5, 1.3, 0.2], "label": "Iris-setosa"},
//         {"point": [4.9, 3.1, 1.5, 0.1], "label": "Iris-setosa"},
//         {"point": [4.4, 3.0, 1.3, 0.2], "label": "Iris-setosa"},
//         {"point": [5.1, 3.4, 1.5, 0.2], "label": "Iris-setosa"},
//         {"point": [5.0, 3.5, 1.3, 0.3], "label": "Iris-setosa"},
//         {"point": [4.5, 2.3, 1.3, 0.3], "label": "Iris-setosa"},
//         {"point": [4.4, 3.2, 1.3, 0.2], "label": "Iris-setosa"},
//         {"point": [5.0, 3.5, 1.6, 0.6], "label": "Iris-setosa"},
//         {"point": [5.1, 3.8, 1.9, 0.4], "label": "Iris-setosa"},
//         {"point": [4.8, 3.0, 1.4, 0.3], "label": "Iris-setosa"},
//         {"point": [5.1, 3.8, 1.6, 0.2], "label": "Iris-setosa"},
//         {"point": [4.6, 3.2, 1.4, 0.2], "label": "Iris-setosa"},
//         {"point": [5.3, 3.7, 1.5, 0.2], "label": "Iris-setosa"},
//         {"point": [5.0, 3.3, 1.4, 0.2], "label": "Iris-setosa"},
//         {"point": [7.0, 3.2, 4.7, 1.4], "label": "Iris-versicolor"},
//         {"point": [6.4, 3.2, 4.5, 1.5], "label": "Iris-versicolor"},
//         {"point": [6.9, 3.1, 4.9, 1.5], "label": "Iris-versicolor"},
//         {"point": [5.5, 2.3, 4.0, 1.3], "label": "Iris-versicolor"},
//         {"point": [6.5, 2.8, 4.6, 1.5], "label": "Iris-versicolor"},
//         {"point": [5.7, 2.8, 4.5, 1.3], "label": "Iris-versicolor"},
//         {"point": [6.3, 3.3, 4.7, 1.6], "label": "Iris-versicolor"},
//         {"point": [4.9, 2.4, 3.3, 1.0], "label": "Iris-versicolor"},
//         {"point": [6.6, 2.9, 4.6, 1.3], "label": "Iris-versicolor"},
//         {"point": [5.2, 2.7, 3.9, 1.4], "label": "Iris-versicolor"},
//         {"point": [5.0, 2.0, 3.5, 1.0], "label": "Iris-versicolor"},
//         {"point": [5.9, 3.0, 4.2, 1.5], "label": "Iris-versicolor"},
//         {"point": [6.0, 2.2, 4.0, 1.0], "label": "Iris-versicolor"},
//         {"point": [6.1, 2.9, 4.7, 1.4], "label": "Iris-versicolor"},
//         {"point": [5.6, 2.9, 3.6, 1.3], "label": "Iris-versicolor"},
//         {"point": [6.7, 3.1, 4.4, 1.4], "label": "Iris-versicolor"},
//         {"point": [5.6, 3.0, 4.5, 1.5], "label": "Iris-versicolor"},
//         {"point": [5.8, 2.7, 4.1, 1.0], "label": "Iris-versicolor"},
//         {"point": [6.2, 2.2, 4.5, 1.5], "label": "Iris-versicolor"},
//         {"point": [5.6, 2.5, 3.9, 1.1], "label": "Iris-versicolor"},
//         {"point": [5.9, 3.2, 4.8, 1.8], "label": "Iris-versicolor"},
//         {"point": [6.1, 2.8, 4.0, 1.3], "label": "Iris-versicolor"},
//         {"point": [6.3, 2.5, 4.9, 1.5], "label": "Iris-versicolor"},
//         {"point": [6.1, 2.8, 4.7, 1.2], "label": "Iris-versicolor"},
//         {"point": [6.4, 2.9, 4.3, 1.3], "label": "Iris-versicolor"},
//         {"point": [6.6, 3.0, 4.4, 1.4], "label": "Iris-versicolor"},
//         {"point": [6.8, 2.8, 4.8, 1.4], "label": "Iris-versicolor"},
//         {"point": [6.7, 3.0, 5.0, 1.7], "label": "Iris-versicolor"},
//         {"point": [6.0, 2.9, 4.5, 1.5], "label": "Iris-versicolor"},
//         {"point": [5.7, 2.6, 3.5, 1.0], "label": "Iris-versicolor"},
//         {"point": [5.5, 2.4, 3.8, 1.1], "label": "Iris-versicolor"},
//         {"point": [5.5, 2.4, 3.7, 1.0], "label": "Iris-versicolor"},
//         {"point": [5.8, 2.7, 3.9, 1.2], "label": "Iris-versicolor"},
//         {"point": [6.0, 2.7, 5.1, 1.6], "label": "Iris-versicolor"},
//         {"point": [5.4, 3.0, 4.5, 1.5], "label": "Iris-versicolor"},
//         {"point": [6.0, 3.4, 4.5, 1.6], "label": "Iris-versicolor"},
//         {"point": [6.7, 3.1, 4.7, 1.5], "label": "Iris-versicolor"},
//         {"point": [6.3, 2.3, 4.4, 1.3], "label": "Iris-versicolor"},
//         {"point": [5.6, 3.0, 4.1, 1.3], "label": "Iris-versicolor"},
//         {"point": [5.5, 2.5, 4.0, 1.3], "label": "Iris-versicolor"},
//         {"point": [5.5, 2.6, 4.4, 1.2], "label": "Iris-versicolor"},
//         {"point": [6.1, 3.0, 4.6, 1.4], "label": "Iris-versicolor"},
//         {"point": [5.8, 2.6, 4.0, 1.2], "label": "Iris-versicolor"},
//         {"point": [5.0, 2.3, 3.3, 1.0], "label": "Iris-versicolor"},
//         {"point": [5.6, 2.7, 4.2, 1.3], "label": "Iris-versicolor"},
//         {"point": [5.7, 3.0, 4.2, 1.2], "label": "Iris-versicolor"},
//         {"point": [5.7, 2.9, 4.2, 1.3], "label": "Iris-versicolor"},
//         {"point": [6.2, 2.9, 4.3, 1.3], "label": "Iris-versicolor"},
//         {"point": [5.1, 2.5, 3.0, 1.1], "label": "Iris-versicolor"},
//         {"point": [5.7, 2.8, 4.1, 1.3], "label": "Iris-versicolor"},
//         {"point": [6.3, 3.3, 6.0, 2.5], "label": "Iris-virginica"},
//         {"point": [5.8, 2.7, 5.1, 1.9], "label": "Iris-virginica"},
//         {"point": [7.1, 3.0, 5.9, 2.1], "label": "Iris-virginica"},
//         {"point": [6.3, 2.9, 5.6, 1.8], "label": "Iris-virginica"},
//         {"point": [6.5, 3.0, 5.8, 2.2], "label": "Iris-virginica"},
//         {"point": [7.6, 3.0, 6.6, 2.1], "label": "Iris-virginica"},
//         {"point": [4.9, 2.5, 4.5, 1.7], "label": "Iris-virginica"},
//         {"point": [7.3, 2.9, 6.3, 1.8], "label": "Iris-virginica"},
//         {"point": [6.7, 2.5, 5.8, 1.8], "label": "Iris-virginica"},
//         {"point": [7.2, 3.6, 6.1, 2.5], "label": "Iris-virginica"},
//         {"point": [6.5, 3.2, 5.1, 2.0], "label": "Iris-virginica"},
//         {"point": [6.4, 2.7, 5.3, 1.9], "label": "Iris-virginica"},
//         {"point": [6.8, 3.0, 5.5, 2.1], "label": "Iris-virginica"},
//         {"point": [5.7, 2.5, 5.0, 2.0], "label": "Iris-virginica"},
//         {"point": [5.8, 2.8, 5.1, 2.4], "label": "Iris-virginica"},
//         {"point": [6.4, 3.2, 5.3, 2.3], "label": "Iris-virginica"},
//         {"point": [6.5, 3.0, 5.5, 1.8], "label": "Iris-virginica"},
//         {"point": [7.7, 3.8, 6.7, 2.2], "label": "Iris-virginica"},
//         {"point": [7.7, 2.6, 6.9, 2.3], "label": "Iris-virginica"},
//         {"point": [6.0, 2.2, 5.0, 1.5], "label": "Iris-virginica"},
//         {"point": [6.9, 3.2, 5.7, 2.3], "label": "Iris-virginica"},
//         {"point": [5.6, 2.8, 4.9, 2.0], "label": "Iris-virginica"},
//         {"point": [7.7, 2.8, 6.7, 2.0], "label": "Iris-virginica"},
//         {"point": [6.3, 2.7, 4.9, 1.8], "label": "Iris-virginica"},
//         {"point": [6.7, 3.3, 5.7, 2.1], "label": "Iris-virginica"},
//         {"point": [7.2, 3.2, 6.0, 1.8], "label": "Iris-virginica"},
//         {"point": [6.2, 2.8, 4.8, 1.8], "label": "Iris-virginica"},
//         {"point": [6.1, 3.0, 4.9, 1.8], "label": "Iris-virginica"},
//         {"point": [6.4, 2.8, 5.6, 2.1], "label": "Iris-virginica"},
//         {"point": [7.2, 3.0, 5.8, 1.6], "label": "Iris-virginica"},
//         {"point": [7.4, 2.8, 6.1, 1.9], "label": "Iris-virginica"},
//         {"point": [7.9, 3.8, 6.4, 2.0], "label": "Iris-virginica"},
//         {"point": [6.4, 2.8, 5.6, 2.2], "label": "Iris-virginica"},
//         {"point": [6.3, 2.8, 5.1, 1.5], "label": "Iris-virginica"},
//         {"point": [6.1, 2.6, 5.6, 1.4], "label": "Iris-virginica"},
//         {"point": [7.7, 3.0, 6.1, 2.3], "label": "Iris-virginica"},
//         {"point": [6.3, 3.4, 5.6, 2.4], "label": "Iris-virginica"},
//         {"point": [6.4, 3.1, 5.5, 1.8], "label": "Iris-virginica"},
//         {"point": [6.0, 3.0, 4.8, 1.8], "label": "Iris-virginica"},
//         {"point": [6.9, 3.1, 5.4, 2.1], "label": "Iris-virginica"},
//         {"point": [6.7, 3.1, 5.6, 2.4], "label": "Iris-virginica"},
//         {"point": [6.9, 3.1, 5.1, 2.3], "label": "Iris-virginica"},
//         {"point": [5.8, 2.7, 5.1, 1.9], "label": "Iris-virginica"},
//         {"point": [6.8, 3.2, 5.9, 2.3], "label": "Iris-virginica"},
//         {"point": [6.7, 3.3, 5.7, 2.5], "label": "Iris-virginica"},
//         {"point": [6.7, 3.0, 5.2, 2.3], "label": "Iris-virginica"},
//         {"point": [6.3, 2.5, 5.0, 1.9], "label": "Iris-virginica"},
//         {"point": [6.5, 3.0, 5.2, 2.0], "label": "Iris-virginica"},
//         {"point": [6.2, 3.4, 5.4, 2.3], "label": "Iris-virginica"},
//         {"point": [5.9, 3.0, 5.1, 1.8], "label": "Iris-virginica"}
//     ]


    root = build_kdtree(data_train);
    console.log(root);
    console.log("digraph G {\n" + generate_dot(root) + "}");

    // {
    //     "point": [
    //         0.5197569131851196,
    //         0.5197569131851196,
    //         0.5197569131851196,
    //         0.2591942250728607,
    //         0.004232414998114109,
    //         0.0,
    //         0.0,
    //         0.0,
    //         0.3422979712486267,
    //         0.6046153903007507,
    //         0.43986472487449646,
    //         0.17690035700798035,
    //         0.15342950820922852,
    //         0.07859812676906586,
    //         0.0,
    //         0.016351627185940742,
    //         0.08990746736526489,
    //         0.6046153903007507,
    //         0.4975588321685791,
    //         0.0667545422911644,
    //         0.008015829138457775,
    //         0.010165322571992874,
    //         0.01215257216244936,
    //         0.0,
    //         0.4975588321685791,
    //         0.4975588321685791,
    //         0.4975588321685791,
    //         0.03493586927652359,
    //         0.0,
    //         0.0,
    //         0.0,
    //         0.0,
    //         0.0,
    //         0.688172459602356,
    //         0.688172459602356,
    //         0.21153485774993896,
    //         0.42902737855911255,
    //         0.42902737855911255,
    //         0.42902737855911255,
    //         0.42902737855911255,
    //         0.2745759189128876,
    //         0.0,
    //         0.0,
    //         0.0,
    //         0.42902737855911255,
    //         0.43319350481033325,
    //         0.43319350481033325,
    //         0.43319350481033325,
    //         0.43319350481033325,
    //         0.43319350481033325,
    //         5.120626155985519e-05,
    //         0.10702132433652878,
    //         0.05856596305966377,
    //         0.20617036521434784,
    //         0.424323707818985,
    //         0.1649942845106125,
    //         0.3271125853061676,
    //         0.09533558785915375,
    //         0.05894923210144043,
    //         0.00021858036052435637,
    //         0.4720328450202942,
    //         0.4720328450202942,
    //         0.4720328450202942,
    //         0.49868497252464294,
    //         0.0033990656957030296,
    //         0.0,
    //         0.0,
    //         0.0,
    //         0.016154654324054718,
    //         0.49868497252464294,
    //         0.49868497252464294,
    //         0.49868497252464294,
    //         0.4074060618877411,
    //         0.4074060618877411,
    //         0.4074060618877411,
    //         0.4074060618877411,
    //         0.4074060618877411,
    //         0.00721022579818964,
    //         0.0,
    //         0.0,
    //         0.4074060618877411,
    //         0.42825889587402344,
    //         0.42825889587402344,
    //         0.2514026165008545,
    //         0.42825889587402344,
    //         0.42825889587402344,
    //         0.08646781742572784,
    //         0.08851543068885803,
    //         0.013364260084927082,
    //         0.42825889587402344,
    //         0.4089846611022949,
    //         0.1798367202281952,
    //         0.1746453046798706,
    //         0.14354446530342102,
    //         0.4089846611022949,
    //         0.4089846611022949,
    //         0.4089846611022949,
    //         0.2759071886539459,
    //         0.4089846611022949,
    //         0.41230306029319763,
    //         0.0021591533441096544,
    //         0.0,
    //         0.02080448530614376,
    //         0.41230306029319763,
    //         0.41230306029319763,
    //         0.41230306029319763,
    //         0.38141149282455444,
    //         0.41230306029319763,
    //         0.08540412038564682,
    //         0.13583125174045563,
    //         0.34044504165649414,
    //         0.650570809841156,
    //         0.650570809841156,
    //         0.043588656932115555,
    //         0.0,
    //         0.0,
    //         0.05893455073237419,
    //         0.06931114196777344,
    //         0.002559359883889556,
    //         0.0002936876262538135,
    //         0.6756435632705688,
    //         0.6756435632705688,
    //         0.251560777425766,
    //         0.10462628304958344,
    //         0.0037126741372048855,
    //         0.03482145443558693,
    //         0.004853870254009962,
    //         0.00011031533358618617,
    //         0.00033094597165472806,
    //         0.4979974329471588,
    //         0.4979974329471588,
    //         0.4979974329471588,
    //         0.4979974329471588,
    //         0.05473948270082474,
    //         0.0004929877468384802,
    //         0.0,
    //         0.0,
    //         0.0,
    //         0.07085230946540833,
    //         0.6685246229171753,
    //         0.6685246229171753,
    //         0.3035399913787842,
    //         0.04815712198615074,
    //         0.0
    //     ],
    //     "label": 4
    // }
    var point = [
            0.5224807858467102,
            0.5224807858467102,
            0.035213857889175415,
            0.0,
            0.0,
            0.0,
            0.33523523807525635,
            0.24940110743045807,
            0.5224807858467102,
            0.5155226588249207,
            0.5155226588249207,
            0.0,
            0.0,
            0.0,
            0.0,
            0.17451827228069305,
            0.40878355503082275,
            0.5155226588249207,
            0.5474397540092468,
            0.2875520586967468,
            0.07496654987335205,
            0.0,
            0.0,
            0.0,
            0.0845940038561821,
            0.5474397540092468,
            0.5474397540092468,
            0.5023449063301086,
            0.5023449063301086,
            0.07452134042978287,
            0.0,
            0.0,
            0.0,
            0.08375944942235947,
            0.4747236669063568,
            0.5023449063301086,
            0.4365192949771881,
            0.4365192949771881,
            0.4365192949771881,
            0.02229059487581253,
            0.004947798792272806,
            0.02523624151945114,
            0.4365192949771881,
            0.4042452871799469,
            0.26243215799331665,
            0.3617697060108185,
            0.3617697060108185,
            0.23463836312294006,
            0.3617697060108185,
            0.28600233793258667,
            0.29218873381614685,
            0.3617697060108185,
            0.3617697060108185,
            0.3460814356803894,
            0.2846126854419708,
            0.3127693831920624,
            0.3277534246444702,
            0.3327378034591675,
            0.060052692890167236,
            0.03589111566543579,
            0.11925108730792999,
            0.5378418564796448,
            0.5378418564796448,
            0.40079808235168457,
            0.40079808235168457,
            0.40079808235168457,
            0.0,
            0.0,
            0.17933602631092072,
            0.40079808235168457,
            0.40079808235168457,
            0.40079808235168457,
            0.215133935213089,
            0.3735765814781189,
            0.3999391496181488,
            0.3999391496181488,
            0.3999391496181488,
            0.3999391496181488,
            0.31345078349113464,
            0.18191221356391907,
            0.19751857221126556,
            0.24554838240146637,
            0.23184126615524292,
            0.28527870774269104,
            0.4687328040599823,
            0.3308497965335846,
            0.4687328040599823,
            0.4687328040599823,
            0.1479826718568802,
            0.09694407880306244,
            0.18147355318069458,
            0.09035128355026245,
            0.38404470682144165,
            0.4539463520050049,
            0.4539463520050049,
            0.2652140259742737,
            0.055467113852500916,
            0.33950310945510864,
            0.4539463520050049,
            0.2554914653301239,
            0.3106521666049957,
            0.19699518382549286,
            0.04148483648896217,
            0.48152709007263184,
            0.48152709007263184,
            0.48152709007263184,
            0.18639253079891205,
            0.25006914138793945,
            0.0,
            0.023183109238743782,
            0.31363874673843384,
            0.5461198687553406,
            0.5461198687553406,
            0.5461198687553406,
            0.029981093481183052,
            0.0,
            0.0,
            0.0,
            0.027911633253097534,
            0.14536957442760468,
            0.40609291195869446,
            0.588236927986145,
            0.588236927986145,
            0.33704257011413574,
            0.040749963372945786,
            0.0,
            0.0,
            0.01854022778570652,
            0.14630374312400818,
            0.6578083038330078,
            0.6578083038330078,
            0.3259235918521881,
            0.0055794320069253445,
            0.0018598107853904366,
            0.0,
            0.0,
            0.0,
            0.0,
            0.05370555445551872,
            0.7012597322463989,
            0.7012597322463989,
            0.0809595137834549,
            0.005522894207388163,
            0.0
        ];

    var digits = kdtree_nearest_neighbor_query(root, point, 10) // expected 3

    let results = {0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0};

    for(let i = 0 ; i < digits.length ; i++){
        results[digits[i][0].label]++;
    }

    console.log(results);
    console.log(getMax(results));
    var counter = [];
    for(let i = 0 ; i < data_test.length ; i++){
        let results = kdtree_nearest_neighbor_query(root, data_test[i].point, 10)
        let prediction = {0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0};

        for(let i = 0 ; i < results.length ; i++){
            prediction[results[i][0].label]++;
        }
        // debugger;
        counter.push([getMax(prediction)[0], data_test[i].label]);
    }
    console.log(counter)

    let isCorrect = 0;
    for(let i = 0 ; i < counter.length ; i++){
        if (counter[i][0] == counter[i][1])
            isCorrect++;
    }
    console.log("Correct: ", isCorrect, "Total:", counter.length);
    console.log("Acc: ", isCorrect/counter.length);
// }

// function draw(){

//     background(0);

//     // Draw grid
//     for (var x = 0; x < width; x += 100) {
//         for (var y = 0; y < height; y += 100) {
//             stroke (125 , 125 , 125) ;
//             strokeWeight (1) ;
//             // console.log('x', x, 'y', y)
//             line (x, 0, x, height );
//             line (0 , y, width , y);
//         }
//     }

//     // Draw points
//     for ( let i = 0; i < data.length; i ++) {
//         var x = data[i][0]
//         var y = data[i][1]
//         fill (255 , 255 , 255);
//         circle (x, height - y, 7) ; // 200 -y para q se dibuje apropiadamente
//         textSize (8) ;
//         text(x + ',' + y, x + 5, height - y);// 200 -y para q se dibuje apropiadamente
//     }

//     // Query rect -------------------------
//     // stroke(0,255,0);
//     // rectMode(CENTER);
//     // noFill();
//     // var rectWidth = 100
//     // var rectHeight = 100

//     // rect(mouseX, mouseY, rectWidth, rectHeight);
//     // var xMin = mouseX - rectWidth/2;
//     // var yMin = height - (mouseY + rectHeight/2);
//     // var xMax = mouseX + rectWidth/2;
//     // var yMax = height - (mouseY - rectHeight/2);
//     // // console.log('mouseX', mouseX, 'mouseY', mouseY)
//     // // console.log('p1', xMin, yMin, 'p2', xMax, yMax)

//     // let found = []
//     // var rectangle = [[xMin, xMax], [yMin, yMax]]
//     // range_query_rect(root, rectangle, found)
//     // // console.log('found', found)
//     // for ( let i = 0; i < found.length; i ++) {
//     //     var x = found[i][0];
//     //     var y = found[i][1];
//     //     fill (0 , 255 , 0);
//     //     circle (x, height - y, 7);
//     // }

//     // Query circle -------------------------------
//     stroke(0,255,0);
//     noFill();
//     var radio = 50;
//     circle(mouseX, mouseY, radio * 2);
//     let found = []
//     var center = [mouseX, height - mouseY]
//     range_query_circle(root, center, 50, found)
//     for ( let i = 0; i < found.length; i ++) {
//         var x = found[i][0];
//         var y = found[i][1];
//         fill (0 , 255 , 0);
//         circle (x, height - y, 7);
//     }
    

}
