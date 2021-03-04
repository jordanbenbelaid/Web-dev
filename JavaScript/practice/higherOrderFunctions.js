`use strict`

//arr = [1,2,3,4]
//A higher order function will take 'a' function or return 'a' function
//arr.sort(function);

const greeting = function(inputName) {
    return function(msg){
        console.log(`hey there ${inputName}, ${msg}`)
    }
}

let greet = greeting("Jordan");
greet("How are you");

//A callback will be expected to use a function that is passed to a function
// arr.array.forEach(element => {
// })

function callGreeting(anotherName) {
    alert("Hello" + anotherName);
}

function promptInput(callback) {
    let enterName = prompt("Please enter your name...")
    callback(enterName);
}

promptInput(callGreeting);