`use strict`

//gets the raw data
fetch("elephant.jfif").then(res => {
    //print the status code
    console.log(`Your status is ${res.status}`);
    //return the res as a blob (file like object of immutable, raw data)
    return res.blob();
    //(using the response data)
}).then(useResponseData => {
    //(printing the response data to the console)
    console.log(useResponseData);
    //printing image/object to the page 
    document.querySelector("#responseImg").src = URL.createObjectURL(useResponseData);
    //catches any errors and returns an error message
}).catch(err => console.log("You have an error" + err));