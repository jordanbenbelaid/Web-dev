'use strict';

//prevents interesting behaviour//

// alert("hey");

console.log("hey");
console.warn("hey");
console.info("hey");
console.error("hey");

let a = "Jordan";

const b = "Jordy";

//AVOID USING var WHEN POSSIBLE
var c = "J";
console.log(c);



const fName = "String";
const num = 20;
const dPoint = 24.11;
const bool = false;
const obj = {fName: "Jordan", num: 20};
const bigOlNum = 65473892010948;     //big int
const undef = undefined;
const nullName = null;   //object with empty type (no data type)

console.log(typeof fName);
console.log(typeof nullName);
console.log(typeof obj);
console.log(typeof num);
console.log(typeof undef);



const greet = "Hello";
const myName = "Jordan"

console.log("The message: " + greet + " " + myName + ", how are you?");
console.log(`The message: ${greet} ${myName}, how are you?`);

console.log("quotes: 'Here is my quote'")
console.log("quotes: \'\Here is my quote'")


//ASI - Automatic Colon Insertion
//1. Add in a ; when two lines are seperated by a line break
//2. When two statements are seperated by curly brackets
//3. Line terminal followed by break, continue, return