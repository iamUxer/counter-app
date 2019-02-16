// class Product {
//   addProduct(name, price) {

//   }
// }

// function Car(name, color, speed) {
//   this.name = name;
//   this.color = color;
//   this.speed = speed;
// }

// Car.prototype.stop = function() {
//   return (this.speed -= -1);
// };

// Car.prototype.parking = function() {
//   return (this.speed = 0);
// };

// Car.prototype.run = function() {
//   return (this.speed += 1);
// };

// const benzCar = new Car('benz', 'black', 5);
// console.log(benzCar.stop());

class Car {
  constructor(name, color, speed = 0) {
    this.name = name;
    this.color = color;
    this.speed = speed;
  }

  stop() {
    return (this.speed -= -1);
  }
  parking() {
    return (this.speed = 0);
  }
  run() {
    return (this.speed += 1);
  }
}

const benzCar = new Car('benz', 'black');
console.log(benzCar);

console.log(benzCar.run());

// const addInfo = [];

// function Product(name, price) {
//   this.info = { name: name, price: price };
//   addInfo.push(this.info);
// }

// function Basket() {}

// const bread = new Product('bread', 1);
// const water = new Product('water', 0.25);
// const basket = new Basket();

// basket.addProduct(2, bread);
// basket.addProduct(3, water);
// basket.printShoppingInfo();
