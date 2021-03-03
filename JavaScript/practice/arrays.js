'use strict'

//multiple ways to use arrays

let arr = Array();      //empty array
let arrOfSize = Array(10);      //array of 10
let arrOfVal = Array(1,2,3,4,5);    //array with values
let val = ["Cat", "Dog", "Frog"];
let valNum = [1,2,3,4,5];

console.log(arr);
console.log(arrOfSize);
console.log(arrOfVal);
console.log(val);

let cohort = [];
cohort[0] = "Ed";
cohort[4] = "Jordan";
console.log(cohort[0]);
console.log(cohort);


cohort.push("Ross");        //add ross to the end of the array
console.log(cohort);

cohort.pop();               //removes last element from array
console.log(cohort);
console.log(cohort.length);     //gets length of array

cohort.unshift("Hamilton");         //adds element to start of array
console.log(cohort);
cohort.shift();          //deletes element at start of array
console.log(cohort);

let num = [1,2,3,4,5,6]
for(const key in num){
    console.log(`key: ${key}   Value: ${num[key]}`)
}

let barns = [
    {
        size: "Large",
        capacity: "30m",
        colour: "Red"
    },
    {
        size: "Medium",
        capacity: "20m",
        colour: "Blue"
    },
    {
        size: "Small",
        capacity: "5m",
        colour: "Yellow"
    },
]

console.log(barns);

for(let e in barns){
    for(let key in barns[e]){
        console.log(`${key}: ${barns[e][key]}`);
    }
}
