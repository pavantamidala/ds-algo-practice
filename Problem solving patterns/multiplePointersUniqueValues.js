function uniqueValues(arr) {
  let i = 0;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i = i + 1;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
let arr = [1, 1, 1, 2, 3, 3, 4, 4, 5, 5, 6, 6, 6];

let res = uniqueValues(arr);
// console.log(res);
