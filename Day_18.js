// Scope Local and Global Scope

// var c = 200

let a =200

if (true){
    let a =10
    const b = 20

    console.log("Innner",a);
    // var c = 30
}


console.log("Outter", a);
// console.log(b);
// console.log(c);