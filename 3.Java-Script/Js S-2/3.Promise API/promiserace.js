const pOne =   new Promise( (resolve,reject)=> 
setTimeout( () => resolve("pOne Done") , 3000 ) 
// setTimeout( () => reject("pOne Fail") , 3000 )  
)


const pTwo =  new Promise( (resolve,reject)=> 
    setTimeout( () => resolve("pTwo Done") , 2000 )  
    // setTimeout( () => reject("pTwo Fail") , 2000 )     
)

const pThree =  function(){ return new Promise( (resolve,reject)=> 
    // setTimeout( () => resolve("pThree Done") , 1000 )  
    setTimeout( () => reject("pThree Fail") , 1000 )      
)
    }

// Note pOne and pTwo are just promise itself
// WHile PThree is a function that will return promise

// Promise.allSettled - Returns the first settled promise
Promise.race([ pOne , pTwo , pThree() ]).then( (output) => console.log(output)).catch( (err) => console.error(err + " 123 ") )