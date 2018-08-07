var Stack = function() {
  var someInstance = {
    amount: 0
  };

  // Use an object with numeric keys to store values
  var storage = {};
  var position = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    if (value) {
      someInstance.amount += 1;
      storage[position] = value;
      position += 1;
    }
  };

  someInstance.pop = function() {
    var last = position - 1;
    var value;
    if (someInstance.amount) {
      value = storage[last];
      delete storage[last];
      someInstance.amount -= 1;
      position -= 1;
    }
    return value;
  };

  someInstance.size = function() {
    return someInstance.amount;
  };

  return someInstance;
};
