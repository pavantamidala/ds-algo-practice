function smallestMultiple(limit, length) {
  let ans = 0;
  for (let i = 1; i <= length; i++) {
    for (let j = 1; j <= limit; j++) {
      if (j % i === 0) {
        ans = j;
        break;
      }
    }
  }
  return ans;
}

console.log(smallestMultiple(3000, 10));
