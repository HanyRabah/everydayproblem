function smallestMissingInteger(a) {
  if (!Array.isArray(a) || a.length < 1) {
    return;
  }

  let max = a[0];
  for (let i = 1; i < a.length; i++) {
    if (a[i] > max) {
      max = a[i];
    }
  }

  let min = max + 1;
  for (let i = 1; i <= a.length; i++) {
    if (a.indexOf(i) === -1 && i < min) {
      min = i;
    }
  }

  return min;
}

module.exports = smallestMissingInteger;
