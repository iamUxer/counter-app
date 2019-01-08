let counter = 0;

counter.__proto__.increment = function(num){
    if (num){
        counter = counter + num;
    } else {
        counter = counter + 1;
    }
    return counter;
}

counter.__proto__.decrement = function(num){
    if(num){
        counter = counter - num;
    } else {
        counter = counter - 1;
    }
    return counter;
}

counter.__proto__.reset = function(){
    counter = 0;
    return counter;
}

console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement(3));
console.log(counter.increment(4));
console.log(counter.reset());