var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child;
  if (value) {
    child = new Tree(value);
    this.children.push(child);
  }
};

treeMethods.contains = function(target) {

  if (target) {
    if (this.value === target) {
      return true;
    }

    if (this.children.length !== 0) {
      for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].contains(target)) {
          return true;
        }
      }
    }
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
