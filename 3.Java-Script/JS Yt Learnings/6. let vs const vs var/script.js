let b = 75

{ 
   const a = 1
   let b = 10  
   console.log(b) // 10 - bcoz of block-scope

 }

//  console.log(a)  # We get error due to block-scoping
console.log(b) // 75 

console.log("**************")

