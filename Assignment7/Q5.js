// function that changes the first charcter of a word to upperCase
'use strict'
function titleCase(str){
    temp_str=str[0].toUpperCase();
    for(let i=1; i<str.length; i++){
        temp_str=temp_str + str[i];
      
    }

    return temp_str;
}



let myString = 'hamid'

let output = titleCase(myString);

console.log(output);