let width = 500;
let height = 300;

let data = []

let root;
let rqcircle,rqrect=0;
function setup () {
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
    console.log(root);
    
    let RQC=document.getElementById("RQC");
    let RQR=document.getElementById("RQR");
	
}

function draw(){

    background(0);

    // Draw grid
    for (var x = 0; x < width; x += width/10) {
        for (var y = 0; y < height; y += height/10) {
            stroke (125 , 125 , 125) ;
            strokeWeight (1) ;
            // console.log('x', x, 'y', y)
            line (x, 0, x, height );
            line (0 , y, width , y);
        }
    }

    // Draw points
    for ( let i = 0; i < data.length; i ++) {
        var x = data[i][0]
        var y = data[i][1]
        fill (255 , 255 , 255);
        circle (x, height - y, 7) ; // 200 -y para q se dibuje apropiadamente
        textSize (8) ;
        text(x + ',' + y, x + 5, height - y);// 200 -y para q se dibuje apropiadamente
    }
    RQC.addEventListener("click",activarRQC)
    RQR.addEventListener("click",activarRQR)
    if(rqcircle==1){
    // Query circle -------------------------------
    stroke(0,255,0);
    noFill();
    var radio = 100;
    circle(mouseX, mouseY, radio);
    let found = []
    var center = [mouseX, height - mouseY]
    range_query_circle(root, center, 50, found)
    for ( let i = 0; i < found.length; i ++) {
        var x = found[i][0];
        var y = found[i][1];
        fill (0 , 255 , 0);
        circle (x, height - y, 7);
    }
}
if(rqrect==1){
    // Query rect -------------------------
    stroke(0,255,0);
     rectMode(CENTER);
     noFill();
     var rectWidth = 100
     var rectHeight = 100

     rect(mouseX, mouseY, rectWidth, rectHeight);
     var xMin = mouseX - rectWidth/2;
     var yMin = height - (mouseY + rectHeight/2);
     var xMax = mouseX + rectWidth/2;
     var yMax = height - (mouseY - rectHeight/2);
    
     let found = []
     var rectangle = [[xMin, xMax], [yMin, yMax]]
     range_query_rect(root, rectangle, found)
     // console.log('found', found)
     for ( let i = 0; i < found.length; i ++) {
         var x = found[i][0];
         var y = found[i][1];
         fill (0 , 255 , 0);
         circle (x, height - y, 7);
     }
}

}
function activarRQC(){rqcircle=1;rqrect=0;}
function activarRQR(){rqrect=1;rqcircle=0}
