
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var tuple = [k, v];

  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
      } else {
        bucket.push(tuple);
      }
    }
  } else {
    this._storage.set(index, [tuple]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var tuple;

  for (var i = 0; i < bucket.length; i++) {
    tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var tuple;

  for (var i = 0; i < bucket.length; i++) {
    tuple = bucket[i];
    if (tuple[0] === k) {
      delete tuple[1];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


