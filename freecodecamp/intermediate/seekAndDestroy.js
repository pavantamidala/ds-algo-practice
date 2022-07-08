import createCharMap from '../../utils/CharMap.js'

function destroyer(arr) {
    let mainArr = arguments[0]
    let itemsArr = Object.values(arguments).filter((v,i)=>i!=0)
    let map1 = createCharMap(itemsArr);

    mainArr =  mainArr.filter((item)=>{
      return !map1[item]
    })

  }

  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
