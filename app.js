function Counter() {
  this.countNum = 0;
}

Counter.prototype.increment = function(num) {
  if (num) {
    this.countNum = this.countNum + num;
  } else {
    this.countNum = this.countNum + 1;
  }
  return this.countNum;
};

Counter.prototype.decrement = function(num) {
  if (num) {
    this.countNum = this.countNum - num;
  } else {
    this.countNum = this.countNum - 1;
  }
  return this.countNum;
};

Counter.prototype.reset = function() {
  this.countNum = 0;
  return this.countNum;
};

const counter = new Counter();

console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement(3));
console.log(counter.increment(4));
console.log(counter.reset());
