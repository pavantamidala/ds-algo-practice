import createCharMap from "../../utils/CharMap.js";

function symmetricDifference(arr1, arr2) {
  let charMap1 = createCharMap(arr1);
  let charMap2 = createCharMap(arr2);
  let ans1 = arr1.filter((val) => {
    return !charMap2[val];
  });
  let ans2 = arr2.filter((val) => {
    return !charMap1[val];
  });
  return ans1.concat(ans2);
  // console.log(ans1);
  // console.log(ans2);
}

let result = symmetricDifference([1, 2, 3], [5, 2, 1, 1, 4]);
console.log(result);
