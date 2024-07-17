// Function

// console.log("h");
// console.log("h");
// console.log("h");
// console.log("h");
// console.log("h");

// function Repeating() {
// console.log("h");
// console.log("h");
// console.log("h");
// console.log("h");
// console.log("h");
// }

// Repeating()



function addTwoNumbers(Number1, Number2){ //Parameters
    // console.log(Number1 + Number2);
    return(Number1 + Number2); 

}

// addTwoNumbers(3, 5)
// addTwoNumbers(3, "5")
// addTwoNumbers(3, null) //Arguments

// After return the code will not accepting any manipulation
// const maaz = addTwoNumbers(3, 5)
// console.log(maaz);

// with return
// const maaz = addTwoNumbers(3, 5)
// console.log("Result", maaz);


// How Parameters are taken

// function addingNumbers(username = "sam"){ // for default value
//     if (!username) {
//         console.log("PLease try again");
//         return  //After return no more code will execute
//     }
//     return (`${username} Just Logged In`)
// }

// console.log(addingNumbers());



function addingNumbers(username) {
    if (username === undefined){
        return `Please Enter User Name Now`
    }
    return `${username} is just Loggedin`
}

console.log(addingNumbers("Maaz"))