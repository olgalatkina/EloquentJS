const tempObj1 = {
  a: 11,
  b: 21,
  c: 31,
};

const tempObj2 = {
  a: 11,
  b: 21,
  c: 31,
};

let obj = { here: { is: "an" }, object: 2 };

const deepEqual = (val1, val2) => {
  if (val1 === val2) return true;

  if (
    typeof val1 !== "object" ||
    val1 === null ||
    typeof val2 !== "object" ||
    val2 === null
  )
    return false;

  const keys1 = Object.keys(val1);
  const keys2 = Object.keys(val2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(val1[key], val2[key])) return false;
  }

  return true;
};

console.log(deepEqual(tempObj1, tempObj2));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));

// ==========================

function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" || b == null || typeof b != "object")
    return false;

  let keysA = Object.keys(a),
    keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
