function arrayProduct(a) {
  if (!a || !Array.isArray(a)) {
    return [];
  }
  return a.map((n, i) => {
    return a.reduce((xs, x, j) => (j === i ? xs : (xs *= x)), a[0]);
  });
}

module.exports = arrayProduct;
