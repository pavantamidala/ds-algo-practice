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

export default createCharMap