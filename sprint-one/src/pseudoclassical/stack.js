var Stack = function() {
  this.storage = {};
  this.amount = 0;
  this.position = 0;
};

Stack.prototype.push = function(value) {
  if (value) {
    this.storage[this.position] = value;
    this.amount += 1;
    this.position += 1;
  }
};

Stack.prototype.pop = function() {
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

Stack.prototype.size = function() {
  return this.amount;
};

var stack = new Stack();


