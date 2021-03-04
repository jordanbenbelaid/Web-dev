`use strict`


    //self invoking
    (function () {
        console.log("Hey there");
    }());

//for readability sakes, include only up to 4-5 argumentss
const fun = (function () {
    console.log("Hey again!");
}());


//closures
//Main use case is using global vars within the blockscope, being able to access another functions vars
//globally from inside the function itself
let aName = "Jordan";
printName = () => {
    console.log(aName);
}


//  Closures have access to outer function's variables even after the outer function returns

function celebrityName(firstName) {
    let nameIntro = "Celebrity is ";
    // Inner function has access to outer function's variables, including parameters
    function lastName(surname) {
        return `${nameIntro} ${firstName} ${surname}`;
    }

    return lastName;
}

let mjName = celebrityName("Michael"); // celebrityName outer function has returned

console.log(mjName);
// Closure (lastName) is called after outer function has returned
// Yet, closure still has access to outer function's vars and params
let mjNameFull = mjName("Jackson");

console.log(mjNameFull); // Celebrity is Michael Jackson

