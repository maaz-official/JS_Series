// Array

// let Computer = ["Computer", "Labs", "Javascript"]
// console.log(Computer);

// dEEP  Copy

// let Computer = ["Computer", "Labs", "Javascript",{List: ["Java", "PYT"]}]

// let Computer2 = JSON.parse(JSON.stringify(Computer))

// Computer2[3].List = ["Maaz"]

// console.log(Computer);
// console.log(Computer2);

// Shallow Copy

let Computer = ["Computer", "Labs", "Javascript",{List: ["Java", "PYT"]}]

let Computer2 = Array.from(Computer)

Computer2[3].List = ["Maaz", "Lazzy Code"]


console.log(Computer2);
console.log(Computer);