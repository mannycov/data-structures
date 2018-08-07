var Stack = function() {
  var someInstance = {};
  someInstance.amount = 0;
  someInstance.storage = {};
  someInstance.position = 0;

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  if (value) {
    this.storage[this.position] = value;
    this.amount += 1;
    this.position += 1;
  }
};

stackMethods.pop = function() {
  var last = this.position - 1;
  var value;

  if (this.amount) {
    value = this.storage[last];
    delete this.storage[last];
    this.amount -= 1;
    this.position -= 1;
  }
  return value;
};

stackMethods.size = function() {
  return this.amount;
}


