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

let strs = "bad"

const isPalindromes =(inStrs)=>{
    for (i=0;i< inStrs.length; i+=1){
        if(inStrs[i] !==inStrs[inStrs.length -1 -i]){
            return false

        }


    }
    return true
}
console.log(isPalindromes(strs))

let numbers = [3,45,6,6]
number = numbers.map(double)
function double (value){
    return value * 3

}
console.log(number)

for(i=0;i<1;i++){
    console.log("rachel")

}


