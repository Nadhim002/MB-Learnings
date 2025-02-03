let animal = {
    id : "dog" ,
    height : 11 , 
    weight :  20 ,
    sound : () => console.log("bark")  
}

let helloObject = {
    pass : "Hello" 
}

console.log( Object.keys(animal)) // returns keys in a array

console.log( Object.values(animal)) // returns values in a array

console.log( Object.entries(animal)) // returns keys and values as a pair in a array


/* Cloning and copying objects  */ 

// shallow copy

// Way 01

let copyObj = {...animal, ...helloObject}   ; 
console.log(copyObj)

// Way 02 
let copyObjAssignMethod = Object.assign({},animal,helloObject)

console.log(copyObjAssignMethod)

// deep copy 

let copyDeep = JSON.parse(JSON.stringify(animal)) ; // It will remove function 

console.log(copyDeep ) ; 


/* Security options in Objects */

Object.freeze(animal) ; // prevents modification , add or delete

Object.seal(animal) ; // prevents addition or deletion


