/* Functions */ 

/* 
Note :  variables created inside the function cannot be accessed outside the function
*/ 

/* Ways to create function */ 

// Way 1 - tradiontal 

function sayHello(bro){
    console.log(`Hello ${bro}`) ; 
}


sayHello('nadhim') ; 

// Way 2 - function expression 

const sayHelloExp = function(){
    console.log("Hello World Expression") ; 
}

sayHelloExp() ; 

// Way  - Array Function 

const addFunc = (a,b) => console.log(a+b ) ; 

// Returning is also possible in arrow function 
const addFuncReturner = (a,b) => a+b ; 


console.log(addFunc(5,6)) ; 


/*  Default parameters in Function */

function mutiplier( a  , b = 10 ){

    return a*b
}

console.log(mutiplier(9,5)) ;  // 45

console.log(mutiplier(9)) ; // 90  

/* Rest Paramters */

function addAll(...array){
    return array.reduce((acc,curr)=> acc + curr , 0 ) ; 
}

console.log(addAll(1,2,3,4,5,6)) ; 


/* this keyword  */


/* It refers for global context in regular function */

const detailsRegular = {
    id : 2 , 
    name : "nadhim" , 
    bello(){
        console.log(`Bello ${this.id} `)
    }
}

detailsRegular.bello() ; 

/*  It will not work in arrow function  */

const detailsArrow = {
    id : 2 , 
    name : "nadhim" , 
    bello : () => console.log(`Bello ${this.id} `)
}

detailsArrow.bello() ; 


/* Passing functions as Argument */ 

function higherOrderFunction(num , callback){
    return callback(num) ; 
}

function squareIt(num){
    return num*num ;
}

function doubleIt(num){
    return num*2 ;
}

console.log(higherOrderFunction(5,squareIt)) // 25 

console.log(higherOrderFunction(5,doubleIt)) // 10 