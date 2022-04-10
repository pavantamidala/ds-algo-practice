function createCharMap(arr) {
  let charMap = {};
  for (let val of arr) {
    if (!charMap[val]) {
      charMap[val] = 1;
    } else {
      charMap[val] += charMap[val];
    }
  }
  return charMap;
}
function uniqueArr(arr) {
  // return arr
  let charMap = createCharMap(arr);
  return Object.keys(charMap);
}

let arr = [1, 2, 3, 3, 4, 5, 5, 6, 7];
let res = uniqueArr(arr);
console.log(res);
