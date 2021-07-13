function setup () {
    var width = 600;
    var height = 600;
    createCanvas (width , height ) ;

    background (0) ;

    for (var x = 0; x < width; x += width / 10) {
        for (var y = 0; y < height; y += height / 5) {
            stroke (125 , 125 , 125) ;
            strokeWeight (1) ;
            line (x, 0, x, height );
            line (0 , y, width , y);
        }
    }

    var data = [];

    for ( let i = 0; i < 12; i ++) {
        var x = Math.floor ( Math.random () * height );
        var y = Math.floor ( Math.random () * height );
        data.push ([x, y]) ;

        fill (255 , 255 , 255) ;
        circle (x, height - y, 7) ; // 200 -y para q se dibuje apropiadamente
        textSize (8) ;
        text(x + ',' + y, x + 5, height - y);// 200 -y para q se dibuje apropiadamente

    }

    var root = build_kdtree(data) ;
    console.log(root);
    console.log("digraph G {\n" + generate_dot(root) + "}");


    var root = build_kdtree(data) ;
    console.log(root);
    console.log("digraph G {\n" + generate_dot(root) + "}");

    var data = [];

    var data1 = [
        [40 ,70],
        [70 ,130],
        [90 ,40],
        [110 , 100],
        [140 ,110],
        [160 , 100],
        [150, 30]
    ];
    var point1 = [140 ,90]; // query
    var root1 = build_kdtree(data1);
    
    console.log(closest_point_brute_force(data1, point1))
    console.log(naive_closest_point(root1, point1))


    var count = count || 1;
	var results = [];
	closest_point(root1, point1, count, 0, results);
	if (results.length > count)
		results.slice(0, count);

    console.log('closest_point', results)

}