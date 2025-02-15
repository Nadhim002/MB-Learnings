// Simulating an asynchronous operation with setTimeout
function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        const data = "Some data from server";
        callback(data); // Call the callback function with the result
    }, 2000); // Simulate a 2-second delay
}

// Callback function to handle the data
function handleData(data) {
    console.log("Data received:", data);
}

// Initiate the fetchData operation and pass the handleData callback
fetchData(handleData);
console.log("This will print before the data is fetched.");
