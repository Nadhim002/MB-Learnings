/* Data Types */

/* 
1. undefined
2. null 
3. boolean
4. number
5. string
6. symbol 
7. Object 
*/ 


/* 

1. Undefined is the datatypes that is initially assigned to every variables
2. null - Represents intentional absence of value
3. boolean - true or false
4. number - 4 , 4.5 , Nan 
console.log(a[0]) ; 

// Negative indexing is not allowed in JS
5. string - "Hello World"
6. symbol - Symbol('description');  // Always unique, even with same description
7. Object - array , function , map 

*/ 

// To find the types of variable use =>  console.log( typeof variable ) ; 

let str = "This is a string" ; 

console.log( typeof str ) ;  


console.log("-----------------") ;  

/* Type Coersion */

console.log("1" + 5 ) ; // string to number
console.log( 1 + "one" )  ; //  number to string
console.log(true + 1 ) ; // boolean to number


console.log("-----------------") ; 

// true is 1 in number
// false is 0 in number


/* Increment and decremnet in JS */

let a = 1 ; 
console.log(a) ;  

a++ ; 
console.log(a) ; 

a-- 
console.log(a) ; 

console.log("-----------------") ; 

/* Arithmric operators */

let x = 7 ;
let y = 13 ; 

console.log(x+y) ;
console.log(x-y) ; 
console.log(x*y) ;
console.log(x/y) ;
console.log(y%x) ;   // Modulo operator

console.log("-----------------") ; 

/* Augumented Opeartors */

x+= 1 ; 
console.log(x) ; 


