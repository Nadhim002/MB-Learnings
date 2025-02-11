function Person(name, age) {
    this.name = name;
    this.age = age;

    let count = 0

    this.incr = function(){ count ++ 
        console.log(count)
    }
}

// Creating a new object
let person1 = new Person("John", 25);

console.log(person1.name); // Output: John
console.log(person1.age);  // Output: 25


person1.incr()