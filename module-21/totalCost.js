// const products=[
//     {name: 'Laptop', price: 60000},
//     {name: 'Mobile', price: 15000},
//     {name: 'Shirt', price: 800}
// ]

// let totalPrice= 0;
// for (const product of products){
//     totalPrice= totalPrice+product.price;
// }

// console.log(totalPrice)


/* total with product qty */
const products=[
    {name: 'Laptop', price: 60000, quantity: 1},
    {name: 'Mobile', price: 15000, quantity: 2},
    {name: 'Shirt', price: 800, quantity: 9 } 
]


let totalPrice= 0;
for (const product of products){
    const productPrice = product.price*product.quantity;
    totalPrice= totalPrice+productPrice;
}

console.log(totalPrice)



