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
  constructor(color, brand, thickness) {
    super(color, brand, thickness);
  }
}

class MarkerPen extends Pen {
  constructor(color, brand, thickness) {
    super(color, brand, thickness);
  }

  changeColor(color) {
    return this.brand + '펜이 ' + color + '색으로 바뀜.';
  }
}

class BallPen extends Pen {
  constructor(color, brand, thickness) {
    super(color, brand, thickness);
  }

  changeColor(color) {
    return this.brand + '볼펜이 ' + color + '색으로 바뀜.';
  }
}

// const sharpPen = new SharpPen();

// console.log(sharpPen.write(3));
