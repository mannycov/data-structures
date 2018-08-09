var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node;
    if (value) {
      node = new Node(value);
      if (list.head === null && list.tail === null) {
        list.head = node;
        list.tail = node;
      } else {
        list.head.next = node;
        list.tail = node;
      }
    }
  };

  list.removeHead = function() {
    var oldHead;

    if (list.head) {
      oldHead = list.head.value;
      list.head = list.head.next;
    }
    return oldHead;
  };

  list.contains = function(target) {
    var node = list.head.next;
    if (target) {
      while (node !== null) {
        if (list.head.value === target) {
          return true;
        } else if (node.value === target) {
          return true;
        } else {
          node = node.next;
        }
      }
      return false;
    }
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
