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

    // data = [];
    // for ( let i = 0; i < 12; i ++) {
    //     var x = Math.floor ( Math.random () * width );
    //     var y = Math.floor ( Math.random () * height );
    //     data.push ([x, y]) ;

    //     fill (255 , 255 , 255) ;
    //     circle (x, height - y, 7) ; // 200 -y para q se dibuje apropiadamente
    //     textSize (8) ;
    //     text(x + ',' + y, x + 5, height - y);// 200 -y para q se dibuje apropiadamente
    // }

    // Draw from data 
    // for ( let i = 0; i < data.length; i ++) {
    //     var x = data[i][0]
    //     var y = data[i][1]
    //     console.log(x, y)
    //     fill (255 , 255 , 255);
    //     circle (x, height - y, 7) ; // 200 -y para q se dibuje apropiadamente
    //     textSize (8) ;
    //     text(x + ',' + y, x + 5, height - y);// 200 -y para q se dibuje apropiadamente
    // }
    
    // root = build_kdtree(data);
    // console.log(root);
    // console.log("digraph G {\n" + generate_dot(root) + "}");

    // var point = [140 ,90]; // query
    // console.log(closest_point_brute_force(data, point))
    // console.log(naive_closest_point(root, point))

    // var count = count || 1;
    // var results = [];
    // closest_point(root, point, count, 0, results);
    // if (results.length > count)
    //     results.slice(0, count);
    // console.log('closest_point', results)

    // let found = []
    // var rectangle = [[0, 100], [0, 100]] // xmin xmax, ymin ymax
    // range_query_rect(root, rectangle, found)
    // console.log('range_query_rect', found)
    
    // let found = []
    // var center = [50, 50]
    // range_query_circle(root, center, 30, found)
    // console.log('range_query_circle', found)

    let found = []
    nnquery(root, [200, 200], 1, found) 
    console.log('nnquery', found)


    data = [
        {"point": [5.1, 3.5, 1.4, 0.2], "label": "Iris-setosa"},
        {"point": [4.9, 3.0, 1.4, 0.2], "label": "Iris-setosa"},
        {"point": [4.7, 3.2, 1.3, 0.2], "label": "Iris-setosa"},
        {"point": [4.6, 3.1, 1.5, 0.2], "label": "Iris-setosa"},
        {"point": [5.0, 3.6, 1.4, 0.2], "label": "Iris-setosa"},
        {"point": [5.4, 3.9, 1.7, 0.4], "label": "Iris-setosa"},
        {"point": [4.6, 3.4, 1.4, 0.3], "label": "Iris-setosa"},
        {"point": [5.0, 3.4, 1.5, 0.2], "label": "Iris-setosa"},
        {"point": [4.4, 2.9, 1.4, 0.2], "label": "Iris-setosa"},
        {"point": [4.9, 3.1, 1.5, 0.1], "label": "Iris-setosa"},
        {"point": [5.4, 3.7, 1.5, 0.2], "label": "Iris-setosa"},
        {"point": [4.8, 3.4, 1.6, 0.2], "label": "Iris-setosa"},
        {"point": [4.8, 3.0, 1.4, 0.1], "label": "Iris-setosa"},
        {"point": [4.3, 3.0, 1.1, 0.1], "label": "Iris-setosa"},
        {"point": [5.8, 4.0, 1.2, 0.2], "label": "Iris-setosa"},
        {"point": [5.7, 4.4, 1.5, 0.4], "label": "Iris-setosa"},
        {"point": [5.4, 3.9, 1.3, 0.4], "label": "Iris-setosa"},
        {"point": [5.1, 3.5, 1.4, 0.3], "label": "Iris-setosa"},
        {"point": [5.7, 3.8, 1.7, 0.3], "label": "Iris-setosa"},
        {"point": [5.1, 3.8, 1.5, 0.3], "label": "Iris-setosa"},
        {"point": [5.4, 3.4, 1.7, 0.2], "label": "Iris-setosa"},
        {"point": [5.1, 3.7, 1.5, 0.4], "label": "Iris-setosa"},
        {"point": [4.6, 3.6, 1.0, 0.2], "label": "Iris-setosa"},
        {"point": [5.1, 3.3, 1.7, 0.5], "label": "Iris-setosa"},
        {"point": [4.8, 3.4, 1.9, 0.2], "label": "Iris-setosa"},
        {"point": [5.0, 3.0, 1.6, 0.2], "label": "Iris-setosa"},
        {"point": [5.0, 3.4, 1.6, 0.4], "label": "Iris-setosa"},
        {"point": [5.2, 3.5, 1.5, 0.2], "label": "Iris-setosa"},
        {"point": [5.2, 3.4, 1.4, 0.2], "label": "Iris-setosa"},
        {"point": [4.7, 3.2, 1.6, 0.2], "label": "Iris-setosa"},
        {"point": [4.8, 3.1, 1.6, 0.2], "label": "Iris-setosa"},
        {"point": [5.4, 3.4, 1.5, 0.4], "label": "Iris-setosa"},
        {"point": [5.2, 4.1, 1.5, 0.1], "label": "Iris-setosa"},
        {"point": [5.5, 4.2, 1.4, 0.2], "label": "Iris-setosa"},
        {"point": [4.9, 3.1, 1.5, 0.1], "label": "Iris-setosa"},
        {"point": [5.0, 3.2, 1.2, 0.2], "label": "Iris-setosa"},
        {"point": [5.5, 3.5, 1.3, 0.2], "label": "Iris-setosa"},
        {"point": [4.9, 3.1, 1.5, 0.1], "label": "Iris-setosa"},
        {"point": [4.4, 3.0, 1.3, 0.2], "label": "Iris-setosa"},
        {"point": [5.1, 3.4, 1.5, 0.2], "label": "Iris-setosa"},
        {"point": [5.0, 3.5, 1.3, 0.3], "label": "Iris-setosa"},
        {"point": [4.5, 2.3, 1.3, 0.3], "label": "Iris-setosa"},
        {"point": [4.4, 3.2, 1.3, 0.2], "label": "Iris-setosa"},
        {"point": [5.0, 3.5, 1.6, 0.6], "label": "Iris-setosa"},
        {"point": [5.1, 3.8, 1.9, 0.4], "label": "Iris-setosa"},
        {"point": [4.8, 3.0, 1.4, 0.3], "label": "Iris-setosa"},
        {"point": [5.1, 3.8, 1.6, 0.2], "label": "Iris-setosa"},
        {"point": [4.6, 3.2, 1.4, 0.2], "label": "Iris-setosa"},
        {"point": [5.3, 3.7, 1.5, 0.2], "label": "Iris-setosa"},
        {"point": [5.0, 3.3, 1.4, 0.2], "label": "Iris-setosa"},
        {"point": [7.0, 3.2, 4.7, 1.4], "label": "Iris-versicolor"},
        {"point": [6.4, 3.2, 4.5, 1.5], "label": "Iris-versicolor"},
        {"point": [6.9, 3.1, 4.9, 1.5], "label": "Iris-versicolor"},
        {"point": [5.5, 2.3, 4.0, 1.3], "label": "Iris-versicolor"},
        {"point": [6.5, 2.8, 4.6, 1.5], "label": "Iris-versicolor"},
        {"point": [5.7, 2.8, 4.5, 1.3], "label": "Iris-versicolor"},
        {"point": [6.3, 3.3, 4.7, 1.6], "label": "Iris-versicolor"},
        {"point": [4.9, 2.4, 3.3, 1.0], "label": "Iris-versicolor"},
        {"point": [6.6, 2.9, 4.6, 1.3], "label": "Iris-versicolor"},
        {"point": [5.2, 2.7, 3.9, 1.4], "label": "Iris-versicolor"},
        {"point": [5.0, 2.0, 3.5, 1.0], "label": "Iris-versicolor"},
        {"point": [5.9, 3.0, 4.2, 1.5], "label": "Iris-versicolor"},
        {"point": [6.0, 2.2, 4.0, 1.0], "label": "Iris-versicolor"},
        {"point": [6.1, 2.9, 4.7, 1.4], "label": "Iris-versicolor"},
        {"point": [5.6, 2.9, 3.6, 1.3], "label": "Iris-versicolor"},
        {"point": [6.7, 3.1, 4.4, 1.4], "label": "Iris-versicolor"},
        {"point": [5.6, 3.0, 4.5, 1.5], "label": "Iris-versicolor"},
        {"point": [5.8, 2.7, 4.1, 1.0], "label": "Iris-versicolor"},
        {"point": [6.2, 2.2, 4.5, 1.5], "label": "Iris-versicolor"},
        {"point": [5.6, 2.5, 3.9, 1.1], "label": "Iris-versicolor"},
        {"point": [5.9, 3.2, 4.8, 1.8], "label": "Iris-versicolor"},
        {"point": [6.1, 2.8, 4.0, 1.3], "label": "Iris-versicolor"},
        {"point": [6.3, 2.5, 4.9, 1.5], "label": "Iris-versicolor"},
        {"point": [6.1, 2.8, 4.7, 1.2], "label": "Iris-versicolor"},
        {"point": [6.4, 2.9, 4.3, 1.3], "label": "Iris-versicolor"},
        {"point": [6.6, 3.0, 4.4, 1.4], "label": "Iris-versicolor"},
        {"point": [6.8, 2.8, 4.8, 1.4], "label": "Iris-versicolor"},
        {"point": [6.7, 3.0, 5.0, 1.7], "label": "Iris-versicolor"},
        {"point": [6.0, 2.9, 4.5, 1.5], "label": "Iris-versicolor"},
        {"point": [5.7, 2.6, 3.5, 1.0], "label": "Iris-versicolor"},
        {"point": [5.5, 2.4, 3.8, 1.1], "label": "Iris-versicolor"},
        {"point": [5.5, 2.4, 3.7, 1.0], "label": "Iris-versicolor"},
        {"point": [5.8, 2.7, 3.9, 1.2], "label": "Iris-versicolor"},
        {"point": [6.0, 2.7, 5.1, 1.6], "label": "Iris-versicolor"},
        {"point": [5.4, 3.0, 4.5, 1.5], "label": "Iris-versicolor"},
        {"point": [6.0, 3.4, 4.5, 1.6], "label": "Iris-versicolor"},
        {"point": [6.7, 3.1, 4.7, 1.5], "label": "Iris-versicolor"},
        {"point": [6.3, 2.3, 4.4, 1.3], "label": "Iris-versicolor"},
        {"point": [5.6, 3.0, 4.1, 1.3], "label": "Iris-versicolor"},
        {"point": [5.5, 2.5, 4.0, 1.3], "label": "Iris-versicolor"},
        {"point": [5.5, 2.6, 4.4, 1.2], "label": "Iris-versicolor"},
        {"point": [6.1, 3.0, 4.6, 1.4], "label": "Iris-versicolor"},
        {"point": [5.8, 2.6, 4.0, 1.2], "label": "Iris-versicolor"},
        {"point": [5.0, 2.3, 3.3, 1.0], "label": "Iris-versicolor"},
        {"point": [5.6, 2.7, 4.2, 1.3], "label": "Iris-versicolor"},
        {"point": [5.7, 3.0, 4.2, 1.2], "label": "Iris-versicolor"},
        {"point": [5.7, 2.9, 4.2, 1.3], "label": "Iris-versicolor"},
        {"point": [6.2, 2.9, 4.3, 1.3], "label": "Iris-versicolor"},
        {"point": [5.1, 2.5, 3.0, 1.1], "label": "Iris-versicolor"},
        {"point": [5.7, 2.8, 4.1, 1.3], "label": "Iris-versicolor"},
        {"point": [6.3, 3.3, 6.0, 2.5], "label": "Iris-virginica"},
        {"point": [5.8, 2.7, 5.1, 1.9], "label": "Iris-virginica"},
        {"point": [7.1, 3.0, 5.9, 2.1], "label": "Iris-virginica"},
        {"point": [6.3, 2.9, 5.6, 1.8], "label": "Iris-virginica"},
        {"point": [6.5, 3.0, 5.8, 2.2], "label": "Iris-virginica"},
        {"point": [7.6, 3.0, 6.6, 2.1], "label": "Iris-virginica"},
        {"point": [4.9, 2.5, 4.5, 1.7], "label": "Iris-virginica"},
        {"point": [7.3, 2.9, 6.3, 1.8], "label": "Iris-virginica"},
        {"point": [6.7, 2.5, 5.8, 1.8], "label": "Iris-virginica"},
        {"point": [7.2, 3.6, 6.1, 2.5], "label": "Iris-virginica"},
        {"point": [6.5, 3.2, 5.1, 2.0], "label": "Iris-virginica"},
        {"point": [6.4, 2.7, 5.3, 1.9], "label": "Iris-virginica"},
        {"point": [6.8, 3.0, 5.5, 2.1], "label": "Iris-virginica"},
        {"point": [5.7, 2.5, 5.0, 2.0], "label": "Iris-virginica"},
        {"point": [5.8, 2.8, 5.1, 2.4], "label": "Iris-virginica"},
        {"point": [6.4, 3.2, 5.3, 2.3], "label": "Iris-virginica"},
        {"point": [6.5, 3.0, 5.5, 1.8], "label": "Iris-virginica"},
        {"point": [7.7, 3.8, 6.7, 2.2], "label": "Iris-virginica"},
        {"point": [7.7, 2.6, 6.9, 2.3], "label": "Iris-virginica"},
        {"point": [6.0, 2.2, 5.0, 1.5], "label": "Iris-virginica"},
        {"point": [6.9, 3.2, 5.7, 2.3], "label": "Iris-virginica"},
        {"point": [5.6, 2.8, 4.9, 2.0], "label": "Iris-virginica"},
        {"point": [7.7, 2.8, 6.7, 2.0], "label": "Iris-virginica"},
        {"point": [6.3, 2.7, 4.9, 1.8], "label": "Iris-virginica"},
        {"point": [6.7, 3.3, 5.7, 2.1], "label": "Iris-virginica"},
        {"point": [7.2, 3.2, 6.0, 1.8], "label": "Iris-virginica"},
        {"point": [6.2, 2.8, 4.8, 1.8], "label": "Iris-virginica"},
        {"point": [6.1, 3.0, 4.9, 1.8], "label": "Iris-virginica"},
        {"point": [6.4, 2.8, 5.6, 2.1], "label": "Iris-virginica"},
        {"point": [7.2, 3.0, 5.8, 1.6], "label": "Iris-virginica"},
        {"point": [7.4, 2.8, 6.1, 1.9], "label": "Iris-virginica"},
        {"point": [7.9, 3.8, 6.4, 2.0], "label": "Iris-virginica"},
        {"point": [6.4, 2.8, 5.6, 2.2], "label": "Iris-virginica"},
        {"point": [6.3, 2.8, 5.1, 1.5], "label": "Iris-virginica"},
        {"point": [6.1, 2.6, 5.6, 1.4], "label": "Iris-virginica"},
        {"point": [7.7, 3.0, 6.1, 2.3], "label": "Iris-virginica"},
        {"point": [6.3, 3.4, 5.6, 2.4], "label": "Iris-virginica"},
        {"point": [6.4, 3.1, 5.5, 1.8], "label": "Iris-virginica"},
        {"point": [6.0, 3.0, 4.8, 1.8], "label": "Iris-virginica"},
        {"point": [6.9, 3.1, 5.4, 2.1], "label": "Iris-virginica"},
        {"point": [6.7, 3.1, 5.6, 2.4], "label": "Iris-virginica"},
        {"point": [6.9, 3.1, 5.1, 2.3], "label": "Iris-virginica"},
        {"point": [5.8, 2.7, 5.1, 1.9], "label": "Iris-virginica"},
        {"point": [6.8, 3.2, 5.9, 2.3], "label": "Iris-virginica"},
        {"point": [6.7, 3.3, 5.7, 2.5], "label": "Iris-virginica"},
        {"point": [6.7, 3.0, 5.2, 2.3], "label": "Iris-virginica"},
        {"point": [6.3, 2.5, 5.0, 1.9], "label": "Iris-virginica"},
        {"point": [6.5, 3.0, 5.2, 2.0], "label": "Iris-virginica"},
        {"point": [6.2, 3.4, 5.4, 2.3], "label": "Iris-virginica"},
        {"point": [5.9, 3.0, 5.1, 1.8], "label": "Iris-virginica"}
    ]


    root = build_kdtree(data);
    console.log(root);
    console.log("digraph G {\n" + generate_dot(root) + "}");

    var point = [7.0, 3.2, 4.7, 1.4]
    var iris = kdtree_nearest_neighbor_query(root, point, 5)
    console.log(iris)


    

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
