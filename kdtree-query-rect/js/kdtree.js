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
    let distance = 0;
    for (let i = 0; i < k; i ++)
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
            best_point = points[i];
        }
    }
    console.log('best_distance', best_distance)
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
    let n = points.length;
    let axis = depth % k;
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
    var node = new Node(points[median], axis);
    node.left = build_kdtree(left, depth + 1);
    node.right = build_kdtree(right, depth + 1);

    return node;
}

function contains(rect, point) {
    var point_inf = rect[0] // inferior izquierdo del rectangulo
    var point_sup = rect[1] // superior derecho del rectangulo
    return (
        point[0]>=point_inf[0] &&
        point[0]<=point_sup[0] &&
        point[1]>=point_inf[1] &&
        point[1]<=point_sup[1]);
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
    if (!(rect[0][0]>x || rect[0][1]<x || rect[1][0]>y || rect[1][1]<y)) { // test node in rect
        found.push(node.point)
    }
    range_query_rect(node.left, rect, found, depth+1)
    range_query_rect(node.right, rect, found, depth+1)
}

function kdCompare(root, point, depth){
    let dim = depth % k;
    if(point[dim] <= root.point[dim]){
        return -1;
    } else {
        return 1;
    }
}

function range_query_circle(root , center , radio , queue , depth = 0) {
    if(root == null) {
        return null;
    }
    // console.log(root, [center[0], center[1]], radio);
    // console.log(kdCompare(root, [center[0]-radio, center[1]-radio], depth));
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


let INF = 9999999999999;

function update_neighbors(p0, p, neighbors, n) {
    d = distanceSquared(p, p0)

    console.log(p, p0)
    console.log('d', d)
    // for (i, x in enumerate(neighbors)) {
    for (let i = 0; i < neighbors.length; i ++) {
    var x =  neighbors[i]
        if (i == n) {
            return neighbors[n-1][1]
        }
        if (d < x[1]) {
            neighbors.splice(i, 0, [p0, d])
            if (neighbors.length < n) {
                return INF
            }
            return neighbors[n-1][1]
        }
    }
    neighbors.push([p0, d])
    return INF
}

let maxdist

function nnquery(t, p, n, found, depth=0) {
    if (t == null) {
        return null
    }
    if (t.left == null & t.right == null) {
        maxdist = update_neighbors(t.point, p, found, n)
        return
    }
    axis = depth % p.length
    var nearer_tree
    var farther_tree
    if (p[axis] < t.point[axis]) {
        nearer_tree = t.left
        farther_tree = t.right
    } else {
        nearer_tree = t.right
        farther_tree = t.left

    }
    nnquery(nearer_tree, p, n, found, depth+1)
    maxdist = update_neighbors(t.point, p, found, n)
    if (Math.abs(t.point[axis]-p[axis]) < maxdist) // must check the far side
        nnquery(farther_tree, p, n, found, depth+1)
    return
}

