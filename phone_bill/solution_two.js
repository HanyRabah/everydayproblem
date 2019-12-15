// By Mustafa Hanif
const smallest = data => {
  const lines = data.split('\n');
  const phone = {};
  lines.forEach(line => {
    const time = line.split(',')[0];
    const number = line.split(',')[1];
    const seconds =
      parseInt(time.split(':')[0], 10) * 60 * 60 +
      parseInt(time.split(':')[1], 10) * 60 +
      parseInt(time.split(':')[2], 10);
    if (!phone[number]) {
      phone[number] = 0;
    }
    if (seconds < 300) {
      phone[number] = phone[number] + seconds * 3;
    } else {
      phone[number] = phone[number] + Math.ceil(seconds / 60) * 150;
    }
  });
  // Promotion
  const result = Object.entries(phone);
  result.sort((a, b) => {
    if (a[1] === b[1]) {
      return (
        parseInt(a[0].replace(/-/g, ''), 10) -
        parseInt(b[0].replace(/-/g, ''), 10)
      );
    } else {
      return b[1] - a[1];
    }
  });
  const promotedNumber = result[0][0];
  return result
    .filter(phone => phone[0] !== promotedNumber)
    .reduce((a, c) => a + c[1], 0);
};

module.exports = smallest;
