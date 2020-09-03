let re1 = new RegExp("abc");
let re2 = /abc/;
let eighteenPlus = /eighteen\+/;

console.log(re2.test("abcde")); // true
console.log(re2.test("abxde")); // false

console.log("abcde".indexOf("abc")); // -> 0
console.log("abxde".indexOf("abc")); // -> -1

console.log(/[0-9]/.test("in 1992")); // true

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20")); // true

let notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110")); // false

console.log(/'\d+'/.test("'123'")); // true
console.log(/'\d+'/.test("''")); // false
console.log(/'\d*'/.test("'123'")); // true
console.log(/'\d*'/.test("''")); // true

let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbor")); // true
console.log(neighbor.test("neighbour")); // true

let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("1-4-2003 8:45")); // true

let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo")); // true

let result = /\d+/.exec("one two 100");
console.log(result);
// -> [ '100', index: 8, input: 'one two 100', groups: undefined ]
console.log(result.index); // -> 8
console.log(result.input); // -> 'one two 100'

console.log("one two 100".match(/\d+/));
// -> [ '100', index: 8, input: 'one two 100', groups: undefined ]

let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'Hello' & 'Bye'"));
// -> [ "'Hello'", 'Hello', index: 9, input: "she said 'hello' & 'Bye'", groups: undefined ]
console.log(
  "she said 'Hello' & 'Bye'".replace(quotedText, (str) => str.toUpperCase())
);
// -> she said 'HELLO' & 'Bye'
let quotedText1 = /'([^']*)'/g;
console.log(quotedText1.exec("she said 'Hello' & 'Bye'"));
// -> [ "'Hello'", 'Hello', index: 9, input: "she said 'hello' & 'Bye'", groups: undefined ] ---- ?????

console.log(
  "she said 'Hello' & 'Bye'".replace(quotedText1, (str) => str.toUpperCase())
);
// -> she said 'HELLO' & 'BYE'

console.log(/bad(ly)?/.exec("bad"));
// -> [ 'bad', undefined, index: 0, input: 'bad', groups: undefined ]

console.log(/\d+/.exec("123"));
// -> [ '123', index: 0, input: '123', groups: undefined ]
console.log(/(\d)+/.exec("123"));
// -> [ '123', '3', index: 0, input: '123', groups: undefined ]

// ================== DATE

console.log(new Date());
// -> 2020-09-03T10:19:08.890Z
console.log(new Date(2009, 11, 9));
// -> 2009-12-08T21:00:00.000Z ------------ ???
console.log(new Date(2009, 11, 9, 12, 59, 59, 999));
// -> 2009-12-09T09:59:59.999Z ------------ ???

console.log(new Date(2013, 11, 19).getTime());
// -> 1387396800000
console.log(new Date(1387396800000));
// -> 2013-12-18T20:00:00.000Z

console.log(Date.now());
// -> 1599128982071
console.log(new Date(1599128982071));
// -> 2020-09-03T10:29:42.071Z (13:29 in Moscow)
console.log(new Date(Date.now()));
// -> 2020-09-03T10:31:52.722Z

function getDate(string) {
  let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
  console.log(/(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string));
  return new Date(year, month - 1, day);
}

console.log(getDate("1-30-2003"));
// -> 2003-01-29T21:00:00.000Z

//=============

console.log(/cat/.test("cat")); // true
console.log(/cat/.test("catch")); // true

console.log(/\bcat\b/.test("cat")); // true
console.log(/\bcat\b/.test("catch")); // false

let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("the 15 pigs")); // -> true
console.log(animalCount.test("the 15 pigchecken")); // -> false

console.log("papa".replace("p", "m")); // -> mapa
console.log("papa".replace(/p/g, "m")); // -> mama
console.log("Borobudur".replace(/[ou]/g, "a")); // -> Barabadar

const data = "Liskov, Barbara\nMcCarthy, John\nWadler, Philip";
const re = /(\w+), (\w+)/g;
console.log(data.replace(re, "$2 $1"));
// Barbara Liskov
// John McCarthy
// Philip Wadler

console.log(re.exec(data));
// [ 'Liskov, Barbara', 'Liskov', 'Barbara', index: 0, input: 'Liskov, Barbara\nMcCarthy, John\nWadler, Philip', groups: undefined ]

let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, (str) => str.toUpperCase()));
// => the CIA and FBI

let stock = "1 lemon, 2 cabbages, and 101 eggs";
const re = /(\d+) (\w+)/g;

function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;

  if (amount == 1) {
    // remove 's'
    unit = unit.slice(0, unit.length - 1);
  } else if (amount == 0) {
    amount = "no";
  }

  return `${amount} ${unit}`;
}

let result = stock.replace(re, minusOne);
console.log(result);
// -> no lemon, 1 cabbage, and 100 eggs

function stripComments(code) {
  const re = /\/\/.*|\/\*[^]*\*\//g;
  const re1 = /\/\/.*|\/\*[^]*?\*\//g;

  return `${code.replace(re, "")} -vs- ${code.replace(re1, "")}`;
}
console.log(stripComments("1 + /* 2 */3")); // -> 1 + 3 -vs- 1 + 3
console.log(stripComments("x = 10;// ten!")); // -> x = 10; -vs- x = 10;
console.log(stripComments("1 /* a */+/* b */ 1")); // -> 1  1 -vs- 1 + 1

let name = "harry";
let text = "Harry - suspicious man.";
let regexp = new RegExp(`\\b(${name})\\b`, "gi");
console.log(text.replace(regexp, "_$1_"));
// -> _Harry_ - suspicious man.

let teenName = "dea+hl[]rd";
let text = `This ${teenName} is extremely annoying.`;
let escaped = teenName.replace(/[\\[.+*?(){|^$]/g, "\\$&");
let regexp = new RegExp(`\\b(${escaped})\\b`, "gi");

console.log(text.replace(regexp, "_$&_"));
// This _dea+hl[]rd_ is extremely annoying.

console.log("   word".search(/\S/)); // -> 3 (index)
console.log("   ".search(/\S/)); // -> -1

let pattern = /y/g;
pattern.lastIndex = 3;
let match = pattern.exec("xyzzy");
console.log(match); // -> [ 'y', index: 4, input: 'xyzzy', groups: undefined ]
console.log(match.index); // -> 4
console.log(pattern.lastIndex); // -> 5

let global = /abc/g;
console.log(global.exec("xyz abc"));
// -> [ 'abc', index: 4, input: 'xyz abc', groups: undefined ]
let sticky = /abc/y;
console.log(sticky.exec("xyz abc")); // -> null

let digit = /\d/g;
console.log(digit.exec("this is one: 1"));
// -> [ '1', index: 13, input: 'this is one: 1', groups: undefined ]
console.log(digit.exec("and now: 1"));
// -> null

console.log("Banana".match(/an/g));
// [ 'an', 'an' ]

let input = "String with 3 numbers... 42 and 88.";
let number = /\b\d+\b/g;
let match;
while ((match = number.exec(input))) {
  console.log(`Found number ${match[0]} at position ${match.index}`);
}
// Found number 3 at position 12
// Found number 42 at position 25
// Found number 88 at position 32

// =================== INI

function parseINI(string) {
  // Start with an object to hold the top-level fields
  let result = {};
  let section = result;

  string.split(/\r?\n/).forEach((line) => {
    let match;
    if ((match = line.match(/^(\w+)=(.*)$/))) {
      section[match[1]] = match[2];
    } else if ((match = line.match(/^\[(.*)\]$/))) {
      section = result[match[1]] = {};
    } else if (!/^\s*(;.*)?$/.test(line)) {
      // throw new Error("Line '" + line + "' is not valid.");
      throw new Error(`Line ${line} is not valid.`);
    }
  });

  return result;
}

console.log("name=Vasilis".match(/^(\w+)=(.*)$/));
// [ 'name=Vasilis', 'name', 'Vasilis', index: 0, input: 'name=Vasilis', groups: undefined ]

console.log(
  parseINI(`name=Vasilis
[address]
city=Tessaloniki`)
);
// { name: 'Vasilis', address: { city: 'Tessaloniki' } }

const tempINI = `searchengine=https://duckduckgo.com/?q=$1
spitefulness=9.7
; comments are preceded by a semicolon...
; each section concerns an individual enemy
[larry]
fullname=Larry Doe
type=kindergarten bully
website=http://www.geocities.com/CapeCanaveral/11451
[davaeorn]
fullname=Davaeorn
type=evil wizard
outputdir=/home/marijn/enemies/davaeorn`;
console.log(parseINI(tempINI));
/*
{
  searchengine: 'https://duckduckgo.com/?q=$1',
  spitefulness: '9.7',
  larry: {
    fullname: 'Larry Doe',
    type: 'kindergarten bully',
    website: 'http://www.geocities.com/CapeCanaveral/11451'
  },
  davaeorn: {
    fullname: 'Davaeorn',
    type: 'evil wizard',
    outputdir: '/home/marijn/enemies/davaeorn'
  }
}
*/

console.log(/🍎{3}/.test("🍎🍎🍎"));
// → false
console.log(/<.>/.test("<🌹>"));
// → false
console.log(/<.>/u.test("<🌹>"));
// → true

console.log(/\p{Script=Greek}/u.test("α"));
// → true
console.log(/\p{Script=Arabic}/u.test("α"));
// → false
console.log(/\p{Alphabetic}/u.test("α"));
// → true
console.log(/\p{Alphabetic}/u.test("!"));
// → false
console.log(/\p{Number}/u.test("42"));
// → true
