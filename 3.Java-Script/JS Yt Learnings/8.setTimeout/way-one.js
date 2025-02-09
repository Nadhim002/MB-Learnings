function outer() {
  for (var i = 0; i < 6; i++) {
    setTimeout(() => console.log(i), i * 1000);
  }
}

outer();

// It will not work bcoz the refernce of i will change overtime 

/*
Wrong Output 

6
6
6
6
6
6

*/
