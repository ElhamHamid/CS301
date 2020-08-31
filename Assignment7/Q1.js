// function that take sorted string and extract the given name from full name.

'use strict';

function extractGivenName(str){
    let temp_array=[];
    let j=0;
    let words=str.split(',')
    for(let i=0; i<words.length; i++){
        temp_array[j]=words[words.length-1];
    }
    return temp_array.join();
}




let str1="Said, Hamid";

let myStr=extractGivenName(str1);

console.log(myStr);