`use script`

let check = false;      //global scope


function fun() {        //block scope is being used, not functional scope
    let check = true;        
}

console.log(check) ;     //false

fun();
console.log(check);        //false


var check1 = 1;
let flag = true;
function changeCheck(){
    console.log(check1);
    console.log(flag);
}
changeCheck();  //expected output of global vars used is 1 and true
