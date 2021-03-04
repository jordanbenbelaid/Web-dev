`use strict`
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
let darthVader = { allegiance: "Empire", weapon: "Lightsaber", Sith: true };
console.log(darthVader);

//task 2
console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Darth Vader is a Sith? ${darthVader.sith}`);
//darthVader.sith, if true, answer is false, and if false, answer is true
console.log(`Darth Vader is a Jedi? ${darthVader.sith ? "false" : "true"}`);

//task 3
//1.
let myArray = ["hello", 'everyone'];
//2.
console.log(myArray.length);
//3.
myArray.push("goodbye");
//4.
console.log(myArray.length);
//5.
myArray.shift();
//6.
for (eachElement of myArray) {
    console.log(eachElement);
}

//destructuring
let user = {
    name: "John",
    years: 30
};

let { name, years: age, isAdmin = false } = user;
alert(name); // John
alert(age); // 30
alert(isAdmin); // false

//scope
//task 1
function doSomething() {
    let x = "food";
    if (x == "food") {
        let y = "apples";
    }
    console.log(x);
    console.log(y);           //reference error
}
doSomething();

//functions
//task 1
function subtractFunc(num1, num2) {
    return num1 - num2;
}
console.log(subtractFunc(10, 3));

//task 2
const welcomeFunc = function (name, age, gender) {
    return console.log(`My name is ${name}, I am ${age} years old, and of gender ${gender}`);
}
console.log(welcomeFunc("Jordan", 23, "Male"));

//task 3
powerup = (n1, n2) => {
    Math.pow(n1, n2);
}
console.log(3,4);


//closure
//task 1
function multiply(x){
    return function(y){
        return x*y;
    };
}
let multi4 = multiply(4);
console.log(multi4(10));

//task 2
function person(){
    let fName = "Jordan";
    return{
        getName: function () {
            return fName
        },
        setName: function (newName) {
            fName = newname;
        },
    };
}
let human = person();
console.log(human.getName());
human.setName("Amanda Wilson");
console.log(human.getName());

//task 3
function changeCount() {
    let counter = 0;
    return {
      increment: function () {
        counter += 1;
      },
      decrement: function () {
        counter -= 1;
      },
      value: function () {
        return counter;
      },
    };
  }
  let count = changeCount();
  console.log(count.value()); // 0
  count.increment();
  count.increment();
  console.log(count.value()); // 2
  count.decrement();
  console.log(count.value()); // 1


  //Callbacks & promises
  const increase = (value) => {
      console.log(`The value is now ${value + 10}`);
  }
  const original = (newVal) => {
      let newValue = parseInt(propt("Please enter a value"));
      newVal(newVal)
  }
  original(increase);

  //cookies
  function makeCookie(cookieName, username, email, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + "Username: " + username +" & "+ "Email: " + email + ";" + expires + ";path=/";
    }

    makeCookie("myCookie", "jordan", "jordanbenbelaid@hotmail.com", 2);

//higher order functions
let grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Cyrus', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Jeff', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

let isBoy = student => student.sex === "M";
let isGirl = student => student.sex === "F";

let getBoys = grades => (grades.filter(isBoy));
let getGirls = grades => (grades.filter(isGirl));

let average = grades => (grades.reduce((acc,curr) => (acc + curr.grade), 0) / grades.length);

let maxGrade = grades => (Math.max(...grades.map(student => student.grade)));
let minGrade = grades => (Math.min(...grades.map(student => student.grade)));

//task
let highestGrade = maxGrade(grades);
let lowestGrade = minGrade(grades);
let highestBoysGrade = maxGrade(getBoys(grades));
let lowestBoysGrade = minGrade(getBoys(grades));
let highestGirlsGrade = maxGrade(getGirls(grades));
let lowestGirlsGrade = minGrade(getGirls(grades));


//web storage
//task 1
let click = 0;

function clickCounter() {
    if (click == null) {
        localStorage.setItem("clickCount", 1);
    } else {
        localStorage.setItem("clickCount", Number(click) + 1);
    }
    click = localStorage.getItem("clickCount");
    document.querySelector("#count").innerHTML = "You have clicked " + click + " times";
}

//task 2
 // Get the field we are going to track
 let field = document.querySelector('#field');
 // See if we have an auto-save value
 // (this will only happen if the page is accidentally refreshed)
 if(sessionStorage.getItem("autosave")){
     //Restore the contents of the text field
     field.value = sessionStorage.getItem("autosave");
 }

 // Listen for changes in the text field
 field.addEventListener("change",function(){
     // Save the results into the session storage object
     sessionStorage.setItem("autosave", field.value);
 });