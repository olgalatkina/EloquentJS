class MultiplicatorUnitFailure extends Error {}

const primitiveMultiply = (a, b) => {
  if (Math.random() <= 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("oops");
  }
};

function reliableMultiply(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (e instanceof MultiplicatorUnitFailure) {
        console.log("Try again.");
      } else {
        throw e;
      }
    }
  }
}

console.log(reliableMultiply(7, 8));

// ================= Retry EJS ==============

function reliableMultiply(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure)) {
        throw e;
      }
    }
  }
}
