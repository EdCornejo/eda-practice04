k = 2;

class Node {
    constructor(point , axis ){
        this.point = point;
        this.left = null;
        this.right = null;
        this.axis = axis;
    }
}

function distanceSquared(point1, point2) {
    var distance = 0;
    for (var i = 0; i < k; i ++)
        distance += Math.pow ((point1 [i] - point2 [i]) , 2) ;
    return Math.sqrt ( distance );
}

function closest_point_brute_force(points, point) {
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
    
    if (node === null)
        return best;
    var axis = depth % k;
    var next_best = null; 
    var next_branch = null; 
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
    
    points.sort(function(a, b)
    {
        return a[axis] - b[axis];
    });
    //console.log(points);
    var left = points.slice(0, median);
    var right = points.slice(median + 1);
    var node = new Node(points[median].slice(0, k), axis);
    node.left = build_kdtree(left, depth + 1);
    node.right = build_kdtree(right, depth + 1);

    return node;
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
function closest_point(node , point , depth = 0) { 
    if (node==null)
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
    if (distanceSquared(point,best)>Math.abs(point[axis]-node.point[axis])){
        best=closer_distance(point, closest_point(opposite_branch,point, depth +1), best);
    }return best;
}


