import createCharMap from '../../utils/CharMap.js'

function diffArray(arr1, arr2) {
    let map1 = createCharMap(arr1)

    let map2 = createCharMap(arr2);

    // console.log(map1)
    // console.log(map2)
    let ans = []

    Object.keys(map1).forEach(function(key){
        if(!map2[key]){
            ans.push(key)
        }
    })

    Object.keys(map2).forEach(function(key){
        if(!map1[key]){
            ans.push(key)
        }
    })
 return ans.map((val)=>{
        if(Number(val)){
            console.log('hi')
            return Number(val) 
        }
        else{
            return val
        }
    })
    console.log(ans)
  }
//   console.log(Number('s'))
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// if(NaN){
//     console.log('hi')
// }