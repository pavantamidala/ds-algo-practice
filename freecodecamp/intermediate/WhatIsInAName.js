function whatIsInAName(collection, source) {
    let arr = [];
    // Only change code below this line
  let key = Object.keys(source)?.[0]
   arr = collection.filter((obj)=>{
        return obj[key]===source[key];
    })
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" },
   { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }], 

    { last: "Capulet" });