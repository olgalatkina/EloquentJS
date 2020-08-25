const tempArray = [1, 2, 3, 4, 5];

const reverseArray = (arr) => {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result;
};

console.log(reverseArray(tempArray));
console.log(tempArray);

const reverseArrayInPlace = (arr) => {
  let temp = reverseArray(arr);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = temp[i];
  }

  return arr;
};

reverseArrayInPlace(tempArray);
console.log(tempArray);

// =====================

function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
