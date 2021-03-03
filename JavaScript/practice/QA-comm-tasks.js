
//getting started
console.log("Jordan")
console.warn("Benbelaid")
console.info("London")
console.error("Aries")

//variables
const make = "Audi";
const model = "A4";
console.log(`My favourite car is an ${make} and the model is ${model}`)

//%c is where the css will start on the text
const myTxt = "Hello, I like this"
console.log("This is now %c The end of the exercises."
    + myTxt, "color: orange;font-family:fantasy; font-style: Bold; background-color: black;padding: 10px");

let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay = 0;

totalLeftToPay = totalMoney - moneyPaidSoFar;

console.log(`The total bill is £${totalMoney} the remaining amount of money to be paid is £${totalLeftToPay}`);


//iteration
//recreating loop1
let a = 100;
while (a <= 200) {
    a++;
    console.log(`a = ${a}`);
}

//recreating loop2
let a = 100;
while (a <= 200) {
    if (a % 2 == 0) {
        console.log("-");
    } else {
        console.log("*");
    }
    a++;
}

//task 3
for (let i = 0; i < 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(j);
    }
}


//replacing loop 1 and loop 2 with for loops instead of while loops
//task 4 part 1
for (let a = 100; a <= 200; a++) {
    console.log(`a = ${a}`);
}

//task 4 part 2
for (let a = 100; a <= 200; a++) {
    if (a % 2 == 0) {
        console.log("-");
    } else {
        console.log("*");
    }
}

//task 5
let getDate = new Date();
day = getDate.getDay;

let day = now.getDay();
switch (day) {
    case 0:
        console.log(`It's Sunday`);
        break;
    case 6:
        console.log(`It's Saturday`);
        break;
    case 1:
        console.log(`It's Monday`);
    case 2:
    case 3:
    case 4:
    case 5:
        console.log(`It's a Weekday`);
        break;
    default:
        console.log(`Excuse me?`);
        break;
}


//truthy falsey exercise
//task 1
let strictA = true;
let strictB = 1;

console.log(strictA == strictB); //true
console.log(strictA === strictB); //false

//task 2
console.log(strictA != strictB); //false
console.log(strictA !== strictB); //true

//task 3
let age = 10;

if (age >= 18 && age <= 65) {
  console.log("Age is in range");
} else if (age < 18) {
  console.log("Underage");
} else {
  console.log("Catch all else");
}

//task 4
let age = 100;
let result = age >= 50 ? "50 or over" : "Under 50";
console.log(result);


//objects, arrays and JSON
//task 1
let darthVader = {allegiance: "Empire", weapon: "Lightsaber", Sith: true};
console.log(darthVader);

//task 2
console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Darth Vader is a Sith? ${darthVader.sith}`);
//darthVader.sith, if true, answer is false, and if false, answer is true
console.log(`Darth Vader is a Jedi? ${darthVader.sith ? "false" : "true"}`);

//task 3
//1.
let myArray = ["hello",'everyone'];
//2.
 console.log(myArray.length);
//3.
 myArray.push("goodbye");
//4.
 console.log(myArray.length);
//5.
 myArray.shift();
//6.
 for(eachElement of myArray) {
     console.log(eachElement);
 }
