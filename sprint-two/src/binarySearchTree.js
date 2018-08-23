var BinarySearchTree = function(value) {
  var binarySearchTree = {};
  binarySearchTree.value = value;
  binarySearchTree.left = null;
  binarySearchTree.right = null;

  _.extend(binarySearchTree, binarySearchTreeMethods);

  return binarySearchTree;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value) {
  var child;

  if (value) {
    child = new BinarySearchTree(value);
  }

  if (value > this.value) {
    if (this.right === null) {
      this.right = child;
    } else {
      this.right.insert(value);
    }
  } else if (value < this.value) {
    if (this.left === null) {
      this.left = child;
    } else {
      this.left.insert(value);
    }
  }

};

binarySearchTreeMethods.contains = function(value) {

  if (this.value === value) {
    return true;
  } else if (this.right !== null) {
    if (this.right.contains(value)) {
      return true;
    }
  } else if (this.left !== null) {
    if (this.left.contains(value)) {
      return true;
    }
  }
  return false;
};

binarySearchTreeMethods.depthFirstLog = function(callback) {

  if (this.value !== null) {
    callback(this.value);
  }
  
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  } else if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
