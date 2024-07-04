// Scope level and mini hoisting in javascript 

function Website() {
    const Maaz = "Maaz"
    function one() {
        const two = "1"
        console.log(Maaz);

    }
    // console.log(two);
    one()

}
Website()


if (true) {
    const Website1 = "Maaz"
    if (Website1 === "Maaz") {
        const Website2 = " Khan"
        console.log(Website1 + Website2);
    }
    // console.log(Website2);
}
// console.log(Website1);

Maaz1()
function Maaz1(num) {
    return num+1
}



const Maaz2 = function(num) {
    return num+2
}

Maaz2()
