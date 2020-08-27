const loop = (value, funcIf, funcUpdate, funcBody) => {
  for (let i = value; funcIf(i); i = funcUpdate(i)) {
    funcBody(i);
  }
};

loop(
  10,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
