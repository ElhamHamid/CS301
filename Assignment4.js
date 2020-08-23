// Q1

let prompt=require('prompt-sync')();

let n=parseFloat(prompt('please enter your number:'));

for(i=1;i<=n;i++){
console.log("sunshine");
}

// Q2

let prompt=require('prompt-sync')();
let n=parseFloat(prompt('please enter your number:'));
let phrase=prompt('enter your phrase:');

for(let i=1; i<=n; i++){
    console.log(phrase);
}

// Q3

let prompt=require('prompt-sync')();
let n=parseFloat(prompt('please enter your number:'));

for(i=1; i<=n; i++){
    console.log(i);
}

// Q4

let prompt=require('prompt-sync')();
let n=parseFloat(prompt('please enter your number:'));
let sum=0;

for(i=1; i<=n; i++){
    if(i%2!=0){
        sum+=i;
    }      
}
console.log(sum);  


// Q5
let n=5;
for(let i=1; i<=12; i++){
console.log(n*i);
}

// Q6
let n=2;
for(let i=0;i<=31 ; i++){
    console.log(Math.pow(n,i));
}

// Q7

function getFibonacci(num){
    let output="";
    let onldnumber= -1;
    let newnumber= 1;
    for (let i=0; i<num ; i++){
        let prevoldnumber= newnumber
        newnumber= onldnumber + newnumber
        oldnumber= prevoldnumber
        output= output + newnumber + ' '
    }
    return output
}
console.log(getFibonacci(25));


// Q8

let prompt=require('prompt-sync')();
let guess;
let answer=38;
let count=1;


do{
    guess=parseFloat(prompt('please enter your guess number: '));
    if(guess<answer){ 
        console.log('your guess number is too low please try again');
        count++;
    }else if(guess>answer){
        console.log('your guess number is too higk please try again');
        count++;
    }
}while(guess!=38){
    console .log('your guess number is :' + guess +"\t"+'Bingo!!')
}
console.log("number of trail is: " + count);

// Q9

let prompt=require('prompt-sync')();
let n=parseFloat(prompt('please enter your number:'));

for(let i=1; i<=n; i++){
    console.log(i +"\t"+ i*2 +"\t"+ i*3 +"\t"+ i*i +"\t"+ i*i*i);
}

// Q10

for (let i = 1; i <= 12; i++) {
    let table = "";
    for (let j = 1; j <= 12; j++) {
        table += i * j + "\t";
    }
    console.log(table);
}

// Special questions:
// A
for(let i=1; i<=5;i++){
    let table="";
    for(let j=1; j<=i; j++){
        table+=i;
    }
    console.log(table);
}

// B
for(let i=1; i<=5;i++){
    let table="";
    for(let j=1;j<=i; j++){
        table+=j;
    }
    console.log(table);
}

// c
for(let i=5; i>=1;i--){
    let table="";
    for(let j=0;j<i; j++){
        table+=i;
    }
    console.log(table);
}









