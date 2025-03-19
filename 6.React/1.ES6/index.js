"use strict"

function sayHello(){

    for( let i = 0 ; i < 5 ; i ++ ){
        console.log(i)
    }

}

sayHello()

const bello = {
    hi : "hello" , 
    potato(){
        console.log( " this value :" ,this)
    }
}

// here this refers to object 
bello.potato() 

// here this refer to global window
const potat = bello.potato

potat()

// To make it refer to the object itself use bind
const goodPotat = bello.potato.bind( bello )

goodPotat()


//  Object destructuring 

const obj = { a : 1 , b : 2 , c : 3 }

const { a : A } = obj

console.log( A )
 

