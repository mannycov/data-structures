

// Instantiate a new graph
var Graph = function() {
  this.graph = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.graph[node] = { edges: {} };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  if (this.graph[node]) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.graph[node]) {
    delete this.graph[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  if (this.graph[fromNode] && this.graph[toNode]) {
    if (this.graph[fromNode].edges[toNode] && this.graph[toNode].edges[fromNode]) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  if (this.graph[fromNode] && this.graph[toNode]) {
    this.graph[fromNode].edges[toNode] = true;
    this.graph[toNode].edges[fromNode] = true;
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  if (this.graph[fromNode] && this.graph[toNode]) {
    this.graph[fromNode].edges[toNode] = false;
    this.graph[toNode].edges[fromNode] = false;
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  
  for (var node in this.graph) {
    cb(node, this.graph[node]);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


