`use strict`

//standard function with "name" parameter
const greet = (myName) => {
    alert(`Hey ${myName}`);
}

const getName = (callback) => {
    let username = prompt("Please enter name");
    callback(username);
}

getName(greet);



let ouput = () => {
    setTimeout(() => {
    console.log("output after wait");
}, 5000)
}
output();
