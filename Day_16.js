// Rest and Spread Operator

// case 1 if we build shopping cart and adding unlimited numbers of items
// then we use spread and rest operator

// function CartforShopping(...num1) {
//     console.log(num1);
// }

// CartforShopping(12, 14,15)

function CartforShopping(value1, value2, ...num1) {
    console.log(num1);
}

CartforShopping(12, 14,15)
