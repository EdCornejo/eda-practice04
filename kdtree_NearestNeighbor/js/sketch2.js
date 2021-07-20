function evento3 () {
    let width = 500;
    let height = 300;

    let data = []

    let root;

    data = [
        [40 ,70],
        [70 ,130],
        [90 ,40],
        [110 , 100],
        [140 ,110],
        [160 , 100],
        [150, 30]
    ];

    root = build_kdtree(data);
    
    var point = [140 ,90]; // query
    var count = 4;
    var results = [];
    knn_closest_point(root, point, count, 0, results);
    console.log('knn_closest_point', results)
}


