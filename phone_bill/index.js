// Your monthly phone bill has just arrived, and it's unexpectedly large.
// You decide to verify the amount by recalculating the bill based on your
// phone call logs and the phone company's charges.

// The logs are given as a string S consisting of N lines separated by end-of-line
// characters (ASCII code 10). Each line describes one phone call using the following
// format: "hh:mm:ss,nnn-nnn-nnn", where "hh:mm:ss" denotes the duration of the call
// (in "hh" hours, "mm" minutes and "ss" seconds) and "nnn-nnn-nnn" denotes the 9-digit
// phone number of the recipient (with no leading zeros).

// Each call is billed separately. The billing rules are as follows:
//  - If the call was shorter than 5 minutes, then you pay 3 cents for every started second of the call (e.g. for duration "00:01:07" you pay 67 * 3 = 201 cents).
//  - If the call was at least 5 minutes long, then you pay 150 cents for every started minute of the call (e.g. for duration "00:05:00" you pay 5 * 150 = 750 cents and for duration "00:05:01" you pay 6 * 150 = 900 cents).
//  - All calls to the phone number that has the longest total duration of calls are free. In the case of a tie, if more than one phone number shares the longest total duration, the promotion is applied only to the phone number whose numerical value is the smallest among these phone numbers.

//  Write a function:
//   function solution(S);
// that, given a string S describing phone call logs, returns the amount of money you have to pay in cents.
// For example, given string S with N = 3 lines:
//   "00:01:07,400-234-090
//    00:05:01,701-080-080
//    00:05:00,400-234-090"
// the function should return 900 (the total duration for number 400-234-090 is 6 minutes 7 seconds, and the total duration for number 701-080-080 is 5 minutes 1 second; therefore, the free promotion applies to the former phone number).
// Assume that:
//  - N is an integer within the range [1..100];
//  - every phone number follows the format "nnn-nnn-nnn" strictly; there are no leading zeros;
//  - the duration of every call follows the format "hh:mm:ss" strictly (00 ≤ hh ≤ 99, 00 ≤ mm, ss ≤ 59);
//  - each line follows the format "hh:mm:ss,nnn-nnn-nnn" strictly; there are no empty lines and spaces.

//  In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

function solution(S) {
  var phoneMap = {};
  // convert input string into array of each phone bill entry
  var billArray = S.split('\n');

  var totalBill = 0;
  var maxDuration = 0;
  var phonesWithMaxDuration = '';

  // create mapping between phone number and total seconds billed
  for (var i = 0; i < billArray.length; i++) {
    var entry = billArray[i].split(',');
    var durationArray = entry[0].split(':');
    var totalSeconds =
      parseInt(durationArray[0]) * 3600 +
      parseInt(durationArray[1]) * 60 +
      parseInt(durationArray[2]);

    if (phoneMap[entry[1]]) {
      phoneMap[entry[1]] += totalSeconds;
    } else {
      phoneMap[entry[1]] = totalSeconds;
    }
    if (phoneMap[entry[1]] > maxDuration) {
      maxDuration = phoneMap[entry[1]];
    }
  }

  // find the phone number with the longest total duration
  var minNumValue = Number.POSITIVE_INFINITY;
  for (var key in phoneMap) {
    if (phoneMap[key] === maxDuration) {
      var numValue = parseInt(key.split('-').join(''));
      if (numValue < minNumValue) {
        minNumValue = numValue;
        phonesWithMaxDuration = key;
      }
    }
  }
  // calculate the total phone bill
  for (var i = 0; i < billArray.length; i++) {
    var entry = billArray[i].split(',');
    // apply the promotion to set the calls to the phone number with the longest duration to be free
    if (entry[1] !== phonesWithMaxDuration) {
      var durationArray = entry[0].split(':');
      var totalSeconds =
        parseInt(durationArray[0]) * 3600 +
        parseInt(durationArray[1]) * 60 +
        parseInt(durationArray[2]);
      if (totalSeconds < 300) {
        totalBill += totalSeconds * 3;
      } else {
        totalBill +=
          (Math.floor(totalSeconds / 60) + (totalSeconds % 60 > 0 ? 1 : 0)) *
          150;
      }
    }
  }

  return totalBill;
}

module.exports = solution;
