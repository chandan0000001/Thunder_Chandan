async function github(number=20) {
    const response = await  fetch (`https://api.github.com/users?per_page=${number}`);
    const data = await response.json();

const root = document.getElementById("root");
root.textContent="";//it clear the old data 

    for(const user of data){
        //div create image hoga name hoga
        const container = document.createElement('div')
        container.style.textAlign = "center";
        container.style.padding = "10px";

        const img = document.createElement('img');
        img.src = user.avatar_url;
        img.style.height = "200px";
        img.style.width ="200px";

        const name = document.createElement('p');
        name.textContent = user.login;

        container.append(img,name);
        root.append(container);
    }
}
github();

const search =  document.querySelector('button');
const inp = document.querySelector('input');

//for making dynamic 
inp.addEventListener('input' ,()=>{
    const number = Number(inp.value);
    github(number);
})


search.addEventListener('click' , ()=>{
    // const number = Number(inp.value);
    // github(number);
})