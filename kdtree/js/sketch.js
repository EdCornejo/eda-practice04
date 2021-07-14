function setup () {
    var width = 600;
    var height = 600;
    // createCanvas (width , height ) ;

    // background (0) ;

    // for (var x = 0; x < width; x += width / 10) {
    //     for (var y = 0; y < height; y += height / 5) {
    //         stroke (125 , 125 , 125) ;
    //         strokeWeight (1) ;
    //         line (x, 0, x, height );
    //         line (0 , y, width , y);
    //     }
    // }

    // var data = [];

    // for ( let i = 0; i < 12; i ++) {
    //     var x = Math.floor ( Math.random () * height );
    //     var y = Math.floor ( Math.random () * height );
    //     data.push ([x, y]) ;

    //     fill (255 , 255 , 255) ;
    //     circle (x, height - y, 7) ; // 200 -y para q se dibuje apropiadamente
    //     textSize (8) ;
    //     text(x + ',' + y, x + 5, height - y);// 200 -y para q se dibuje apropiadamente

    // }
    // console.log(data)
    // var root = build_kdtree(data);
    // console.log(root);
    // // var root = build_kdtree(data);
    // let point = [0, 0];
    // console.log(closest_point(root , point));

    // function range_query_circle(root , center , radio , queue , depth = 0) {
    // let point = [0, 0];
    var data = [
        [40 ,70],
        [70 ,130],
        [90 ,40],
        [110 , 100],
        [140 ,110],
        [160 , 100],
    ];
    var root = build_kdtree(data);

    // range_query_circle(root , point, 5, queue)
    // console.log(queue);
    // let rect = [[0,0],[1000, 1000]];
    // queue = [];
    // range_query_rect(root , rect, queue)
    // console.log(queue);
    var queue = [];
    // var rect = [ [150, 170], [100, 120] ]
    // var rect = [[50, 90], [0, 100]];

    // p = Point(160,95)
    // p = Point(160,106)
    let p = [160, 101];
    range_query_circle(root, p, 5, queue);
    // range_query_rect(root, rect, queue);
    console.log(queue);

    console.log("digraph G {\n" + generate_dot(root) + "}");

}