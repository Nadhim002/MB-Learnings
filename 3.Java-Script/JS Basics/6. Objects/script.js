/* object Creation */


// 1. Using Object Literal 

let objLiteral = {id :"maisha",
    age : 20
}

console.log(objLiteral); 

// 2. Using Object Constuctor 

let objObject = new Object() ;

objObject.id = "nadhim"
objObject.age = 20 ; 

console.log(objObject) ; 

// 3. Using Functional Constructor 

function objCreator(id  , age){
    this.id = id 
    this.age = age
}

const objFunc = new objCreator("rehman",30) ; 
console.log(objFunc) ; 

/*  Acessing Objects properties */ 

console.log(   objLiteral.id   ) // using . 

console.log(   objLiteral["id"]   ) // using [] 

let idVar = "id" ; // First pass
console.log(   objLiteral[idVar]   ) // using dynamic access

/* We can create and edit the object properties in the same way  */

objLiteral.address = 'erode' ; 

console.log(objLiteral) ; 

/*  Deleting object properties */ 

delete objLiteral.address 

delete objLiteral.bello // It will not create error even though bello is not a property 

console.log(objLiteral) ; 



/* Object Methods */

let animal = {
    id : "dog" ,
    sound : () => console.log("bark")  , 
    soundAdv(){ console.log("bark Advanced") }
}

animal.sound() ; 


/* Checking the keys in Objects */ 

// Way 1 

console.log( "id" in animal ) ; 

// Way 2 

console.log( animal.hasOwnProperty("sound")  ) ; 
