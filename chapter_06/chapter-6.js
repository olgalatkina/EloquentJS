let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  },
};
console.log(varyingSize.size);
console.log(varyingSize.size);
console.log(varyingSize.size);
console.log("🙈🙉🙊");
// =============================

class Temperature {
  constructor(celcius) {
    this.celcius = celcius;
  }

  get fahrenheit() {
    return this.celcius * 1.8 + 32;
  }

  set fahrenheit(value) {
    this.celcius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);
console.log(temp); // => Temperature { celcius: 22 }
console.log(temp.fahrenheit); // => 71.6
console.log(temp.celcius); // => 22

console.log(Temperature.fromFahrenheit(100)); // =>Temperature { celcius: 37.77777777777778 }
// console.log(temp.fromFahrenheit(100)); // => error
console.log("🙈🙉🙊");
// =============================

class Matrix {
  constructor(width, height, element = (x, y) => `${x}${y}`) {
    this.width = width;
    this.height = height;
    this.content = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }

  get(x, y) {
    return this.content[y * this.width + x];
  }

  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
}

const tempMatrix = new Matrix(3, 3);

console.log(tempMatrix.content);
console.log(tempMatrix.get(1, 1));
for (let str of tempMatrix.content) {
  console.log(str);
}

class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  next() {
    if (this.y === this.matrix.height) return { done: true };

    let value = {
      x: this.x,
      y: this.y,
      value: this.matrix.get(this.x, this.y),
    };

    this.x++;
    if (this.x === this.matrix.width) {
      this.x = 0;
      this.y++;
    }

    return { value, done: false };
  }
}

Matrix.prototype[Symbol.iterator] = function () {
  return new MatrixIterator(this);
};

let matrix = new Matrix(2, 2, (x, y) => `- ${x}${y}`);
for (let { x, y, value } of matrix) {
  console.log(x, y, value);
}
console.log(matrix.content);

class SymmetricMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }

  set(x, y, value) {
    super.set(x, y, value);
    if (x !== y) {
      super.set(y, x, value);
    }
  }
}

let matrix1 = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix1.content);
console.log(matrix1.get(2, 3));

console.log(matrix1 instanceof SymmetricMatrix); // => true
console.log(matrix1 instanceof Matrix); // => true
console.log(tempMatrix instanceof SymmetricMatrix); // => false
