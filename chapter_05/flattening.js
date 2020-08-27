const arr = [
  ["a", "b", "c"],
  [1, 2, 3, 4, 5],
  [
    { name: "bla-bla", age: 27 },
    { name: "meow", age: 3 },
  ],
];

const flattenArr = arr.reduce((acc, el) => acc.concat(el), []);
console.log(flattenArr);

const a = ["a", "b", "c"];
const b = [1, 2, 3, 4, 5];
const c = [
  { name: "bla-bla", age: 27 },
  { name: "meow", age: 3 },
];

const shallowCopy = [...a, ...b, ...c];
console.log(shallowCopy);
