function fibonacci (){
    var i;
    var fib = [0, 1]; // Initialize array!
    
    let limit = 4000000

   
for (i = 2; i <= limit; i++) {
  // Next fibonacci number = previous + one before previous
  // Translated to JavaScript:
  fib[i] = fib[i - 2] + fib[i - 1];
  if(fib[i]%2==0){

      console.log(fib[i]);
  }
}

}

fibonacci()