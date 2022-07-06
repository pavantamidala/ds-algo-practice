function sumAll(arr) {
    let sum = 0
    let min = Math.min(...arr)
    let max = Math.max(...arr) 
    for(let i=min;i<=max;i++) {
        sum = i+sum 
    }
    return sum 
  }
  
  console.log(sumAll([1, 4]))