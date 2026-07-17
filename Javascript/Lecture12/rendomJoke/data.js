const body = document.querySelector('body')
body.style.backgroundColor="black";
body.style.color='khaki';
body.style.height="100vh";
body.style.justifyContent="center"; //text ko center pe lo
body.style.display="flex";
body.style.margin='0';



//making ceter to the H2
const h2 = document.querySelector('h2');
h2.style.padding="256px"
h2.style.textAlign="center";
h2.style.alignItems="center";
h2.style.height="120px";
h2.style.width="2000px";



//adjust the button 
const bt = document.querySelector('button');
bt.style.backgroundColor ="yellow";
bt.style.color="brown"
bt.style.fontSize="30px"
bt.style.padding="29px"
bt.style.fontWeight="bold";
bt.style.marginTop="20px"
bt.style.borderRadius="9px";
// First Homework: Random joke generator

//data of jokes 
const jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "I told my computer I needed a break, and it said no problem — it froze.",
  "Why was JavaScript sad? Because it didn't know how to null its feelings.",
  "Why do developers hate nature? It has too many bugs.",
  "Why did the function break up? Because it had too many arguments.",
  "CSS is like magic, until you try to center a div.",
  "I would tell you a UDP joke, but you might not get it.",
  "Why did the array go to therapy? It had too many issues.",
  "Debugging: being the detective in a crime movie where you are also the murderer.",
  "Why did the programmer quit his job? Because he didn't get arrays."
];


//now adjust the action thngs 
const btac = document.querySelector("button")
const h2ac = document.querySelector("h2");
btac.addEventListener('click' , ()=>{
  const index = Math.floor(Math.random()*jokes.length)
h2ac.textContent = jokes[index];
})


//we have index 0 to 9
