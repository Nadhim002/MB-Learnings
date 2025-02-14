function hello(){
    return new Promise((resolve) => setTimeout(() => resolve("Hello") , 3000))  
}



function helloCatcherNormalWay(){

    console.log("Start of regular promise")

    hello().then( (res) => console.log(res) ) // Js engine will not wait here

    console.log("End of promise")

}

helloCatcherNormalWay()

console.log("Hello Catcher")


// Start of regular promise
// End of promise
// Hello Catcher
// Hello

// The promise will not stop the execution of the function by JS , but leaves the function only