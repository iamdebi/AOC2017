
const fs = require('fs')

let input = fs.readFileSync('./input.txt').toString().split('\n')[0]

let numberArray = input.split('')
let list = [];

for(let i = 0; i < numberArray.length; i++){
    let current = numberArray[i]
    let nextNumber = numberArray[i+1] ? numberArray[i+1] : numberArray[0];


   if(current === nextNumber){
    list.push(parseInt(current));
   }

}

let total = list.length ? list.reduce((a, b)=>{ return a+b}) : 0

console.log(total)