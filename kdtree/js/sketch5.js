function evento5 () {
    let width = 500;
    let height = 300;

    let data = []

    let root;


    createCanvas (width, height);
    frameRate(30)
    background(0) ;

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
    // var point = [140 ,90]; // query
    var point = [200 , 200]; // query
    //console.log("Este!: ", closest_point_brute_force(data, point))
    //console.log(naive_closest_point(root, point))

    var count = 4;
	var results = [];
	knn_closest_point(root, point, count, 0, results);
	// if (results.length > count)
	// 	results.slice(0, count);
    console.log('----knn_closest_point', results)

}


