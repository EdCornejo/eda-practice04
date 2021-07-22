function setup () {
    var width = 600;
    var height = 600;
    createCanvas (width , height ) ;

    background (0) ;

    for (var x = 0; x < width; x += 100) {
        for (var y = 0; y < height; y += 100) {
            stroke (125 , 125 , 125) ;
            strokeWeight (1) ;
            line (x, 0, x, height );
            line (0 , y, width , y);
        }
    }
    //Ingresa datos aleatorios
    /* var data = [];

    for ( let i = 0; i < 6; i ++) {
        var x = Math.floor ( Math.random () * height );
        var y = Math.floor ( Math.random () * height );
        data.push ([x, y]) ;

        fill (255 , 255 , 255) ;
        circle (x, height - y, 7) ; // 200 -y para q se dibuje apropiadamente
        textSize (8) ;
        text(x + ',' + y, x + 5, height - y);// 200 -y para q se dibuje apropiadamente

    } */
    var data=[
        [40,70],
        [70,130],
        [90,40],
        [110,100],
        [140,110],
        [160,100]
    ];
    for ( let i = 0; i < 6; i ++) {
        var x=data[i][0];
        var y=data[i][1];
        
        fill (255 , 255 , 255) ;
        circle (x, height - y, 7) ; // 200 -y para q se dibuje apropiadamente
        textSize (8) ;
        text(x + ',' + y, x + 5, height - y);// 200 -y para q se dibuje apropiadamente

    }
   // var point=[140,90];

    var root = build_kdtree(data) ;
    console.log(root);
    console.log("digraph G {\n" + generate_dot(root) + "}");

    var point = [140 ,90]; // query
    var pointX = point[0];
    var pointY = point[1];
    fill (0 , 255 , 255);
    circle (pointX, height - pointY, 7) ; // 200 -y para q se dibuje apropiadamente
    text(pointX + ',' + pointY, pointX + 5, height - pointY);// 200 -y para q se dibuje apropiadamente

    
    console.log('closest_point_brute_force', closest_point_brute_force(data, point))
    console.log('naive_closest_point', naive_closest_point(root, point))
    console.log('closest_point', closest_point(root, point))

    var found = closest_point(root, point)
    var foundX = found[0];
    var foundY = found[1];

    fill(0 , 255, 0);
    circle (foundX, height - foundY, 7) ; // 200 -y para q se dibuje apropiadamente
    text(foundX + ',' + foundY, foundX + 5, height - foundY);// 200 -y para q se dibuje apropiadamente
}