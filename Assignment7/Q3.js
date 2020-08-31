// function that returns the commen prefix of a given string

'use strict';
function suffix(str1,str2){
    let temp_str=[];   
    let j=str2.length-1;
    for(let i=str1.length-1; i>=0; i--){
        if(str2[j]===str1[i]){
            temp_str.push(str2[j]);
            j--;
        }
    }
    return temp_str.reverse().join("");
}


let mystring1='swimming';
let mystring2="walking";

let myBrand=suffix(mystring1,mystring2);
console.log(myBrand);
