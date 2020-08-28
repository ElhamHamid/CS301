// Check prime function
'use strict';
let prompt=require('prompt-sync')();

function checkPrime(n){
    return n%2!==0;
}

let n=parseFloat(prompt('please enter your number to check if it is prime:'));

console.log(checkPrime(n));