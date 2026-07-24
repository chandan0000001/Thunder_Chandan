


// const newElement = document.createElement('h2')
// newElement.textContent = "I am Dipsa";
// newElement.style.backgroundColor = "white";
// // console.log(newElement);

// // h1 from html 
// const oldElement =  document.getElementById('first');
// // oldElement.after(newElement);
// oldElement.before(newElement);


// const element2 = document.createElement('h3');
// element2.textContent = "Hello Anata Sahu";
// element2.style.backgroundColor = "orange";
// newElement.after(element2);

// const element3 = document.createElement('h4');
// element3.textContent = "Shubradeet Sabat";
// element3.style.color= "yellow";
// element3.style.backgroundImage = "url('img.jpg')"
// element3.style.backgroundSize = "cover";
// element3.style.backgroundPosition = "center";
// element3.style.backgroundRepeat = "no-repeat";
// element2.after(element3);



// const newElementx = document.createElement('h3');
// newElementx.textContent = "Hello bhaii kesse hoo ? kahi parr ghumne chalooyo ge kya ? ";
// newElementx.style.color='red';
// newElementx.id = "third";
// // newElementx.className = "Mohit";
// // newElementx.className += " Rohit";
// //for btetr approach 
// newElementx.classList.add("Chandan");
// newElementx.classList.add("Kiran");
// oldElement.after(newElementx);
// newElementx.setAttribute('Deepa', 'Kartik')
// console.log(newElementx);
// console.log(newElementx.getAttribute('id'));
// console.log(newElementx.getAttribute('class'));


//slesecrt unodered list 
// const ul = document.querySelector('ul');

// const ulx = document.getElementById('ul');
// const li = document.createElement('li');
// li.textContent= "Chandan";
// // ulx andar attach karne ke liye 
// ulx.append(li);

// const li1 = document.createElement('li');
// li1.textContent= "Rohit";
// ulx.append(li1);


// const li2 = document.createElement('li');
// li2.textContent= "Dipsa";
// ulx.prepend(li2);  //beginning me add karta hai.

// const li5 = document.createElement('li');
// li5.textContent = "Sanjna";
// li.after(li5);






//come datta from the backedn 
const foods = ["Milk" , "Orange" , "Samosa" , "Egg" , "Pottao"];


const ul = document.getElementById('ul');
//one by one sending to in the DOM -> getting lag so send it by patch for optimization   //For now jus imagine all elements are pushed into the array  array ko ul pe andar dalldo 
const fra = document.createDocumentFragment();
for( x of foods) {
    // console.log(x);
    const li = document.createElement('li');
    li.textContent=x;
    // ul.append(li);
    //sabhii ko fragment ke andar dalo 
    fra.append(li);
}
//fragment pe jo he usse ul pe dalo  
ul.append(fra);