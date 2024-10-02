/*
    The purpose of an invontory system is to automate 
    the process of logging data on a specific store, 
    usually related to its logistics.
    It helps in identifying various information, like stock levels,
    and aids the management in making meaningful decisions.
*/

// init store details - (name, location, capacity)
const storeName = "Tech Town"; 
const storeLocation = "Netherlands";
const storeCapacity = 999;

// init store products 
const products = [ 
    {name: "Laptop", price: 18999, quantity: 50 },    
    {name: "Smartphone", price: 9999, quantity: 100 },
    {name: "Tablet", price: 12999, quantity: 80 }    
]

// calculate total value of the products in the inventory
let totalInventoryValue = 0; 
products.forEach(product => {
    totalInventoryValue += (product.price * product.quantity)
});

// adding 10 additional laptops
products[0].quantity += 10; 

// finding the most expensive product by comaparing prices
const mostExpensiveProduct = products.reduce((max, product) => {
    return product.price > max.price? product : max;
});

// display inventory infos
console.log(`Store Name: ${storeName}`);
console.log(`Store Location: ${storeLocation}`);
console.log(`Total Number of Products: ${storeCapacity}`);
console.log(`Total Inventory Value: ${totalInventoryValue}`);
console.log(`Updated Laptop Quantity: ${products[0].quantity}`);
console.log(`Most Expensive Product: ${mostExpensiveProduct.name}`);

// adding a new product
products.push({name: "Monitor", price: 20000, quantity: 10});