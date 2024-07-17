// Non Primitive Data Type (Heap)

// Array

let Array1 = ["1","2","3", {List: ["Maaz", "KASHIF"]}]
// console.log(Array1[3].List);

// oBJECT 

let Car = {
    name: "supra",
    model: "2024"
}

let Car2 = Car

Car2.name = "Hello"

console.log("This is Car 1", Car);
console.log("This is car 2", Car2);

// Function


function Function() {
    for (let i = 0; i < 6; i++) {
        console.log(i);
        
    }
}

// Function();