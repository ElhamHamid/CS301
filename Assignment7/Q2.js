// function that returns the commen prefix of a given string

'use strict';
function prefix(str1,str2){
    let temp_str='';   
    let j=0;
    for(let i=0; i<str1.length; i++){
        if(str2[j]===str1[i]){
            temp_str+=str2[j];
            j++;
        }
    }
    return temp_str;
}


let mystring1='disaaable';
let mystring2="distasteful";

let myBrand=prefix(mystring1,mystring2);
console.log(myBrand);


