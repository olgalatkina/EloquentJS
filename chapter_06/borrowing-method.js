let map = { one: true, two: true, hasOwnProperty: true };

console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true
console.log(Object.getPrototypeOf(map).hasOwnProperty.call(map, "one"));
// → true
