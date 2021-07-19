let width = 500;
let height = 300;

let data = []

let root;

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
    console.log("digraph G {\n" + generate_dot(root) + "}");

    // var point = [140 ,90]; // query
    var point = [200 , 200]; // query
    console.log("Este!: ", closest_point_brute_force(data, point))
    console.log(naive_closest_point(root, point))

    var count = 4;
	var results = [];
	knn_closest_point(root, point, count, 0, results);
	// if (results.length > count)
	// 	results.slice(0, count);
    console.log('----knn_closest_point', results)

    // let found = []
    // var rectangle = [[0, 100], [0, 100]] // xmin xmax, ymin ymax
    // range_query_rect(root, rectangle, found)
    // console.log('range_query_rect', found)

    // let found = []
    // var center = [50, 50]
    // range_query_circle(root, center, 30, found)
    // console.log('range_query_circle', found)

    let found = kdtree_nearest_neighbor_query(root, point, 3)


    console.log('nnquery', found)


}

function draw(){

    background(0);

    // Draw grid
    for (var x = 0; x < width; x += 100) {
        for (var y = 0; y < height; y += 100) {
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

    // Query rect -------------------------
    // stroke(0,255,0);
    // rectMode(CENTER);
    // noFill();
    // var rectWidth = 100
    // var rectHeight = 100

    // rect(mouseX, mouseY, rectWidth, rectHeight);
    // var xMin = mouseX - rectWidth/2;
    // var yMin = height - (mouseY + rectHeight/2);
    // var xMax = mouseX + rectWidth/2;
    // var yMax = height - (mouseY - rectHeight/2);
    // // console.log('mouseX', mouseX, 'mouseY', mouseY)
    // // console.log('p1', xMin, yMin, 'p2', xMax, yMax)

    // let found = []
    // var rectangle = [[xMin, xMax], [yMin, yMax]]
    // range_query_rect(root, rectangle, found)
    // // console.log('found', found)
    // for ( let i = 0; i < found.length; i ++) {
    //     var x = found[i][0];
    //     var y = found[i][1];
    //     fill (0 , 255 , 0);
    //     circle (x, height - y, 7);
    // }

    // Query circle -------------------------------
    stroke(0,255,0);
    noFill();
    var radio = 50;
    circle(mouseX, mouseY, radio * 2);
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
