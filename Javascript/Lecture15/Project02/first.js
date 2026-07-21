const inp = document.getElementById('cityInput');
const search = document.getElementById('weatherButton')
search.addEventListener('click', async()=>{
    const city = inp.value;
    if(city==="") return; //handle weather empty value

    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=23b6c1b0502a4d8a872131450262007&q=${city}&aqi=no`
    );
    const data = await response.json();
    console.log(response.status);
    console.log(data);
    const p = document.querySelector('p')
    p.textContent = `Temperature of ${city} is ${data.current.temp_c} and weather Forecast ${data.current.condition.text}`
})





// 23b6c1b0502a4d8a872131450262007
// http://api.weatherapi.com/v1/current.json?key=23b6c1b0502a4d8a872131450262007&q=London&aqi=no
