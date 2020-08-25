const range = (start, end, step = 1) => {
  let result = [];

  if (start > end) {
    for (let i = start; i >= end; i -= Math.abs(step)) {
      result.push(i);
    }
  } else {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  }

  return result;
};

const sum = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};

console.log(sum(range(5, 2, -1)));

// ================
function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}

console.log(sum(range(5, 2, -1)));
