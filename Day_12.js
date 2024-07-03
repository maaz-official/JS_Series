// Objects

const mySym = Symbol("key1")

let Object = {
    id: 1,
    name: "Muhammad Maaz",
    roll_no: "22pwbcw093",
    Phone_No: "03417010294",
    "Roll of model": "Model",
    // for symbol
    [mySym]: "key1"
}

// console.log(Object.name);
// console.log(Object["name"]);
// console.log(Object["Roll of model"]);
// console.log(Object[mySym]);

Object.greeting = function() {
    console.log("Hello World");
}
Object.greetingTwo = function() {
    console.log(`"Hello World", ${this.name}`);
}

console.log(Object.greetingTwo());