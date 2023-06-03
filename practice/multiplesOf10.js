import logObject from '../utils/logObject.js';

function multipleOfANumber(number, limit) {
  let ans = {
    even: [],
    odd: [],
  };
  for (let i = 0; i <= limit; i++) {
    let multiple = i * number;
    if (multiple % 2 === 0) {
      ans['even'].push(multiple);
    } else {
      ans['odd'].push(multiple);
    }
  }
  return ans;
}

logObject(multipleOfANumber(10, 20));
logObject(multipleOfANumber(3, 20));
