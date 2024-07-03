// Onjects Part 2

let userName = {}

userName.Id = "1"
userName.name = "maaz"
userName.job = "MERN STACK DEVLOPER"

let Object1 = {
    email: "maaz@gmail.com",
    fullName: {
        userFullName: {
            lastName: "Khan",
            firstName: "Maaz"
        }
    }
}

// console.log(Object1.fullName.userFullName);

let users = [
    {
        id: 1,
        name: "maaz",
    },
    {
        id: 2,
        name: "maaz",
    },
    {
        id: 3,
        name: "maaz",
    },
]


console.log(Object.keys(users));  
console.log(Object.values(userName));
console.log(Object.entries(userName));


console.log(Object.hasOwnProperty("job"));