function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let charMap = {};
  let charMap2 = {};

  arr1.forEach((val) => {
    if (!charMap[val]) {
      charMap[val] = 1;
    } else {
      charMap[val] = charMap[val] + 1;
    }
  });
  arr2.forEach((val) => {
    if (!charMap2[val]) {
      charMap2[val] = 1;
    } else {
      charMap2[val] = charMap2[val] + 1;
    }
  });
  for (let key in charMap) {
    if (!(key ** 2 in charMap2)) {
      return false;
    }
    if (charMap2[key ** 2] !== charMap[key]) {
      console.log('hello');
      return false;
    }
  }
  console.log('hi');
  return true;
  // console.log(charMap)
}

console.log(same([1, 3, 2, 3, 2], [4, 1, 9, 4]));
