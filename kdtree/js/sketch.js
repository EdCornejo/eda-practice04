function setup () {
    var width = 300;
    var height = 300;
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

    // var root = build_kdtree(data) ;
    // console.log(root);
    // console.log("digraph G {\n" + generate_dot(root) + "}");

    var data = [
        [40 ,70],
        [70 ,130],
        [90 ,40],
        [110 , 100],
        [140 ,110],
        [160 , 100],
        [150, 30]
    ];

    for ( let i = 0; i < data.length; i ++) {
        var x = data[i][0]
        var y = data[i][1]
        console.log(x, y)
        fill (255 , 255 , 255);
        circle (x, height - y, 7) ; // 200 -y para q se dibuje apropiadamente
        // console.log('point', x, height - y)
        textSize (8) ;
        text(x + ',' + y, x + 5, height - y);// 200 -y para q se dibuje apropiadamente
    }
    
    var root = build_kdtree(data) ;
    console.log(root);
    console.log("digraph G {\n" + generate_dot(root) + "}");


    var point = [140 ,90]; // query
  
    
    console.log(closest_point_brute_force(data, point))
    console.log(naive_closest_point(root, point))


    var count = count || 1;
	var results = [];
	closest_point(root, point, count, 0, results);
	if (results.length > count)
		results.slice(0, count);

    console.log('closest_point', results)

    var rectangle = [ [0, 0], [100, 100]]
    var found = []
    // range_query_orthogonal(root, rectangle, found)
    range_query_rect(root, rectangle, found)

    stroke(0,255,0);
    noFill()
    rectMode(CENTER);
    // rect(range.x,range.y,range.w*2,range.h*2);
    var rectangle_w = rectangle[1][0] - rectangle[0][0] 
    var rectangle_h = rectangle[1][1] - rectangle[0][1]
    rect(rectangle[0][0] + rectangle_w/2, height - (rectangle[0][1] +rectangle_h/2),
        rectangle_w, rectangle_h)
    // rect(50,  height - 50 , 50,50)
    // console.log(rectangle[0][0] + rectangle_w/2 , height - rectangle[0][1] + rectangle_h/2,
    //     rectangle_w, rectangle_h)

    console.log('range_query_orthogonal', found)
}