function setup(){
    var width = 500;
    var height = 300;
    createCanvas (width , height) ;

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
     [160 , 100] 
 ];
 var _point= [140,90];

    for ( let i = 0; i < data.length; i ++) {
        /* var x = Math.floor ( Math.random () * height );
        var y = Math.floor ( Math.random () * height );
        data.push ([x, y]) ; */
        fill (255 , 255 , 0) ;
        let x=data[i][0];
        let y=data[i][1];
        let _x=x;
        let _y=height-y;
        circle (_x, _y, 7) ; 
        textSize (10) ;
        text(x + ',' + y, _x, _y);
        
    }
    fill (0 , 255 , 255) ;
    circle (_point[0], height-_point[1], 7) ; 
    textSize (10) ;
    text(_point[0] + ',' + _point[1], _point[0], height-_point[1]);

    var root = build_kdtree(data);
    console.log(root);
    console.log("digraph G {\n" + generate_dot(root) + "}");
    console.log("NN brute_force ="+closest_point_brute_force(data,_point));
    console.log("NN naive_closest ="+naive_closest_point(root,_point));
    //console.log("NN closest ="+closest_point(root,_point));

}