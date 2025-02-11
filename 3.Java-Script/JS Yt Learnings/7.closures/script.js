function limitFunctionCallCount(cb, n) {
  return function () {
    if (n != 0) {
      n--;

      return cb();
    } else {
      console.log("Max Limit Reached");

      return;
    }
  };
}

const a = limitFunctionCallCount(() => console.log("Bello"), 3);

a();
a();
a();

a();
a();
