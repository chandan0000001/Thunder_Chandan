const body = document.querySelector("body");
body.style.backgroundColor = "black"; //make the color of the page is black
body.style.color = "white"; //ensure the text is readable

// .textcontent >  Give me just the text, exactly as it is, with no HTML
// const tex = document.getElementById("description")
// console.log(tex.textContent);  //only etract text no html
// const proName = document.getElementById("product-card");
// console.log(proName.textContent);

// const dex = document.getElementById("description");
// dex.textContent = "click <a href= '#' here<a/> to win!";
// // The browser will display the literal text, not a clickable link:
// // "Click <a href='#'>here</a> to win!"





//.innerHTML Give me everything inside, including all the HTML markup.
// const dex = document.getElementById("description");
// console.log(dex.innerHTML);
// // Output: "These headphones have <strong>noise-cancelling</strong> features."
// // It includes the HTML tags as a string.
// dex.innerHTML = "Update feature: <strong>Active Noise Canceling </strong> and <em>Bluetooth 5.0</em>.";

//now comes to malicous activity 
// const dex = document.getElementById("description");
// console.log(dex.innerHTML);
// // let userInput = `<img src="./dcv.jpeg" onerror="alert('You have been hacked!')">`;
// let userInput = `<img src="x" onerror="alert('You have been hacked!')">`;
// dex.innerHTML = userInput;



// // .innerText = "Give me the text as it appears on the screen.
// const productName = document.getElementById('product-name');
// console.log(productName.innerText);
// // Output: "SMART HEADPHONES" (if CSS `text-transform: uppercase` was applied)
// // It will NOT include the text from the hidden <span> ("SALE").




// // Properties for Manipulating Attributes
// //manupulate id tag
// const card = document.getElementById('product-card');
// console.log(card.id) // product-card
// card.id = "Hua-hua-id";

// console.log(card.className); // "card featured"
// // This will OVERWRITE all existing classes.
// card.className = "card-dark-mode";
// // The element now only has the class "card-dark-mode". "featured" is gone.







// .classList = "Give me a smart toolbox for adding, removing, and checking for classes without messing up the other ones."
//add('className'): Adds a new class.
// remove('className'): Removes a class.
//toggle('className'): Adds the class if it's missing, removes it if it's present.
// contains('className'): Returns `true` or `false` if the element has the class.






// const card = document.getElementById('product-card');
// card.classList.add('in-cart');      // Adds 'in-cart'
// card.classList.remove('featured'); // Removes 'featured'

// // Toggle a 'selected' class every time a function is called
// card.classList.toggle('selected');

// if (card.classList.contains('in-cart')) {
//   console.log("This item is in the cart.");
// }









// .getAttribute() and .setAttribute() (For Any Attribute)
const card = document.getElementById('product-card');

// Add a custom data attribute
card.setAttribute('data-product-id', 'xyz-123');

// Get the value of an attribute
const productId = card.getAttribute('data-product-id');
console.log(productId); // "xyz-123"

// Remove an attribute
card.removeAttribute('class');
