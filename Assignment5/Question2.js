// change Degree fahrenheit to degree celsius
'use strict';

let prompt=require('prompt-sync')();

function farhToCels(t){
    let cel= (t-32)*5/9;
    return cel;
}


let t=parseFloat(prompt('please enter temperature in degree Fahrenheit:'));

console.log(farhToCels(t));