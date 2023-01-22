//playing with functions

function double (n){
    console.log (n * 2)
}
double(5)

function add(num1,num2){
    console.log(num1 + num2)
}
add(100,100)

//filter methedology
const numbers =[1,3,4,-4,10]
const filtered = numbers.filter(function(value){
return value >= 0;
})
console.log(filtered)

const nums =[23,2,1,4,56]
const numb = nums.map(double)
function double(value){
return value * 2
}
console.log(numb)

let two = [2,34,5,67,8]
one = two.map(add)
function add(value){
return value + 5
}
console.log(one)

// for loops

for (i=0;i<3;i++){
console.log("nathan ",i)
}


let tv = 36
if (tv > 40){
    console.log("let buy this ")
} else{
    console.log("no")
}
const people = {
    name:"john",
    age:78,
    race:"black"
}
console.log(people.name)

function hello(num1,num2){
console.log(num1 - num2) 
}
hello(23,45)

let you = [565,78,89808,09] 
let me = you.map(double)
function double(value){
    return value * 34
}
console.log(me)


// reverse the word new york 

let city = "new york"
.split("")
.reverse("")
.join("")
console.log(city)