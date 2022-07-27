let height = [1,8,6,2,5,4,8,3,7]
 
 var maxArea = function(height) {

//     height = Array.from(new Set(height))
// console.log(height)
//     let firstMax = Math.max(...height)
//     let secondMax = Math.max(...height.filter((n,i)=>{
//         return i != height.indexOf(firstMax)
//     }))
    
//     let maxIndex = height.indexOf(firstMax)
//     let minIndex = height.lastIndexOf(secondMax)

  

//     return secondMax*(Math.abs((maxIndex-minIndex)))

let firstMax = Math.max(...height)
let secondMax = Math.max(...height.filter(n=>n != firstMax))

let maxIndex = height.indexOf(firstMax)
let minIndex = height.indexOf(secondMax)

return secondMax*(Math.abs((maxIndex-minIndex)))


};

console.log(maxArea(height));

//first solution;
// let firstMax = Math.max(...height)
// let secondMax = Math.max(...height.filter(n=>n != firstMax))

// let maxIndex = height.indexOf(firstMax)
// let minIndex = height.indexOf(secondMax)

// return secondMax*(Math.abs((maxIndex-minIndex)))