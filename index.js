// Code your solutions in this file
const names =["Ada","Brendan","Ali"];
const x = "birthday";
function writeCards(names, x){
    let result = [];
    for (let i=0; i<names.length; i++){
        result.push(`Thank you, ${names[i]}, for the wonderful ${x} gift!`)
        //debugger
    }
    return result;
}

function countDown(number){
 while (number>=0){
    console.log(number--)
 }
 }
    countDown()