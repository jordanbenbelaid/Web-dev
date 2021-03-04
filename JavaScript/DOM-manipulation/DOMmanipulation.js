`use script`

let paras = document.querySelectorAll('p');
for(let p of paras){
    p.style.color = 'blue';
}

const body = document.body;
body.append("Hello my friends" + ", how are you?");
// body.appendChild("hello"); will work on specific elements

const div = document.createElement("div");      //reference point
div.innerText = "Hello"; //ignores white space

const heading = document.createElement("h1");
heading.innerHTML = "hey there";

body.append(div);
body.append(heading);



let newStuff = document.querySelector("#newHref");
let aTag = document.createElement("a");

// aTag.href = "https://www.google.com";
// aTag.innerText = "Click Me!";
newStuff.innerHTML = '<a target="_blank" href="https://www.google.com">Click Me!</a>'     

// newStuff.append(aTag);

//event listeners instead of onclick
sub.addEventListener("click",() => {
    console.log("Stop clicking me -_-")
} )