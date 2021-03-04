`use strict`

//hoisting changes handling for specific vars
//hoisting is different for let and const
//we can access a function before its been declared in our code
//execution phase vs compile phase

// fun();      //hello there - from es6

myFun();
function myFun(){
    console.log("Hello there...");
}


function example3(){
    let declaredButNotAssigned; 
    console.log(declaredButNotAssigned); // Undefined
    declaredButNotAssigned = true; 
}


function example4(){
    console.log(declaredButNotAssigned); // Throws ReferenceError
    console.log(typeof declaredButNotAssigned); // Throws ReferenceError
    const declaredButNotAssigned = true; 
}