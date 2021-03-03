'use strict'

let bool1 = true;
let bool2 = false;


//"not so strict" equality "==" we dont care about the type
console.log(bool1==bool2);  //false
console.log(1=="1");    //true
console.log([1]=="1");  //true
console.log(1==bool1);    //true

///Strict equality "===", when using strict we check for both value and type
console.log([1]==="1");  //false
console.log(1==="1");    //false


if(bool1){
    //code
} else if(bool2) {
    //code
} else {
    //code
}


//ternery if statement
let age = 100;
let result = age >= 50 ? "50 or over" : "Under 50";
//if age is greater than or equal to 50, print "50 or over" else print "Under 50"

let x = 1;
console.log(x++);   // 1, ++ after the value is printed
console.log(x);     // 2

let y = 1;
console.log(++y);   // 2, ++ before the value printed
console.log(y);     // 2


for(let i = 0; i < 10; i++){
    console.log(i);         //printing loop j, i amount of times
    for(let j = 0; j < 10; j++){
        console.log(j);
    }
}


let arr = [1,2,3,4,5];

arr.forEach(i => {console.log(i + 3)});


//switch case

let num = 1;
switch(num){
    case 0:
        console.log("0");
        break;
    case 1:
        console.log("1");
        break;
    default:
        console.log("Nothing");
}


//do while loops
let myB = false;
do{
    console.log("hello my friends")
}
while(myB); //output once false


let e = 30;

while(e<=40){
    e++
    if(e%2==0){
        console.log("yes");
    } else {
        console.log("no");
    }
}











