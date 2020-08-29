// function that multiplay every element oa an array with a given number
'use strict';

function multiply(arr,n){
    let temp_arr=[];
    for(let i=0; i<arr.length; i++){
        
        temp_arr[i]=arr[i]*n;
    }
    return temp_arr;
}
 
 

let arr1=[17,8,9,5,20];

let myArray=multiply(arr1,3);

console.log(myArray);