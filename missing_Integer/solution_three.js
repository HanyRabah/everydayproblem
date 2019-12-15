// By Mustafa hanif

const solution = arr =>
  arr.reduce((a, c) => {
    if (a === c) {
      return c + 1;
    }
    return a;
  }, 1);

module.exports = solution;
