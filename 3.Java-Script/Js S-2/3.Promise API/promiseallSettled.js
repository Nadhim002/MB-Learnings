const pOne =   new Promise( (resolve,reject)=> 
setTimeout( () => resolve("pOne Done") , 3000 ) 
// setTimeout( () => resolve("pOne Fail") , 3000 )  
)


const pTwo =  new Promise( (resolve,reject)=> 
    // setTimeout( () => reject("pTwo Done") , 2000 )  
setTimeout( () => reject("pTwo Fail") , 2000 )     
)

const pThree =  function(){ return new Promise( (resolve,reject)=> 
    setTimeout( () => resolve("pThree Done") , 1000 )  
    // setTimeout( () => resolve("pThree Fail") , 1000 )      
)
    }

// Note pOne and pTwo are just promise itself
// WHile PThree is a function that will return promise

// Promise.allSettled - Waits for every promise to be settled
// Returns a array of objects with status and value or reason
Promise.allSettled([ pOne , pTwo , pThree() ]).then( (output) => console.log(output)).catch( (err) => console.error(err + " 123 ") )

