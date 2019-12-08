// This problem was asked by Uber.

// Given an array of integers, return a new array such that each element
// at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be
// [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// I would like also to use different solutions approach so if you have more than one solution
// let's list it down.

function arrayProduct(a) {
  if (!a || !Array.isArray(a)) {
    return [];
  }

  return a.map((n, i) => {
    return a.reduce((xs, x, j) => j === i ? xs : (xs *= x), a[0]);
  });
}

module.exports = arrayProduct;
