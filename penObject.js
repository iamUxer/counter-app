class Pen {
  constructor(color, brand, thickness = 1) {
    this.color = color;
    this.brand = brand;
    this.thickness = thickness;
  }

  write(move) {
    return move;
  }
}
