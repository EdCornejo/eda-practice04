k = 2;

class Node {
    constructor(point , axis ){
        this.point = point;
        this.left = null;
        this.right = null;
        this.axis = axis;
    }
}

function build_kdtree(points, depth = 0){
    let n = points.length;
    let axis = depth % k;
    if (n <= 0){
        return null;
    }
    if (n == 1){
        return new Node(points[0], axis)
    }
    var median = Math.floor(points.length / 2);
   
    points.sort(function(a, b)
    {
        return a[axis] - b[axis];
    });
    //console.log(points);
    var left = points.slice(0, median);
    var right = points.slice(median + 1);
    //console.log(right);
    var node = new Node(points[median], axis);
    node.left = build_kdtree(left, depth + 1);
    node.right = build_kdtree(right, depth + 1);

    return node;
}
function getHeight(node) {
    if (node === null){
        return 0;
    }
    
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

function distanceSquared(point1, point2 ){
    let distance = 0;
    for (let i = 0; i < k; i ++)
        distance += Math.pow ((point1 [i] - point2 [i]) , 2) ;
    
    return Math.sqrt(distance);
}

function closest_point_brute_force(points, point){
    var distance = null;
    var best_distance = null;
    var best_point = null;
    for(let i = 0; i < points.length; i++){
        distance = distanceSquared(points[i], point);
        
        if(best_distance === null || distance < best_distance){
            best_distance = distance;
            best_point = points[i];
        }
    }
    return best_point;
}
function naive_closest_point(node, point, depth = 0, best = null){
    
    if (node === null){
       _best_point=best;
        return _best_point;
    }
    var axis = depth % k;
    var next_best = null; 
    var next_branch = null;
    _distance=distanceSquared(node.point, point);
    if (best === null || (distanceSquared(best, point) > _distance))
        next_best = node.point;
    else
        next_best   = best;
    if (point[axis] < node.point[axis])
        next_branch = node.left
    else
        next_branch = node.right
    return  naive_closest_point(next_branch, point, depth +1, next_best);
}
 
 function closer_distance(pivot,p1,p2){
    if (p1==null){
        return p2;
    }
    if (p2==null){
        return p1;
    }
    d1=distanceSquared(pivot,p1);
    d2=distanceSquared(pivot,p2);
    if (d1<d2){
        return p1;
    }else{
        return p2;
    }      
}

function closest_point(node , point ,depth=0) { 
    if (node===null)
        return null;
    var axis = depth % k;

    var next_branch = null;
    var opposite_branch=null;

    if (point[axis]<node.point[axis]){
        next_branch = node.left;
        opposite_branch=node.right;
    }
    else{
        next_branch = node.right;
        opposite_branch=node.left;
    }
    best=closer_distance(point, closest_point(next_branch,point, depth +1), node.point);
    if (distanceSquared(point,best)>Math.abs(point[axis]-node.point[axis],2)){
        best=closer_distance(point, closest_point(opposite_branch,point, depth +1), best);
    }
    return best;

}
function knn_closest_point(node , point ,count, depth = 0, results) {
    if (node === null)
        return;
    var axis = depth % k;
    var distance = distanceSquared(node.point, point);
    var i = results.length;
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
    
    if ((i >= 0) &&  (i <= count))
    {
        // console.log('splicing in ' + node.point + ' with dist=' + distance + ' at ' + i);
        results.splice(i, 0, {
            'node': node,
            'distance': distance,
        });
    }
   
	while (results.length > count)
        results.pop();
    
    var goLeft = node.point[axis] < point[axis];

    var target = goLeft ? node.left : node.right;
    var opposite = goLeft ? node.right : node.left;

   
    if (target)
        this.knn_closest_point(target, point, count, depth + 1, results);

    if ((opposite) && (distanceSquared(opposite.point, point) <= results[results.length - 1].distance))
        this.knn_closest_point(opposite, point, count, depth + 1, results);
}

function range_query_rect(node , rect , found , depth = 0) {
    if (node === null) {
        return;
    }
    var axis = depth % k;
    if (node.point[axis] < rect[axis][0]){
        range_query_rect(node.right, rect, found, depth+1)
        return
    }
    if (node.point[axis] > rect[axis][1]) {
        range_query_rect(node.left, rect, found, depth+1)
        return
    }
    let x = node.point[0]
    let y = node.point[1]
    if (!(rect[0][0]>x || rect[0][1]<x || rect[1][0]>y || rect[1][1]<y)) { 
        found.push(node.point)
    }
    range_query_rect(node.left, rect, found, depth+1)
    range_query_rect(node.right, rect, found, depth+1)
}

function kdCompare(root, point, depth){
    let axis = depth % k;
    if(point[axis] <= root.point[axis]){
        return -1;
    } else {
        return 1;
    }
}

function range_query_circle(root , center , radio , queue , depth = 0, ) {
    if(root == null) {
        return null;
    }
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


