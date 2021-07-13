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
        distance += Math.pow ((point1 [i] - point2 [i]) , 2) ;
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
    console.log('best_distance', best_distance)
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


function closest_point(node , point , count, depth = 0, results) { 
    if (node === null)
        return;
    var axis = depth % k;
    var distance = distanceSquared(node.point, point)
    var i = results.length
    if (i == 0) {
        results.push({
            'node': node, 
            'distance': distance, 
        })
    }
    for (i = 0; i < results.length; i++) {
		if (distance < results[i].distance)
			break;
	}
    // splice in our result
    if ((i >= 0) &&  (i <= count))
    {
        // console.log('splicing in ' + node.point + ' with dist=' + distance + ' at ' + i);
        results.splice(i, 0, {
            'node': node, 
            'distance': distance, 
        });
    }
    // get rid of any extra results
	while (results.length > count)
    results.pop();
    // whats got the got best _search result? left or right?
    var goLeft = node.point[axis] < point[axis];

    var target = goLeft ? node.left : node.right;
    var opposite = goLeft ? node.right : node.left;

    // target has our most likely nearest point, we go down that side of the
    // tree first
    if (target)
        this.closest_point(target, point, count, depth + 1, results);

    // _search the opposite direction, only if there is potentially a better
    // value than the longest distance we already have in our _search results
    if ((opposite) && (distanceSquared(opposite.point, point) <= results[results.length - 1].distance))
        this.closest_point(opposite, point, count, depth + 1, results);
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


function range_query_circle(node , center , radio , queue , depth = 0) { }

function range_query_orthogonal(node , rect , found , depth = 0) { 
    if (node === null)
        return;
    var axis = depth % k;
    if (node.point[axis] < rect[axis][0]){
        range_query_orthogonal(node.right, rect, found, depth+1)
        return
    }
    if (node.point[axis] > rect[axis][1]) {
        range_query_orthogonal(node.left, rect, found, depth+1)
        return
    }
    x = node.point.x
    y = node.point.y
    if (!(rect[0][0]>x || rect[0][1]<x || rect[1][0]>y || rect[1][1]<y)) { // test node in rect
        found.append(node.point)
        range_query_orthogonal(node.left, rect, found, depth+1)
        range_query_orthogonal(node.right, rect, found, depth+1)
    }
}

function contains(rect, point) {
    // var contained = false;
    // for (var i = 0; i < k; i ++) {

    // }

    return (
        point[0]>=rect[0][0] &&
        point[0]<=rect[1][0] &&
        point[1]>=rect[0][1] &&
        point[1]<=rect[1][1]);
    // return(point.x>=this.x-this.w &&
    //     point.x<=this.x+this.w &&
    //     point.y>=this.y-this.h &&
    //     point.y<=this.y+this.h);

    // intersects(range){
    //     return !(range.x-range.w>this.x+this.w ||
    //         range.x+range.w<this.x-this.w ||
    //         range.y-range.h>this.y+this.h ||
    //         range.y+range.h<this.y-this.h);
    // }
}

function contains2(rect, point, axis) {
    return (
        point[axis]>=rect[0][axis] &&
        point[axis]<=rect[1][axis]);

}

function range_query_rect(node , rect , found , depth = 0) { 
    if (node === null)
        return;
    var axis = depth % k;
    // if (node.point[axis] < rect[axis][0]){
    //     range_query_rect(node.right, rect, found, depth+1)
    //     return
    // }
    // if (node.point[axis] > rect[axis][1]) {
    //     range_query_rect(node.left, rect, found, depth+1)
    //     return
    // }
    // x = node.point.x
    // y = node.point.y
    console.log('@', node.point)
    console.log('@', contains(rect, node.point))
    if (contains(rect, node.point)) { // test node in rect
        found.push(node.point)
    }
    range_query_rect(node.right, rect, found, depth+1)
    range_query_rect(node.left, rect, found, depth+1)
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