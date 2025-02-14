// async will wrap the returned value inside a promise if u don't return a promise 
// If u return a promise , then mental don't use async

async function hello1(){
    return new Promise((resolve) => setTimeout(() => resolve("Hello one") , 10000))  
}

async function hello2(){
    return new Promise((resolve) => setTimeout(() => resolve("Hello two") , 5000))  
}

// await is similar to .then()
// It can be used only inside a async function

// Output

// Start of await
// Last Line
// Hello one
// End of promise one
// Hello two
// Normal Word

async function helloCatcher(){

    console.log("Start of await")

    const value1 = await hello1() 

    console.log( value1 )
    console.log("End of promise one")

    const value2 = await hello2() 

    console.log( value2 )
    console.log("Normal Word")

}

helloCatcher()


console.log("Last Line")