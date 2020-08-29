// Function that return the middle elements of an Array
'use strict';

function getMiddle(arr) {
    let mid = Math.floor(arr.length / 2);
    if (arr.length % 2 !== 0) {
       return arr[mid];
    } else {
       return (arr[mid - 1] + arr[mid]) / 2;
    }
}


let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4];

let myresult=getMiddle(arr2);

console.log(myresult);