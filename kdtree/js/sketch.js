function setup () {
    scalar=1;
    var width = 200;
    var height = 200;
    createCanvas (width , height ) ;

    background (0) ;

    for (var x = 0; x < width; x += width / 10) {
        for (var y = 0; y < height; y += height / 10) {
            stroke (125 , 125 , 125) ;
            strokeWeight (1) ;
            line (x, 0, x, height );
            line (0 , y, width , y);
        }
    }
var data = [
     [40 ,70] ,
     [70 ,130] ,
     [90 ,40] ,
     [110 , 100] ,
     [140 ,110] ,
     [160 , 100] ,
     [150 , 30]
 ];
 var _point= [140,90];

    for ( let i = 0; i < data.length; i ++) {
        /* var x = Math.floor ( Math.random () * height );
        var y = Math.floor ( Math.random () * height );
        data.push ([x, y]) ; */

        fill (255 , 255 , 255) ;
        /* circle (x, height - y, 7) ; // 200 -y para q se dibuje apropiadamente
        textSize (10) ;
        text(x + ',' + y, x + 5, height - y);// 200 -y para q se dibuje apropiadamente */
        circle (data[i][0]*scalar, (height - data[i][1]*scalar), 7) ; // 200 -y para q se dibuje apropiadamente
        textSize (10) ;
        text(data[i][0] + ',' + data[i][1], (data[i][0])*scalar+5, height - (data[i][1])*scalar);// 200 -y para q se dibuje apropiadamente

    }
    //console.log(data);
    var root = build_kdtree(data) ;
    console.log(root);
    console.log("digraph G {\n" + generate_dot(root) + "}");
    console.log("NN brute_force ="+closest_point_brute_force(data,_point));
    console.log("NN naive_closest ="+naive_closest_point(root,_point));
    console.log("NN closest ="+closest_point(root,_point));
}