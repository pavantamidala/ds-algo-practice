// import createCharMap from '../../utils/CharMap.js';
import createCharMap from '../../utils/CharMap.js';

function findLongestWordLength(str) {

    let map1 = str.split(' ').sort((a, b) =>b.length-a.length)[0]
    console.log(map1);
    
    
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");