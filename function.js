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