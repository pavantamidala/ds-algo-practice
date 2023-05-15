function sumSquareDifference(limit) {
  let numbersSquaresSum = 0;
  let squareSumOfTheNumbers = 0;

  for (let i = 1; i <= limit; i++) {
    numbersSquaresSum = numbersSquaresSum + Math.pow(i, 2);
    squareSumOfTheNumbers = squareSumOfTheNumbers + i;
  }

  squareSumOfTheNumbers = Math.pow(squareSumOfTheNumbers, 2);
  return squareSumOfTheNumbers - numbersSquaresSum;
}

console.log(sumSquareDifference(100));
