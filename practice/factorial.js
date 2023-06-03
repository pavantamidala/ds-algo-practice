import logObject from '../utils/logObject.js';

function writeFactorial(number) {
  let ans = 1;
  for (let i = number; i >= 1; i--) {
    ans = i * ans;
  }
  return ans;
}

logObject(writeFactorial(4));
logObject(writeFactorial(5));
logObject(writeFactorial(6));
logObject(writeFactorial(7));
logObject(writeFactorial(8));
logObject(writeFactorial(9));
