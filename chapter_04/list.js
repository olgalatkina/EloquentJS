const tempList = {
  value: 1,
  rest: { value: 2, rest: { value: 3, rest: null } },
};

const arrayToList = (arr) => {
  let list = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }

  return list;
};
// console.log(arrayToList([1, 2, 3]));

const listToArray = (list) => {
  let arr = [];

  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }

  return arr;
};
// console.log(listToArray(tempList));

const prepend = (element, list) => {
  return { value: element, rest: list };
};

const arrayToList1 = (arr) => {
  let list = null;

  for (let el of arr) {
    list = prepend(el, list);
  }

  return list;
};
// console.log(arrayToList1([1, 2, 3]));

const nth = (list, num) => {
  const arr = listToArray(list);

  return arr[num];
};
console.log(nth(tempList, 2));

// =====================================

const prepend = (value, list) => {
  return { value, rest: list };
};

const tempList = {
  value: 1,
  rest: { value: 2, rest: { value: 3, rest: null } },
};

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}
console.log(nth(tempList, 2));
