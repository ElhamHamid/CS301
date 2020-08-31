// function that returns all switched character of a given string.

'use strict';
function switchCase(s) {
    let lowerCase="abcdefghijklmnopqrstuvwxyz";
    let temp_str ='';
    for(let i=0; i<s.length; i++){
        let v=s[i];
        if(lowerCase.indexOf(v)===-1){
            temp_str+=v.toLowerCase()
        }else{
            temp_str+=v.toUpperCase()
        }
    }
    return temp_str;
}


let myString = 'Hamid'

let output = switchCase(myString);

console.log(output);