


function Object() {
  let counting = 0;
    
  this.increment = isNum => (isNum) ? counting += isNum : counting += 1;
  
  this.decrement = isNum => (isNum) ? counting -= isNum : counting -= 1;

  this.reset = () => counting = 0;
};
  
  
  const counter = new Object();
  
  console.log(counter.increment()); // 1
  console.log(counter.increment(3)); // 4
  console.log(counter.increment(3)); // 7
  console.log(counter.reset());
  
  
  /**
    1. 변수명 수정하기
    2. if문 제거하기
    3. return this.name 중복 제거하기
    4. get, set 적용하기
    4. 생성자 함수 버전 만들기
    5. 클래스 버전 만들기
  */