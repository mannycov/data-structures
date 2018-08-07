var Queue = function() {
  var someInstance = {};
  someInstance.amount = 0;
  someInstance.storage = {};
  someInstance.position = 0;
  someInstance.first = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;

};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  if (value) {
    this.storage[this.position] = value;
    this.amount += 1;
    this.position += 1;
  }
};

queueMethods.dequeue = function() {
  var value;

  if (this.amount) {
    this.amount -= 1;
    value = this.storage[this.first];
    delete this.storage[this.first];
    this.first += 1;
  }
  return value;
};

queueMethods.size = function() {
  return this.amount;
};


