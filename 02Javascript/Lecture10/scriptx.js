const mainContainer = document.getElementById('main-container');
mainContainer.style.border = '2px solid red'; // Puts a red border around the main div

const itemList = document.getElementById('iteam_list');
console.log(itemList);

const h2x = document.getElementById('h2Type')
h2x.style.color = 'white'
h2x.style.border = '2px solid orange';

const allPara = document.getElementsByTagName('p')
console.log(allPara);
console.log(allPara.length);

const alliteam = document.getElementsByClassName('iteam');
console.log(alliteam);
console.log(alliteam.length);

//now we can talking about modern way to for querry selector 
