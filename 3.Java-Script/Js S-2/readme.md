### **Detailed Explanation**  

#### **1. Using an `async` function with a callback**
- When calling an `async` function, you can pass a callback function to handle the result once the `await` operation is done.
- Example:
  ```js
  async function fetchData(url, callback) {
      let response = await fetch(url);
      let data = await response.json();
      callback(data);
  }
  
  fetchData('https://api.example.com/data', (result) => {
      console.log(result);
  });
  ```
- Here, `fetchData` fetches data asynchronously and calls `callback(data)` when done.

#### **2. Sequential execution using callbacks**
- Callbacks can be used to ensure one task is completed before the next starts.
- Example:
  ```js
  function step1(next) {
      console.log('Step 1');
      next();
  }

  function step2(next) {
      console.log('Step 2');
      next();
  }

  function step3() {
      console.log('Step 3');
  }

  step1(() => step2(() => step3()));
  ```
- `step1` runs first, then `step2`, then `step3`.

#### **3. Parallel execution using callbacks**
- To execute multiple tasks in parallel, simply call them without nesting.
- Example:
  ```js
  function task1(callback) {
      setTimeout(() => {
          console.log("Task 1 Done");
          callback();
      }, 1000);
  }

  function task2(callback) {
      setTimeout(() => {
          console.log("Task 2 Done");
          callback();
      }, 500);
  }

  task1(() => console.log("Task 1 Completed"));
  task2(() => console.log("Task 2 Completed"));
  ```
- `task2` completes first because of the shorter timeout.

#### **4. Callback Hell**
- Too many nested callbacks make the code unreadable and unmanageable.
- Example:
  ```js
  function step1(callback) {
      setTimeout(() => {
          console.log("Step 1");
          callback();
      }, 1000);
  }

  function step2(callback) {
      setTimeout(() => {
          console.log("Step 2");
          callback();
      }, 1000);
  }

  function step3(callback) {
      setTimeout(() => {
          console.log("Step 3");
          callback();
      }, 1000);
  }

  step1(() => {
      step2(() => {
          step3(() => {
              console.log("All steps done");
          });
      });
  });
  ```
- This deeply nested structure is difficult to debug and maintain.

#### **5. Inversion of Control**
- When using callbacks, the control of execution is handed over to the function that executes the callback.
- Example:
  ```js
  function fetchData(callback) {
      setTimeout(() => {
          let error = false;
          if (!error) callback("Data received");
          else console.error("Error occurred");
      }, 1000);
  }

  fetchData((data) => console.log(data));
  ```
- If `fetchData` fails, there's no direct way for the caller to handle errors efficiently.

---

### **How to Avoid Callback Hell?**
- **Use Promises:** Instead of callbacks, use `.then()` and `.catch()`.
- **Use Async/Await:** Makes code cleaner and easier to read.
- **Use Named Functions:** Instead of inline callbacks, define functions separately.

Would you like examples on how to rewrite callback-based code using Promises or `async/await`?