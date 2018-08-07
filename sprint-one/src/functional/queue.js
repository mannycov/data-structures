var Queue = function() {
  var someInstance = {
    amount: 0
  };

  // Use an object with numeric keys to store values
  var storage = {};
  var position = 0;
  var first = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (value) {
      storage[position] = value;
      someInstance.amount += 1;
      position += 1;
    }
  };

  someInstance.dequeue = function() {
    var value;

    if (someInstance.amount) {
      someInstance.amount -= 1;
      value = storage[first];
      delete storage[first];
      first += 1;
    }
    return value;
  };

  someInstance.size = function() {
    return someInstance.amount;
  };

  return someInstance;
};
