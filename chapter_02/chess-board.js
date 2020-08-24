const size = 8;
const str0 = " ";
const str1 = "#";
let output = "";

for (let i = 0; i < size; i++) {
  for (let k = 0; k < size; k++) {
    if ((i + k) % 2 === 0) {
      output += str0;
    } else {
      output += str1;
    }
  }
  output += "/n";
}

console.log(output);
