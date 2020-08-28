// check if a number is a prime

let prompt = require('prompt-sync')();
let number = parseFloat(prompt('plese enter your number: '));

function checkPrime(n) {
    let prime = true;
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            prime = false;
        }

    }
    return prime

}

console.log(checkPrime(number));

