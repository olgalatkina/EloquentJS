const every1 = (arr, func) => {
  for (let el of arr) {
    if (!func(el)) return false;
  }
  return true;
};

const every2 = (arr, func) => {
  return !arr.some((el) => !func(el));
};

console.log(every2([1, 3, 5], (n) => n < 10));
console.log(every2([2, 4, 16], (n) => n < 10));
console.log(every2([], (n) => n < 10));
