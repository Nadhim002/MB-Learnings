const fs = require("fs");


// asynchronous way
fs.readFile("./file.text", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// Synchronous way
console.log(fs.readFileSync("./file.text", "utf-8"))

/*
    Folder structure:
        ├── problem1.js
        ├── problem2.js
        └── test
            ├── testProblem1.js
            └── testProblem2.js
*/

const createDirectories = [""]

fs.mkdir( "./")