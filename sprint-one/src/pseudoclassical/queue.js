var Queue = function() {
  this.storage = {};
  this.amount = 0;
  this.position = 0;
  this.first = 0;
};

Queue.prototype.enqueue = function(value) {
  if (value) {
    this.storage[this.position] = value;
    this.amount += 1;
    this.position += 1;
  }
};

Queue.prototype.dequeue = function() {
  var value;
  
  if (this.amount) {
    value = this.storage[this.first];
    delete this.storage[this.first];
    this.amount -= 1;
    this.first += 1;
  }
  return value;
};

Queue.prototype.size = function() {
  return this.amount;
};

var queue = new Queue();


