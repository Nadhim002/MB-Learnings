const apiUrl = "https://api.github.com/users/akshaymarch7"


// Promise is a Object representation of the eventual completion or failure of a asynchronous operation

// It returns the promise


/* 

Possible States of Promise
- Pending
- Fullfilled
- Rejected

promise are immutable in nature

*/ 

let data = fetch(apiUrl)

// to add callback function

data.then( function(incomingData){

    console.log("Hello World")
    console.log(data)
}
)

console.log(data)