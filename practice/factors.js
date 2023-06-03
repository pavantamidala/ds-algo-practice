import logObject from '../utils/logObject.js';

// factors of a number below certain number limit
function findFactors(number, limit) {
  let ans = [];
  for (let i = 1; i < limit; i++) {
    // i = 10
    // number = 30
    if (number % i == 0) {
      ans.push(i);
    }
  }
  return ans;
}

logObject(findFactors(10, 100));
