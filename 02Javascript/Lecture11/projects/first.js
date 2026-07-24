// const { createElement } = require("react");

const users = [
  {
    name: "Aarav Sharma",
    age: 24,
    photo: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Priya Verma",
    age: 22,
    photo: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Rahul Mehta",
    age: 26,
    photo: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "Sneha Kapoor",
    age: 23,
    photo: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    name: "Karan Malhotra",
    age: 28,
    photo: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    name: "Ananya Singh",
    age: 21,
    photo: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    name: "Rohan Gupta",
    age: 25,
    photo: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    name: "Neha Joshi",
    age: 27,
    photo: "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    name: "Aditya Raj",
    age: 24,
    photo: "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    name: "Isha Agarwal",
    age: 22,
    photo: "https://randomuser.me/api/portraits/women/10.jpg"
  }
];


// <div>
  //use any kind of loop 
// x : {
  // name: "Aarav Sharma",
  // age: 24,
  // photo: "https://randomuser.me/api/portraits/men/1.jpg"
// }
//</div> 





// const root = document.getElementById('root');
// users.forEach((x)=>{
//   const name = document.createElement('h2')
//   name.textContent = x.name;
//   const age = document.createElement('p');
//   age.textContent = `Age: ${x.age}`;

//   const imgx = document.createElement('img');
//   imgx.src = x.photo;


// const card = document.createElement('div');
// card.append(imgx,name,age);

// //put above card in troot ellement 

// root.append(card);
// })



//for more optimization 
const arr = [];
const root = document.getElementById('root');
users.forEach((x)=>{
  const name = document.createElement('h2')
  name.textContent = x.name;
  const age = document.createElement('p');
  age.textContent = `Age: ${x.age}`;

  const imgx = document.createElement('img');
  imgx.src = x.photo;


const card = document.createElement('div');
card.append(imgx,name,age);

//put above card in troot ellement 

arr .push(card);
})

root.append(...arr);

