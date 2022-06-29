
function updateInventory(curInv,newInv){
  // console.log(curInv)
  // console.log(newInv)

  if(!curInv.length)return newInv;
  if(!newInv.length)return curInv;

  let currArr = curInv.map((arr)=>arr[1])
  let newArr = newInv.map((arr)=>arr[1])

  let ans =  newArr.filter((item)=>{
    return  !currArr.includes(item)
  })
  curInv= curInv.filter((arr)=>{
    return !ans.includes(arr[1])
  })
  ans = newInv.filter((arr)=>{
    return ans.includes(arr[1])
  })
//   console.log(ans)
 ans = [...curInv,...ans]
 return ans
}
// console.log(updateInventory(curInv,newInv))
 let res = updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])   
console.log(sortArr(res))
 let ans = [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]

 function sortArr(arr) {
   return arr.sort((a,b)=>a[1].toLowerCase() > b[1].toLowerCase() ? 1 : -1) 
}