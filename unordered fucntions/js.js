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

// const isPalindromes =(inStrs)=>{
//     for (i=0;i< inStrs.length; i+=1){
//         if(inStrs[i] !==inStrs[inStrs.length -1 -i]){
//             return false

//         }


//     }
//     return true
// }
// console.log(isPalindromes(strs))



let string = "mom"
const isPalindromes = (string)=>{
for(i=0;i<string.length; i+=1){
if(string[i] !==string[string.length -1 -i]){
    return false

}
}
return true
}
console.log(isPalindromes)

let numbers = [3,45,6,6]
number = numbers.map(double)
function double (value){
    return value * 3

}
console.log(number)

for(i=0;i<1;i++){
    console.log("rachel")

}


// more map functions

let people = [3,45,6,7,]
let human = people.map(double)
function double (value){
    return value * 5
}
console.log(human)


for (let i = 1; i <= 30; i++){
    if(i % 3 == 0)
        console.log("nathan");
        else if (i % 5)
        console.log("louissaint")
        else
        console.log(i)


}

function fizzBuzz(){
    for (let i = 1; i <= 30; i++){
        if(i % 3 == 0)
            console.log("nathan");
            else if (i % 5)
            console.log("louissaint")
            else
            console.log(i)
    
    
    }  
}
fizzBuzz()


