### **Detailed Explanation with Examples**

### **1. SyntaxError**
Occurs when the JavaScript engine fails to parse the code due to invalid syntax.

#### 🔴 **Example of SyntaxError:**
```js
// Missing closing parenthesis
console.log("Hello World";  
```
✅ **Fix:**
```js
console.log("Hello World");
```

#### 🔴 **Incorrect Use of Reserved Keywords**
```js
var let = 10; // ❌ 'let' is a reserved keyword
```

✅ **Fix:**
```js
var myVar = 10; // ✅ Correct variable declaration
```

---

### **2. ReferenceError**
Happens when a variable or function is used before it is declared.

#### 🔴 **Example of ReferenceError:**
```js
console.log(a); // ❌ ReferenceError: a is not defined
```
✅ **Fix:**
```js
let a = 10;
console.log(a); // ✅ Correct
```

#### 🔴 **Using `let` or `const` Before Declaration (TDZ)**
```js
console.log(x); // ❌ ReferenceError: Cannot access 'x' before initialization
let x = 5;
```
✅ **Fix:**
```js
let x = 5;
console.log(x); // ✅ Works fine
```

---

### **3. TypeError**
Occurs when an operation is performed on an incorrect data type.

#### 🔴 **Example of TypeError:**
```js
let num = 10;
num.toUpperCase(); // ❌ TypeError: num.toUpperCase is not a function
```
✅ **Fix:**
```js
let str = "hello";
console.log(str.toUpperCase()); // ✅ Works fine
```

#### 🔴 **Calling a Non-Function**
```js
let obj = {};
obj(); // ❌ TypeError: obj is not a function
```
✅ **Fix:**
```js
let func = function() { console.log("I am a function!"); };
func(); // ✅ Works fine
```

---

### **Conclusion**
- **SyntaxError** → Issues in code structure (parsing fails).
- **ReferenceError** → Accessing undeclared or uninitialized variables.
- **TypeError** → Performing an invalid operation on the wrong type.

Would you like more in-depth debugging strategies for these errors? 🚀