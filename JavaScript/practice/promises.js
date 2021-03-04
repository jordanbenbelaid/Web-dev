`use strict`

const anotherPromise = new Promise((res, rej) => {
    console.log("initial");
    res(); //invokes and works
    rej(); //will be unfulfilled

}).then(() => {
    console.log("Do this then");
}).then(() => {
    console.log("This also happens");
}).catch(() => {
    console.log("Something went wrong");
})