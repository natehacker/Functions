// im realizing that i need to become more organized with my work 

//reverse a string()
let string = "string"
.split("")
.reverse("")
.join("")
console.log(string)

// reverse() method

let array = [1,2,3,4]
array.reverse()
console.log(array)

//push() method
let arr = [1,2,3,4]
arr.push(5,6)
console.log(arr)

// pop() method
let newarr = [1,2,3,4,5]
newarr.pop()
newarr.pop()
console.log(newarr)

// use the sort() method 
let numbers = [4,3,2,1]
numbers.sort()
console.log(numbers)


//concat() method 

const arr1 = [1,2]
const arr2 = [3,4]
const arr3 = [5,6]

const allArr = arr1.concat(arr2,arr3)
console.log(allArr)

// Map() method 
//lets map an array and return all the number multipled by 5 

let nathan = [5,10,15,20,25]// increase all the numbers in this array by * 5
let louissaint = nathan.map(double)// creating a new variable called louissaint hehehe my last name lol i dont know why i just did that its not even funnny im lame 
function double (value){ //creating a function called double and about to pass it to value
console.log(value * 5)
}
louissaint()//calling the function 