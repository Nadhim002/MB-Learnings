let output ; 

//depreceated one 
output = document.all

// We can acess elements by index , similar to array in JS
output = document.all.length

// Will give the whole html
output = document.documentElement

// to have only the body
output = document.body

// To have childrens of given tag
output = document.body.children

// to get the domain's ip
output = document.domain
 
// to get the collection of forms
output = document.forms

// Changind ID of the form
document.forms[0]["id"] = "pee-id" 
document.forms[0].className = "pee-class" 

// To get the classes of the form
output = document.forms[0].classList

console.log(output)