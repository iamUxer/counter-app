// function Calculate(getNum) {
//   let setNum = 0;

//   this.increment = getNum => (getNum) ? setNum += getNum : setNum += 1;

//   this.decrement = getNum => (getNum) ? setNum -= getNum : setNum -= 1;

//   this.reset = () => setNum = 0;
// };

let count = 0;
class Calculate {
  increment(getNum) {
    this.setNum = getNum;
    return this.setNum ? (count += this.setNum) : (count += 1);
  }

  decrement(getNum) {
    this.setNum = getNum;
    return this.setNum ? (count -= this.setNum) : (count -= 1);
  }

  reset() {
    return (count = 0);
  }
}

const counter = new Calculate();

console.log(counter.increment()); // 1
console.log(counter.increment(3)); // 4
console.log(counter.increment(3)); // 7
console.log(counter.decrement()); // 6
console.log(counter.decrement(2)); // 4
console.log(counter.reset()); // 0

/**
  1. 변수명 수정하기
  2. if문 제거하기
  3. return this.name 중복 제거하기
  4. get, set 적용하기
  4. 생성자 함수 버전 만들기
  5. 클래스 버전 만들기
*/
