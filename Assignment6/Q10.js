// function that
'use strict';

const days = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"];
const gifts = ["a partridge in a pear tree", "turtle doves", "French hens", "calling birds", "golden rings", "geese a laying", "swans a swimming", "maids a milking", "ladies dancing",
    "lords a leaping", "pipers piping", "drummers drumming"];
let input = require('prompt-sync')();
let day = parseInt(input("Enter an integer b/n 1 to 12: "));
let x = day - 1;
let y = days[x];
function christmassGift() {
    let z = [];
    for (let i = x; i >= 0; i--) {
        z.push(gifts[i]);
    }
    return ("On the " + y + "day of Christmas, my true love gave to me :" + z.join(","));
}
console.log(christmassGift());