Let me explain the key differences between `var`, `let`, and `const` in JavaScript in comprehensive detail.

# Scope and Hoisting Behavior

## var's Function Scope
`var` is function-scoped, meaning it's only limited by function boundaries:

```javascript
function varDemo() {
    if (true) {
        var x = "hello";
    }
    console.log(x); // Prints "hello" because var ignores block scope
}

// Another example showing var's function scope
function counter() {
    for (var i = 0; i < 3; i++) {
        // i is accessible here
    }
    console.log(i); // i is still accessible here! Prints 3
}
```

## let and const's Block Scope
Both `let` and `const` are block-scoped, meaning they're limited by any code block (functions, if statements, loops, etc.):

```javascript
function letConstDemo() {
    if (true) {
        let x = "hello";
        const y = "world";
    }
    // console.log(x); // ReferenceError: x is not defined
    // console.log(y); // ReferenceError: y is not defined
    
    for (let i = 0; i < 3; i++) {
        // i is only accessible in this block
    }
    // console.log(i); // ReferenceError: i is not defined
}
```

# Hoisting Differences

## var Hoisting
`var` declarations are hoisted to the top of their scope, but not their initializations:

```javascript
console.log(hoistedVar); // undefined (not an error!)
var hoistedVar = "I'm hoisted";

// What's actually happening behind the scenes:
// var hoistedVar;              // Declaration is hoisted
// console.log(hoistedVar);     // Prints undefined
// hoistedVar = "I'm hoisted";  // Assignment stays where it is
```

## let and const Hoisting and the Temporal Dead Zone (TDZ)
While `let` and `const` are technically hoisted, they enter a "Temporal Dead Zone" until their declaration:

```javascript
// This is the TDZ for x
// console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 1; // TDZ ends here

// Same applies for const
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
const y = 2;
```

# Reassignment and Mutation

## var Reassignment
Variables declared with `var` can be both reassigned and redeclared:

```javascript
var count = 1;
count = 2; // Reassignment allowed
var count = 3; // Redeclaration allowed
```

## let Reassignment
`let` allows reassignment but not redeclaration in the same scope:

```javascript
let count = 1;
count = 2; // Reassignment allowed
// let count = 3; // Error: count has already been declared
```

## const Behavior
`const` prevents reassignment but doesn't make objects immutable:

```javascript
const user = {
    name: "John"
};

// Can't reassign the variable itself
// user = {}; // TypeError: Assignment to constant variable

// But can modify object properties
user.name = "Jane"; // This works!

// Same with arrays
const numbers = [1, 2, 3];
numbers.push(4); // This works!
// numbers = [1, 2, 3, 4]; // This doesn't work!
```

# Global Object Behavior

The three declarations behave differently when used in the global scope:

```javascript
var globalVar = "I'm global";
let globalLet = "Me too";
const globalConst = "Me three";

// In a browser:
console.log(window.globalVar); // "I'm global"
console.log(window.globalLet); // undefined
console.log(window.globalConst); // undefined
```

# Best Practices and Modern Usage

In modern JavaScript, here's when to use each:

1. `const` should be your default choice. Use it for:
   ```javascript
   const API_URL = "https://api.example.com";
   const fetchData = async () => { /* ... */ };
   const config = { /* ... */ };
   ```

2. `let` when you need to reassign values:
   ```javascript
   let counter = 0;
   while (condition) {
       counter++;
   }
   ```

3. `var` is generally avoided in modern code due to its confusing scoping rules and potential for bugs.

Here's a practical example combining all concepts:

```javascript
function userManager() {
    const MAX_USERS = 100; // Can't be changed
    let currentUserCount = 0; // Needs to be reassigned
    
    return {
        addUser(user) {
            if (currentUserCount < MAX_USERS) {
                currentUserCount++;
                console.log(`User added. Total: ${currentUserCount}`);
            } else {
                console.log(`Can't add more users. Limit: ${MAX_USERS}`);
            }
        }
    };
}

const manager = userManager();
manager.addUser({}); // "User added. Total: 1"
```

Would you like me to elaborate on any of these aspects or provide more specific examples?