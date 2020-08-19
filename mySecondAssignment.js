// Q1

let prompt=require('prompt-sync')();
let volumeInQuarts=prompt('enter value of volume in quarts:')
let volumeInLiters=parseFloat(volumeInQuarts)/1.057;
console.log(volumeInLiters);

// Q2

let prompt=require('prompt-sync')();
let distanceInKilometers=prompt('enter value of distance in kilometers:')
let distanceInMiles=parseFloat(distanceInKilometers)/1.609;
console.log(distanceInMiles);

// Q3

let prompt=require('prompt-sync')();
let totalBoxes=prompt('enter value of total boxes:')
let boxesInEachStuck=prompt('enter value of boxes in each stuck:')
let numberOfStucks=Math.ceil(totalBoxes/boxesInEachStuck);
console.log(numberOfStucks);

// Q4

let prompt=require('prompt-sync')();
let numberOfStudents=prompt('enter value of number of students:')
let numberOfTeams=prompt('enter value of number of teams:')
let teams=;
console.log(teams);

// Q5

let prompt=require('prompt-sync')();
let odometerReading=prompt('enter value of begining and ending of odometer reading:')
let numberOfGallonesUsed=prompt('enter value of number of gallones used:')
let mileage=parseFloat(odometerReading/numberOfGallonesUsed);
console.log(mileage);

// Q6

let prompt=require('prompt-sync')();
let age=prompt('enter value of your age:')
let slowestHeartRate=(220-age)*0.65
let fastestHeartRate=(220-age)*0.85;
let normalHeartRate= [[slowestHeartRate]   +   [fastestHeartRate]];
console.log(normalHeartRate);

// Q7

let prompt=require('prompt-sync')();
let numberofregularhour=prompt('enter value of regular hour:')
let employeesWage=prompt('enter value of wage:')
let grossPay=numberofregularhour*employeesWage
let tax=grossPay*0.15
let afterTaxPay=grossPay-tax;
console.log(afterTaxPay);





