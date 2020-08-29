// function that returns the occurance of even elements in an array
'use strict';

function countEven(arr){
    count=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2==0){
            count++
        }
    }return count;
}

let arr1=[2,5,6,8,10,12,9,7,5];

let myArray=countEven(arr1);

console.log(myArray);