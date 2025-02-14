const pOne =   new Promise( (resolve,reject)=> 
// setTimeout( () => resolve("pOne Done") , 3000 ) 
setTimeout( () => reject("pOne Fail") , 3000 )  
)


const pTwo =  new Promise( (resolve,reject)=> 
    // setTimeout( () => reject("pTwo Done") , 2000 )  
setTimeout( () => reject("pTwo Fail") , 2000 )     
)

const pThree =  function(){ return new Promise( (resolve,reject)=> 
    // setTimeout( () => resolve("pThree Done") , 1000 )  
    setTimeout( () => reject("pThree Fail") , 1000 )      
)
    }

// Note pOne and pTwo are just promise itself
// WHile PThree is a function that will return promise

// Promise.any - Returns the first resolved/sucess promise or Array of errors

// if all promises fails Return AggregateError: All promises were rejected 
Promise.any([ pOne , pTwo , pThree() ]).then( (output) => console.log(output)).catch( (err) => console.error(err ,"------" , err.errors ) ) 

// err.erros will return array error objects

