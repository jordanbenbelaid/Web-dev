`use strict`

function param(x, y, z){        //heavier comp/process
    return `${x}` + y + z;          //returns 123 as concatenated string
}

console.log(param(1,2,3));

function deposit(input){    
    balance = 100;
    let result = input + balance;       //returns 200 as a string
    return `${result}`;
}

console.log(deposit(100));


const funFunction = () => {
    console.log("I'm cool!");
}
funFunction();


const paraFunction = (param1, param2) => {
    console.log(param1, param2);
}


let singleParam = singlePara => {
    console.log(singlePara)
}
