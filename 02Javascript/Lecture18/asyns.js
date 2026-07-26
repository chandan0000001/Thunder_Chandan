// async function greet( ) {
//     //async fun always return promise 
//     return "Chandan";
//     return {name:"Chandan",age:13}
// }
// console.log(greet()) //Promise { 'Chandan' }
// //consume promise 
// const p1 = greet();
// p1.then((res)=>{
//     console.log(res); //Chandan
// })


async function github() {

    try {
         const response = await fetch("https://api.github.com/users?per_page=20");
         if(!response.ok){
            throw new Error("Unable to fatch data");
         }
    const data = await response.json();
    console.log(data);
     }
      catch(error){
    console.log(error.message)
      }
    }
   

github();