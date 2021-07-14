k = 2;

class Node {
    constructor(point , axis ){
        this.point = point;
        this.left = null;
        this.right = null;
        this.axis = axis;
    }
}

function distanceSquared(point1, point2 ){
    var distance = 0;
    for (var i = 0; i < k; i ++)
        distance += Math.pow ((point1[i] - point2[i]) , 2) ;
    return Math.sqrt ( distance );
}

function closest_point_brute_force(points, point){
    var distance = null;
    var best_distance = null;
    var best_point = null;
    for(let i = 0; i < points.length; i++){
        distance = distanceSquared(points[i], point);
        //console.log(distance);
        if(best_distance === null || distance < best_distance){
            best_distance = distance;
            //best_point = { 'point': points[i], 'distance': distance }
            best_point = points[i];
        }
    }
    return best_point;
}
function naive_closest_point(node, point, depth = 0, best = null){
    //algorithm
    //1. best = min(distance(point, node.point), best)
    //2. chose the branch according to axis per level
    //3. recursevely call by branch chosed
    if (node === null)
        return best;
    var axis = depth % k;
    var next_best = null; //next best point
    var next_branch = null; //next node brach to look for
    if (best === null || (distanceSquared(best, point) > distanceSquared(node.point, point)))
        next_best = node.point;
    else
        next_best   = best;
    if (point[axis] < node.point[axis])
        next_branch = node.left
    else
        next_branch = node.right
    return  naive_closest_point(next_branch, point, depth +1, next_best);
}


function getHeight(node) {
    if (node === null){
        return 0;
    }
    // find the height of each subtree
    var lh = getHeight(node.left);
    var rh = getHeight(node.right);
    return 1 + max(lh,rh);
}
function generate_dot(node){
    if (node === null){
        return "";
    }
    var tmp = '';
    if (node.left != null){
        tmp += '"' + node.point.toString() + '"' + ' -> ' + '"' + node.left.point.toString() + '"' + ';\n';
        tmp += generate_dot(node.left);
    }
    if (node.right != null){
        tmp += '"' + node.point.toString() + '"' + ' -> ' + '"' + node.right.point.toString() + '"' + ';\n';
        tmp += generate_dot(node.right);
    }
    return tmp;
}

function build_kdtree(points, depth = 0){
    var n = points.length;
    var axis = depth % k;
    if (n <= 0){
        return null;
    }
    if (n == 1){
        return new Node(points[0], axis)
    }
    var median = Math.floor(points.length / 2);
    // sort by the axis
    points.sort(function(a, b)
    {
        return a[axis] - b[axis];
    });
    //console.log(points);
    var left = points.slice(0, median);
    var right = points.slice(median + 1);
    //console.log(right);
    var node = new Node(points[median].slice(0, k), axis);
    node.left = build_kdtree(left, depth + 1);
    node.right = build_kdtree(right, depth + 1);

    return node;
}

function closer_distance(pivot, point1, point2){
    if(point1 == null)
        return point2;

    if(point2 == null)
        return point1;

    let distance1 = distanceSquared(pivot, point1);
    let distance2 = distanceSquared(pivot, point2);

    if(distance1 < distance2){
        return point1;
    } else {
        return point2;
    }
}

function closest_point(root , point , depth = 0){
    if(root == null)
        return null;

    let axis = depth % k;

    let next_branch = null;
    let opposite_branch = null;

    if(point[axis] < root.point[axis]){
        next_branch = root.left;
        opposite_branch = root.right;
    } else {
        next_branch = root.right;
        opposite_branch = root.left;
    }

    let best = closer_distance(point, closest_point(next_branch, point, depth + 1), root.point)

    if(distanceSquared(point, best) > Math.abs(point[axis] - root.point[axis])){
        best = closer_distance(point, closest_point(opposite_branch, point, depth + 1), best);
    }
    return best;
}

function kdCompare(root, point, depth){
    let dim = depth % k;
    if(point[dim] <= root.point[dim]){
        return -1;
    } else {
        return 1;
    }
}

function range_query_rect(root, rect, queue, depth=0){

}


function range_query_circle(root , center , radio , queue , depth = 0) {

    if(root == null){
        return null;
    }
    console.log(root, [center[0], center[1]], radio);
    console.log(kdCompare(root, [center[0]-radio, center[1]-radio], depth));
    if(kdCompare(root, [center[0]-radio, center[1]-radio], depth) > 0){
        range_query_circle(root.right, center, radio, queue, depth + 1)
        return null;
    }

    if(kdCompare(root, [center[0]+radio, center[1]+radio], depth) < 0){
        range_query_circle(root.left, center, radio, queue, depth + 1)
        return null;
    }

    if(distanceSquared(center, root.point) <= radio){
        queue.push(root.point)
    }

    range_query_circle(root.left, center, radio, queue, depth + 1)
    range_query_circle(root.right, center, radio, queue, depth + 1)
    return null;

}

// digraph G {
//     "106 ,189 " -> "6 ,114";
//     "6 ,114" -> " 90 ,102";
//     "90 ,102 " -> "21 ,84";
//     "6 ,114" -> " 84 ,138";
//     "84 ,138 " -> "5 ,150";
//     "106 ,189 " -> "148 ,85 ";
//     "148 ,85 " -> "181 ,45 ";
//     "181 ,45 " -> "161 ,29 ";
//     "148 ,85 " -> "158 ,120 ";
// }




// var data = [
//     [40 ,70] ,
//     [70 ,130] ,
//     [90 ,40] ,
//     [110 , 100] ,
//     [140 ,110] ,
//     [160 , 100]
// ];

// var point = [140 ,90]; // query


// var data = [
//     [40 ,70] ,
//     [70 ,130] ,
//     [90 ,40] ,
//     [110 , 100] ,
//     [140 ,110] ,
//     [160 , 100] ,
//     [150 , 30]
// ];
// var point = [140 ,90]; // query