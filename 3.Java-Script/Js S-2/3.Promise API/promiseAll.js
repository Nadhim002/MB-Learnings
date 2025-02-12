const pOne =   new Promise( (resolve,reject)=> 
setTimeout( () => resolve("pOne Done") , 3000 )  
)


const pTwo =  new Promise( (resolve,reject)=> 
    setTimeout( () => reject("pTwo Done") , 2000 )  
    )

const pThree =  function(){ return new Promise( (resolve,reject)=> 
    setTimeout( () => resolve("pThree Done") , 1000 )  
    )
    }

// Note pOne and pTwo are just promise itself
// WHile PThree is a function that will return promise



// Promise.All - even one of them fails everything fails
Promise.all([ pOne , pTwo , pThree() ]).then( (output) => console.log(output)).catch( (err) => console.error(err + " 123 ") )

