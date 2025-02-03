/* If else */ 

/* 

Syntax 

if (condition){
    # Do 1
} else if {
    # Do 2
} else {
    # Do 3    
}

*/ 


let x = 0 ; 

switch (x) { 
    case 1 : 
    case 5 : 
        break
    case 2 : 
        break
    default : 
        console.log("End of Switch") 

}


/* Ternary operator */


let a =  5 ; 
let tern = a%2 == 0 ? "True option" : "False Option"  ;

console.log(tern) ; 

/* Optinal Chaining */ 

const dictionary = {
    id : 2 ,
    bello : "nadhim" , 
    address : null
}


let cityName = dictionary?.address?.ciy ;

console.log(cityName) ; 