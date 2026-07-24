const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Book", category: "Books", price: 30, inStock: true },
    { id: 3, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
    { id: 4, name: "Headphones", category: "Electronics", price: 200, inStock: true }
  ];


// find() ka syntax >First matching element return karta hai. and ye chatate he mujhe ek object dedeooo 
// array.find(callback)



  const testfind = products.find(producty => producty.name === "Laptop");
  console.log(testfind);
  const coffeeMaker = products.find(product => product.name === "Coffee Maker");
console.log(coffeeMaker); // The coffee maker object


// .some(): Check karta hai ki kam se kam ek element condition satisfy karta hai ya nahi. agar ek match ,millgaya to true warna false 
//arr.some(callback)


// Laptop        true   true === false  = false
// Book          true   true === fasle = false
// Coffee Maker  false  false === fasle = true 
// Headphones    true

const hasoutOfStock = products.some(productz => productz.inStock ===false);
console.log(hasoutOfStock); //so there is one element is out of stock from the database 


//.every() : Checks if all elements in the array pass the test. Returns true or false. It stops as soon as it finds one that doesn't pass.

const allAreInStock = products.every(producte => producte.inStock === true);
console.log(allAreInStock);