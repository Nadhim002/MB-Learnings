/* 
Array

- It is mutable 
- Neagtive indexing is allowed in arrays

*/

/* Creation of Array */


let a = [1,2,"a" , "blue"] ; 

console.log(a) ; 

let b =  new Array(1,2,"a" , true) 

console.log(b) ; 

console.log("----------------------") ;

/* Retreiving array elements */

console.log(    a.at(-1)      ) ; 

console.log(     a[0]         ) ; 

console.log("----------------------") ;

/* Array methods

.push(item) - adds a element at the end 
.unshift(item) - adds a element at the start

.pop() - removes the last element and returns it 
.shift() - removes the first element and returns it 

.slice(start,end) - returns the sub-set of array
.splice(start,noOfItems , ..items) - returns the subset and replace it with given values


.includes(item) - returns boolean whether the given item is there or not

.indexOf(item) -returns the index of the item
.lastIndexOf(item) - returns the last occurence of the item


.sort() - to sort the array


*/

let m = a.indexOf("blue") ; 

console.log(a)  // [1, 2, 'a', 'blue']

a.splice(1,1,7,8,9) 

console.log(a) // [1, 7, 8, 9, 'a', 'blue']


/*

Advanced Array Methods


.map( item =>  "  opration to do  ")  - to create a new array using existing array 
.filter( item => "Condition to satify"  )  - to create a new array based on the given conditions
.reduce(  (accumulator , currentItem) =>  "opration to do "  ,  " Initial value of accumlator "          ) - reduce the array array into a single object
*/ 


// Map example

let x = [1,2,3,4,5,6,7,8,9,10] ; 

let mapArray = x.map(num => num*num ) ; 

console.log(mapArray) ; 

// filter array
let filterArray = x.filter(num => num >4 && num <9  ) ; 
console.log(filterArray) ; 

// Reduce Array
let reduceArray = x.reduce( (acc , curr) => acc + curr , 1  ) ; 
console.log(reduceArray)