let counter = 0;

counter.__proto__.increment = function(){
    counter = counter + 1;
    return counter;
}

console.log(counter.increment());
console.log(counter.increment());