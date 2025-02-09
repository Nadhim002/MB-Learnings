function outer() {
  function a(i) {
    for (var i = 0; i < 6; i++) {
      setTimeout(() => console.log(i), i * 1000);
    }
  }

  a()
}

// It will work bcoz new refernce of i is passed to every time bcoz of the passing arguments

outer();
