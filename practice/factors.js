import logObject from '../utils/logObject.js';

// factors of a number below certain number limit
function findFactors(number, limit) {
  let ans = [];
  for (let i = 1; i < limit; i++) {
    if (i % number == 0) {
      ans.push(i);
    }
  }
  return ans;
}

logObject(findFactors(10, 100));
