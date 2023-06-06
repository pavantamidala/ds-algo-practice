import logObject from '../utils/logObject.js';

function smallestMultiple() {
  let ans = 0;
  let i = 1;
  for (let j = 1; j < Infinity; j++) {
    for (i; i <= 20; i++) {
      if (i % j === 0) {
        return;
      }
    }
    if (j === 20) {
      console.log(j);
      return j;
  }
  return ans;
}
logObject(smallestMultiple());
// function temp() {
//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//     for (let j = 1; j < 5; j++) {
//       console.log(j, 'j');
//     }
//     return;
//   }
// }
// temp();
