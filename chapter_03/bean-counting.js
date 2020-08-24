const countBs = (str) => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "B") counter += 1;
  }

  return counter;
};
console.log(countChar("BaobaB", "a"));

const countChar = (str, char) => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) counter += 1;
  }

  return counter;
};
console.log(countChar("kakkerlak", "k"));

const countB = (str) => {
  return countChar(str, "B");
};
console.log(countB("BaobaB"));
