Counter.prototype.increment = function(num) {
  if (num) {
    this.countNum = this.countNum + num;
  } else {
    this.countNum = this.getNum + 1;
  }
  return this.countNum;
};

Counter.prototype.decrement = function(num) {
  if (num) {
    this.countNum = this.countNum - num;
  } else {
    this.countNum = this.getNum - 1;
  }
  return this.countNum;
};

Counter.prototype.reset = function() {
  this.countNum = 0;
  return this.countNum;
};

function Counter(setNum) {
  this.getNum = setNum;
  this.countNum = 0;
}

const counter = new Counter(1);

console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement(3));
console.log(counter.increment(4));
console.log(counter.reset());
