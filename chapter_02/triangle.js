const iter = 7;
const str = "#";
let result = "";

for (let i = 0; i < iter; i++) {
  result += str;
  console.log(result);
}

for (let line = "#"; line.length < 8; line += "#") {
  console.log(line);
}
