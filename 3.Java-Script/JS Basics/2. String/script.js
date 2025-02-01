/* String Creation */


let a = "double-qoutes" ; 
let b = 'single-quotes' ;
let c = `back-ticks` ;

console.log(a,b,c ) ; 

console.log("-----------------") ; 


/*COnact*/

console.log( "first" + "second" ) ;


console.log("-----------------") ; 

/* String literals */

let identity = "nadhim"
let age = 21 ; 

let literal = `My Name is ${identity} and I'm ${age}` ; 
console.log(literal) ; 

console.log("-----------------") ; 

/* String in Java script is immutable */

let d = "one" ; 
d += "s" ; 

// now "one" is been removed and re-assigned to "ones"

/* Escape tags 


\\ - to create slash
\" - to create double quotes
\n - to crete new line 

*/ 

let escapeString = ` "Doouble-qoutes" \n This is second line \n 'Single qoutes' \n \`back-ticks\` `
console.log(escapeString) ; 

console.log("-----------------") ; 

/*
 To find length of the Sring 
length is a property not a method
*/ 


let e = "Hello World" ; 

console.log(e.length) ; 

console.log("-----------------") ; 

/*
Accessing Charcters in String 
Note :  We cannot access elements using negative indexing
*/

let letter = e[0] ;  // Using square brackets

console.log(letter) ;

letter = e.charAt( e.length - 1 ) ; // Using charAt method

console.log(letter)

console.log("-----------------") ; 

/*  Methods in String 

1. slice(start,end) - extracts the mentioned sub-string and accepts neagtive indexing also

Note : if end is not mentioned will return the values upto the end of string

2. indexOf(subString) - returns the first occurence or  -1 if not found

3. lastIndexOf(subString) - returns the last occurence or  -1 if not found

4. include(subString) - return boolean whether is it a sub-string or not 

5. startsWith(subString)  and endsWith(subString)

6. replace(old ,new) - to repalce first occurence

7. replaceAll(old,new) - to replace all occurence

7. split(delimter) - returns the array of strings 
 
Note : None of this will make in-place changes 

*/ 

let subString = e.slice(-5) ; 

console.log(subString) ;  // World

console.log( e.indexOf('1') ) ; // - 1

console.log( e.includes("ello")) ; // true

console.log(e.replaceAll('l','5')) ; // "He55o Wor5d"

console.log(e.split(" ")) // ['Hello', 'World']
