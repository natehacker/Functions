//playing with functions

function double (n){
    console.log (n * 2)
}
double(5)

function add(num1,num2){
    console.log(num1 + num2)
}
add(100,100)

//filer methodology
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