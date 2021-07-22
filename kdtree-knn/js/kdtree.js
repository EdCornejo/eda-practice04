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
/* function getHeight(node) {
    if (node === null){
        return 0;
    }
    // find the height of each subtree
    var lh = getHeight(node.left);
    var rh = getHeight(node.right);
    return 1 + max(lh,rh);
} */
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

function closest_point(node , point ) { 
    var node=node;
    var point=point;
    var Npoint=naive_closest_point(node, point);
    return  Npoint;

}


let INF = 9999999999999;

function update_neighbors(t, p, neighbors, n) {
    
    d = distanceSquared(p, t.point)
    // for (i, x in enumerate(neighbors)) {
    for (let i = 0; i < neighbors.length; i ++) {
    var x =  neighbors[i]
        if (i == n) {
            return neighbors[n-1][1]
        }
        if (d < x[1]) {
            neighbors.splice(i, 0, [t.point, d, t.label])
            if (neighbors.length < n) {
                return INF
            }
            return neighbors[n-1][1]
        }
    }
    neighbors.push([t.point, d, t.label])
    return INF
}

let maxdist

function nnquery(t, p, n, found, depth=0) {
    if (t == null) {
        return null
    }
    if (t.left == null & t.right == null) {
        maxdist = update_neighbors(t, p, found, n)
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
    maxdist = update_neighbors(t, p, found, n)
    if (Math.abs(t.point[axis]-p[axis]) < maxdist) // must check the far side
        nnquery(farther_tree, p, n, found, depth+1)
    return
}

function kdtree_nearest_neighbor_query(t, p, n=1) {
    let nearest_neighbors = []
    nnquery(t, p, n, nearest_neighbors)
    // console.log(nearest_neighbors);
    return nearest_neighbors.slice(0, n);
}

