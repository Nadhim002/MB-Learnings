/* While loop 


while( condition ){

# Do Something 
Donnot forget to break or increment or decrement 

}

*/ 

let w = 0

while ( w < 10 ){

    if (w==5){
        w++
        continue
    }
    console.log(w)
    w++ 

}

console.log("------------------------------")

/* Do While

do (
# Do Something
)while{condition}

*/


let d = 0 

do{
    console.log("Inside do while")
}while(
    d!=0
) 

console.log("------------------------------")
/* for-loop 

for( initialise , condition , increment / decrement ){
    # Do Something    
}

*/

for (let i = 0 ; i < 10 ; i++ ){
    if (i==7){break }
    console.log(i) 
}

console.log("------------------------------")

/* for of vs for in 

for of is for Used to iterate over the enumerable properties of an object.

for in for arrays - Used to iterate over the elements in the ieterable 

*/

const obj = {
    id : "nadhim" , 
    age : 20 , 
    food : () => console.log("eats rice")
}

for ( let prop in obj){
    console.log(prop) ; 
    console.log(obj[prop] )
    console.log("**** ")
}

const arr = [1,2,3,4,5] ; 


/*

for (let a of arr){
    console.log(a)
}

// It will print the index of the array instead of the elements

*/
for (let a of arr){
    console.log(a)
}

