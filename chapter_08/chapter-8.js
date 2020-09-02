function numberToString(n, base = 10) {
  let result = "";
  let sign = "";

  if (n < 0) {
    sign = "-";
    n = -n; // Math.abs(n);
  }

  do {
    result = String(n % base) + result;
    n = Math.floor(n / base);
  } while (n > 0);

  return sign + result;
}

console.log(numberToString(12, 2));

// ===============

function promptDirection(question) {
  let result = prompt(question);
  console.log(result);

  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";

  throw new Error(`Wrong direction: ${result}`);
}

function look() {
  if (promptDirection("Where to go?") == "L") {
    return "home";
  } else {
    return "two angry bears";
  }
}

try {
  console.log(`In front of you:`, look());
} catch (error) {
  console.log(`Something went wrong: ${error}`);
}

// ================

let accounts = {
  a: 100,
  b: 0,
  c: 20,
};

function getAccount() {
  let accountName = prompt("Enter an account name");

  if (!accounts.hasOwnProperty(accountName)) {
    throw new Error(`No such account: ${accountName}`);
  }

  return accountName;
}

function transfer(from, amount) {
  if (accounts[from] < amount) return;

  let progress = 0;

  try {
    accounts[from] -= amount;
    progress = 1;
    accounts[getAccount()] += amount;
    progress = 2;
  } finally {
    if (progress == 1) {
      accounts[from] += amount;
    }
  }
}

console.log(transfer("a", 50));

// =======================

class InputError extends Error {}

function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new InputError("Invalid direction: " + result);
}

for (;;) {
  try {
    let dir = promptDirection("Where?");
    console.log(`In front of you:`, dir);
    break;
  } catch (e) {
    if (e instanceof InputError) {
      console.log("Invalid direction. Try again.");
    } else {
      throw e;
    }
  }
}
