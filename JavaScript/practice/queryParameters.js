`use strict`

const params = new URLSearchParams(window.location.search)
for(const param of params){
    console.log(param)
} 

const fName = params.get("firstName");
const pWord = params.get("password");
console.log(fName);
console.log(pWord);