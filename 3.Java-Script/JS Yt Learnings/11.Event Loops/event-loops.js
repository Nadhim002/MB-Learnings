/* 

In example -1 

The Code will first excecute  

when it hits the setTimeout , it will start the timer and it will go out of the stack

when the timer expires , It goes inside the callback queue  , after which eventloop will execute the items in the callback stack one by one bu mooving it to call stack

then the setTimer will use callback execution context and logs it in console 

Note : console is a Web API

https://www.geeksforgeeks.org/what-is-an-event-loop-in-javascript/

*/ 


/* 

Due to lots of work in micro-task queue callbacks in callback will not get a chance to get executed 
It is called Starvation

*/ 


console.log("Start")

let cb  = () => {console.log("Bello")}

setTimeout(cb,0) // Least priority functions will be kept here

console.log("End")