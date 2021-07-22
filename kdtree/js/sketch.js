function setup(){
    var width = 500;
    var height = 300;
    createCanvas(width , height) ;
    background (0) ;

    for (var x = 0; x < width; x += width / 10) {
        for (var y = 0; y < height; y += height / 10) {
            stroke (125 , 125 , 125) ;
            strokeWeight (1) ;
            line (x, 0, x, height );
            line (0 , y, width , y);
        }
    }
var data = [];
var num_datos=document.getElementById("num").value;
if(num_datos==0){num_datos=10}
    for ( let i = 0; i < num_datos; i ++) {
        let x = Math.floor ( Math.random () * width);
        let y = Math.floor ( Math.random () * height );
        data.push ([x, y]) ;
        fill (255 , 255 , 255) ;
        let _x=x;
        let _y=height-y;
        circle (_x, _y, 7) ; 
        textSize (10) ;
        text(x + ',' + y, _x, _y);
        console.log(data);
    }
    var root = build_kdtree(data);
    console.log(root);
    console.log("digraph G {\n" + generate_dot(root) + "}");
    console.log("Altura del árbol : "+getHeight(root));
}
