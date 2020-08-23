//Q Write a program to get an integer input from user and outputs if the entered number is even or odd

let prompt=require('prompt-sync')();
let number=parseInt(prompt('enter your number:'));

if(number%2===0){
    console.log('Even');
}else{
    console.log('Odd');
}

// Q1

let prompt=require('prompt-sync')();
let num1=parseFloat(prompt('enter your first number:'));
let num2=parseFloat(prompt('enter your second number:'));

if(num1-num2<0){
    console.log(Math.abs(num1-num2));
}else{
    console.log(num1-num2);
}

// Q2

let prompt=require('prompt-sync')();
let weather=prompt('enter todays weather:');

if(weather==='hot'){
    console.log('sandals');
}else if(weather==='rain'){
    console.log('galoshes');
}else if(weather==='snow'){
    console.log('boots');
} else{
    console.log('shoes');
}

// Q3

let prompt=require('prompt-sync')();
let studentName=prompt('enter student name:');
let creditsCompleted=parseFloat(prompt('enter number of credit completed'));

if(creditsCompleted>=0 && creditsCompleted<30){
    console.log(studentName + 'freshman');
}else if(creditsCompleted>=30 && creditsCompleted<60){
    console.log(studentName + 'sophomore');
}else if(creditsCompleted>=60 && creditsCompleted<90){
    console.log(studentName +'junior');
}else {
    console.log(studentName + 'senior');
}

// Q4

let prompt=require('prompt-sync')();
let costOfHouse=parseFloat(prompt('enter cost of the house in $'));

if(costOfHouse>=0 && costOfHouse<50000){
    console.log('$'+(costOfHouse*0.05));
}else if(costOfHouse>=50000 && costOfHouse<100000){
    console.log('$'+(((costOfHouse-50000)*0.10)+2000));
}else if(costOfHouse>=100000 && costOfHouse<200000){
    console.log('$'+(((costOfHouse-100000)*0.20)+7500));
}else{
    console.log('$'+(((costOfHouse-200000)*0.25)+27500));
}

// Q5

let prompt=require('prompt-sync')();
let personStatus=prompt('enter person status:');
let overDueday=parseFloat(prompt('enter past over due date:'));
if(personStatus==='student' && overDueday===0){
    console.log(6+'weeks');
}else if(personStatus==='student' && overDueday<3){
    console.log(4+'weeks');
}else if(personStatus==='student' && overDueday>=3){
    console.log(2+'weeks');
}else if(personStatus==='faculty' && overDueday===0){
    console.log(16+'weeks');
}else if(personStatus==='faculty' && overDueday<3){
    console.log(12+'weeks');
}else if(personStatus==='faculty' && overDueday>=3){
    console.log(8+'weeks'); 
}else if(personStatus==='other' && overDueday===0){
    console.log(4+'weeks');
}else if(personStatus==='other' && overDueday<3){
    console.log(3+'weeks');
}else if(personStatus==='other' && overDueday>=3){
    console.log(2+'weeks');
}


// Q5 from chapter7

let prompt=require('prompt-sync')();
let childsAge=parseFloat(prompt('enter childs age:'));
let season=prompt('enter the season:');

if(childsAge<=5 && season==='summer'){
console.log('8:30'+'pm');
}else if(childsAge<=5 && season==='fall'){
    console.log('8:00'+'pm'); 
}else if(childsAge<=5 && season==='winter'){
    console.log('8:00'+'pm'); 
}else if(childsAge<=5 && season==='spring'){
    console.log('8:00'+'pm'); 
}else if(childsAge>=6 && childsAge<=12  && season==='summer'){
    console.log('9:30'+'pm'); 
}else if(childsAge>=6 && childsAge<=12  && season==='winter'){
    console.log('8:30'+'pm');
}else if(childsAge>=6 && childsAge<=12  && season==='spring'){
    console.log('8:30'+'pm');
}else if(childsAge>=6 && childsAge<=12  && season==='fall'){
    console.log('8:30'+'pm');
}else if(childsAge>=13 && season==='summer'){
    console.log('10:30'+'pm');
}else if(childsAge>=13 && season==='winter'){
    console.log('9:30'+'pm');
}else if(childsAge>=13 && season==='spring'){
    console.log('9:30'+'pm');
}else if(childsAge>=13 && season==='fall'){
    console.log('9:30'+'pm');
}







