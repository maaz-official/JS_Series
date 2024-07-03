// Array

// const Computer = ["Compter", "Maaz"];

// console.log(Computer);

// Deep Copy


// const Computer = ["Compter", {List: ["JS", "JAVA", "C++"]}];

// const Computer2 = JSON.parse(JSON.stringify(Computer))

// Computer2[1].List = ["JS1", "JAVA2"]


// console.log(Computer);
// console.log(Computer2);

// Shallow Copy

const Computer = ["Hospital", {Ward: ["Cancer", "JAVA", "C++"]}];

const Computer2 = Array.from(Computer);

Computer2[1].Ward = ["Heart", "JAVA2"]


console.log(Computer);
console.log(Computer2);
