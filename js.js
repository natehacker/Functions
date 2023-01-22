//palindrine checker 

const str = "anoa"
const isPalindrome = (inStr) => {
    for(i=0; i<inStr.length; i+=1){
    if(inStr[i] !== inStr[inStr.length -1 -i ]){
return false
    }
}
return true 
}
console.log(isPalindrome(str))