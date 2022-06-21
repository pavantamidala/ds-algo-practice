import createCharMap from '../utils/CharMap'
function uniqueArr(arr) {
  let charMap = createCharMap(arr);
  return Object.keys(charMap);
}

let arr = [1, 2, 3, 3, 4, 5, 5, 6, 7];
let res = uniqueArr(arr);
console.log(res);
