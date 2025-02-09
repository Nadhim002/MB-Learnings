## **Shadowing vs Illegal Shadowing in JavaScript**

### **1. What is Shadowing?**  
Shadowing occurs when a variable in a **local scope** (inside a function or block) has the **same name** as a variable in the **outer scope** (global or function scope). The local variable **overrides (shadows)** the outer variable within its scope.

#### **Example of Shadowing**
```js
let x = 10;  // Global scope

function test() {
    let x = 20;  // Local scope (shadows global x)
    console.log(x); // 🔹 Output: 20 (Local variable is used)
}

test();
console.log(x); // 🔹 Output: 10 (Global variable remains unchanged)
```

📌 **Key Points:**
- The outer variable is still accessible outside the inner scope.
- Shadowing only affects code inside the local scope.

---

### **2. What is Illegal Shadowing?**  
Illegal shadowing occurs when a **variable declared with `let` or `const` in a block** shadows a **variable declared with `var` in the outer scope**. This is **not allowed** in JavaScript.

#### **Example of Illegal Shadowing**
```js
let a = 100;

{
    var a = 200;  // ❌ SyntaxError: Identifier 'a' has already been declared
}


### ✅ **Fixing Illegal Shadowing**
To avoid illegal shadowing:
- Ensure both variables use `let` or `const` (which supports block scope).
- Avoid re-declaring variables in the same scope.

#### ✅ **Corrected Example**
```js
let a = 100;  // Global scope

{
    let a = 200;  // ✅ Allowed because both are block-scoped
    console.log(a); // Output: 200
}

console.log(a); // Output: 100
```

---

### **3. Shadowing with `var` is Allowed**
Shadowing is **allowed** if the outer variable is also declared with `let` or `const`, OR if both are `var`.

#### **Example of Allowed Shadowing**
```js
var b = 50;

function demo() {
    var b = 80;  // ✅ Allowed (function scope)
    console.log(b); // Output: 80
}

demo();
console.log(b); // Output: 50
```

📌 **Key Takeaways:**
- ✅ **Shadowing is valid** if both variables use the same declaration type (`let`-`let`, `var`-`var`).
- ❌ **Illegal Shadowing occurs** when `let` or `const` tries to shadow `var` inside a block.
- 🛠️ **Fix:** Use consistent variable declaration (`let` or `const`) in both scopes.
