### **Comparison: Function Statement vs Function Expression vs Function Declaration in JavaScript**

| Feature              | Function Statement | Function Expression | Function Declaration |
|----------------------|-------------------|--------------------|---------------------|
| **Definition**       | A named function defined using the `function` keyword | A function assigned to a variable | A named function, hoisted to the top |
| **Hoisting**        | Yes (fully hoisted) | No (only variable is hoisted, not function) | Yes (fully hoisted) |
| **Can be Anonymous?** | No | Yes | No |
| **Usage in Conditional Blocks?** | No (ES5) | Yes | No (ES5) |
| **Can be Immediately Invoked (IIFE)?** | No | Yes | No |

---

### **Detailed Explanation**

1. **Function Statement (Function Declaration)**
   - A **function statement** is a standard way of defining a function in JavaScript.
   - It gets **hoisted**, meaning it can be used before its actual declaration in the code.

   ```js
   function greet() {
       console.log("Hello!");
   }
   greet(); // ✅ Works fine because it's hoisted
   ```

   - Since it's hoisted, it can be called **before** it's defined.

   ```js
   sayHello(); // ✅ Works because of hoisting

   function sayHello() {
       console.log("Hello!");
   }
   ```

---

2. **Function Expression**
   - A **function expression** defines a function and assigns it to a variable.
   - It can be **anonymous** or **named**.
   - It **isn't hoisted** like function statements.

   ```js
   const greet = function() {
       console.log("Hello!");
   };
   greet(); // ✅ Works fine

   // ❌ This will throw an error because it's not hoisted
   greetMe();
   var greetMe = function() {
       console.log("Hi!");
   };
   ```

   - **Named Function Expression:**
     ```js
     const greet = function greetFunc() {
         console.log("Hello!");
     };
     greet();      // ✅ Works
     greetFunc();  // ❌ Error: greetFunc is not defined outside
     ```

   - Function expressions are useful when passing functions as arguments.

---

3. **Function Declaration**
   - Function declarations are the same as function statements.
   - They are **hoisted** to the top.

   ```js
   function sum(a, b) {
       return a + b;
   }
   console.log(sum(2, 3)); // ✅ Works
   ```

---

### **Key Takeaways**
1. **Function Declarations (Statements) are hoisted** → You can call them before they appear in the code.
2. **Function Expressions are not hoisted** → They behave like variables and must be defined before use.
3. **Function Expressions can be anonymous**, whereas **Function Declarations must have a name**.
