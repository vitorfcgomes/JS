/*
let num = [1,2,3,4]

for(let pos = 0; pos < num.length; pos++){
    console.log(`O valor da posição ${pos} tem o valor ${num[pos]}`)
} 
*/
let num = [1,2,3] 
let pos = 0

for(let pos in num){
    console.log(`A posição é ${pos} que tem o valor ${num[pos]}`)
}