function setup () {
    scalar=1;
    var width = 400;
    var height = 400;
    createCanvas (width , height ) ;

    background (0) ;

    // Draw Grid
    for (var x = 0; x < width; x += 100) {
        for (var y = 0; y < height; y += 100) {
            stroke (125 , 125 , 125) ;
            strokeWeight (1) ;
            line (x, 0, x, height );
            line (0 , y, width , y);
        }
    }

    // Draw data
    var data = [
        [40, 70],
        [70, 130],
        [90, 40],
        [110, 100],
        [140, 110],
        [160, 100],
        [150, 30],
    ];

    for (let i = 0; i < data.length; i ++) {
        fill (255 , 255 , 255) ;
        circle (x, height - y, 7) ; // 200 -y para q se dibuje apropiadamente
        textSize (10) ;
        text(x + ',' + y, x + 5, height - y);// 200 -y para q se dibuje apropiadamente */
        circle (data[i][0]*scalar, (height - data[i][1]*scalar), 7) ; // 200 -y para q se dibuje apropiadamente
        textSize (10) ;
        text(data[i][0] + ',' + data[i][1], (data[i][0])*scalar+5, height - (data[i][1])*scalar);// 200 -y para q se dibuje apropiadamente
    }

    // Draw random data 
    // var data = []
    // for (let i = 0; i < 40; i ++) {
    //     var x = Math.floor ( Math.random () * height );
    //     var y = Math.floor ( Math.random () * height );
    //     data.push ([x, y]); 
    //     console.log(x,y)
    //     fill (255 , 255 , 255) ;
    //     circle (x, height - y, 7) ; // 200 -y para q se dibuje apropiadamente
    //     textSize (10) ;
    //     text(x + ',' + y, x + 5, height - y);// 200 -y para q se dibuje apropiadamente */
    // }

    var point = [140,90];
    var pointX = point[0];
    var pointY = point[1];
    fill(0 , 255, 255);
    circle (pointX, height - pointY, 7); 
    text(pointX + ',' + pointY, pointX + 5, height - pointY);


    var root = build_kdtree(data) ;
    console.log(root);
    console.log("digraph G {\n" + generate_dot(root) + "}");
    console.log("Closest point brute force", closest_point_brute_force(data, point));
    console.log("Closest point naive", naive_closest_point(root, point));
    console.log("Closest point", closest_point(root, point));

    var found = kdtree_nearest_neighbor_query(root, point, 4)
    console.log('KNN kdtree Nearest neighbor query', found);

    for (let i = 0; i < found.length; i ++) {
        fill (0 , 255 , 0) ;
        circle (found[i][0][0]*scalar, (height - found[i][0][1]*scalar), 7) ; // 200 -y para q se dibuje apropiadamente
        textSize (10) ;
        text(found[i][0][0] + ',' + found[i][0][1], (found[i][0][0])*scalar+5, height - (found[i][0][1])*scalar);// 200 -y para q se dibuje apropiadamente
    }


}