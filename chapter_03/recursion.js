const isEven = (num) => {
  if (num % 2 === 0) return true;
  return false;
};

console.log(isEven(50));

const isEvenRec = (num) => {
  if (num === 0) return true;
  if (num === 1) return false;
  if (num < 0) return isEvenRec(-num);

  return isEvenRec(num - 2);
};

console.log(isEvenRec(-1));
