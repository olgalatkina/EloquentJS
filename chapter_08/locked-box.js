const box = {
  locked: true,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  },
};

function withBoxUnlocked(func) {
  if (!box.locked) {
    return func();
  }

  box.unlock();
  try {
    return func();
  } finally {
    box.lock();
  }
}

withBoxUnlocked(function () {
  box.content.push("gold piece");
});
console.log(box.locked);
// → true

try {
  withBoxUnlocked(function () {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
console.log(box.locked);
// → true
