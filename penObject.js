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
    super();
  }
}

class markerPen extends Pen {
  constructor(color, brand, thickness) {
    super();
  }
}

class ballPen extends Pen {
  constructor(color, brand, thickness) {
    super();
  }
}

// const sharpPen = new SharpPen();

// console.log(sharpPen.write(3));
