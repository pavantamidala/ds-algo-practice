function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let charmap1 = {};
  let charMap2 = {};
  for (let val of str1) {
    if (charmap1[val]) {
      charmap1[val] = charmap1[val] + 1;
    } else {
      charmap1[val] = 1;
    }
  }

  for (let val of str2) {
    if (charMap2[val]) {
      charMap2[val] = charMap2[val] + 1;
    } else {
      charMap2[val] = 1;
    }
  }
  console.log(charmap1);
  console.log(charMap2);
  for (let key in charmap1) {
    if (charMap2[key] !== charmap1[key]) {
      return false;
    }
  }
  return true;
}
console.log(anagram('pkp', 'kpp'));
