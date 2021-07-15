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
}