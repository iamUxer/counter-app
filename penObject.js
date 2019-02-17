class Pen {
  constructor(color, brand, thickness = 1) {
    this.color = color;
    this.brand = brand;
    this.thickness = thickness;
  }

  write(move) {
    return this.color + '색으로 ' + move + '만큼 써짐';
  }
}

class SharpPen extends Pen {
  write() {
    super.write();
    return this.brand + '이 ' + this.thickness + '두께로 써짐';
  }
}
