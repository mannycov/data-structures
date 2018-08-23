var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  set.position = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (item) {
    this._storage[this.position] = item;
    this.position += 1;
  }
};

setPrototype.contains = function(item) {
  if (item) {
    for (var key in this._storage) {
      if (this._storage[key] === item) {
        return true;
      }
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  if (item) {
    for (var key in this._storage) {
      if (this._storage[key] === item) {
        delete this._storage[key];
      }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
