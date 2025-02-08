// Hoisting in JavaScript: Detailed Explanation and Examples

// 1. Variable Hoisting with 'var'
// -------------------------------
console.log(x); // Outputs: undefined (not an error!)
var x = 5;
// Conceptually interpreted as:
// var x;
// console.log(x);
// x = 5;

// 2. Let and Const Hoisting (Temporal Dead Zone)
// ---------------------------------------------
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

const z = 15;
// console.log(z); // Also in Temporal Dead Zone

// 3. Function Declaration Hoisting
// -------------------------------
// Fully hoisted - can be called before declaration
sayHello(); // Works! "Hello, World!"
function sayHello() {
    console.log("Hello, World!");
}

// 4. Function Expression Hoisting
// ------------------------------
// Does NOT work with function expressions
// greet(); // TypeError: greet is not a function
var greet = function() {
    console.log("Greetings!");
};

// 5. Complex Hoisting Scenario
// ---------------------------
function complexHoistingExample() {
    console.log(a); // undefined
    console.log(b); // ReferenceError
    
    var a = 1;
    let b = 2;
}

// 6. Hoisting with Multiple Declarations
// -------------------------------------
var value = 1;
function hoistingDemo() {
    console.log(value); // undefined (local var declaration takes precedence)
    var value = 2;
    console.log(value); // 2
}

// 7. Class Hoisting
// ----------------
// Classes are not hoisted
// const MyClass = class { ... }
// const instance = new MyClass(); // Must be declared before use

// 8. Real-World Hoisting Behavior Demonstration
function demonstrateHoisting() {
    // Variable declarations are hoisted to the top of their scope
    console.log(x); // undefined
    var x = 100;
    
    // Function declarations are fully hoisted
    function innerFunction() {
        console.log("I am hoisted!");
    }
    
    innerFunction(); // Works perfectly
}

// 9. Hoisting Priority
// -------------------
var duplicate = "Global";
function hoistingPriority() {
    console.log(duplicate); // undefined
    var duplicate = "Local";
    console.log(duplicate); // "Local"
}

// 10. Best Practices to Avoid Hoisting Confusion
// --------------------------------------------
// a) Always declare variables at the top of their scope
// b) Use 'let' and 'const' instead of 'var'
// c) Avoid relying on hoisting behavior
function recommendedPractice() {
    let x = 10; // Declare first
    // Use x
    console.log(x);
}