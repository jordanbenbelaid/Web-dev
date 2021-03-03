`use strict`

let fruit = ["pear", "apple", "orange", "Banana"];
console.log(fruit);

let largeArr = [1,2,3,4,5,6,7,8,9,90,12,134,4654,32345];
const [a,b,c,d,e,...rest] = largeArr;
console.log(a);
console.log(b);
console.log(c);
console.log(...rest);           // prints a as first element, b as second, c as third and rest prints the rest

let obj = {fName: "jordan", age: 23, address: "somewhere"};
const {fName, age} = obj;

console.log(fName);
console.log(age);
console.log(address);   //fName and age print, address comec back as defined 
                        //we use console.log(obj.address); if we want to see the address also