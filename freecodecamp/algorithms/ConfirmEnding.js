function confirmEnding(str, target) {
    if(!str.includes(target)) return false
    let ans
    target.split('').reverse().map((letter,index)=>{
        if(str[str.length - (index+1)] == letter){
            ans = true
        }else{
            ans = false
        }
    })
    return ans 
}

console.log(confirmEnding("Bastian", ""))