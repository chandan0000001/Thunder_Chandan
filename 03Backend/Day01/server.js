// https://api.frankfurter.dev/v1/currencies


const data = {
    "AUD": "Australian Dollar",
    "BRL": "Brazilian Real",
    "CAD": "Canadian Dollar",
    "CHF": "Swiss Franc",
    "CNY": "Chinese Renminbi Yuan",
    "CZK": "Czech Koruna",
    "DKK": "Danish Krone",
    "EUR": "Euro",
    "GBP": "British Pound",
    "HKD": "Hong Kong Dollar",
    "HUF": "Hungarian Forint",
    "IDR": "Indonesian Rupiah",
    "ILS": "Israeli New Shekel",
    "INR": "Indian Rupee",
    "ISK": "Icelandic Króna",
    "JPY": "Japanese Yen",
    "KRW": "South Korean Won",
    "MXN": "Mexican Peso",
    "MYR": "Malaysian Ringgit",
    "NOK": "Norwegian Krone",
    "NZD": "New Zealand Dollar",
    "PHP": "Philippine Peso",
    "PLN": "Polish Złoty",
    "RON": "Romanian Leu",
    "SEK": "Swedish Krona",
    "SGD": "Singapore Dollar",
    "THB": "Thai Baht",
    "TRY": "Turkish Lira",
    "USD": "United States Dollar",
    "ZAR": "South African Rand"
  }

const http = require('http');
const server = http.createServer((req,res)=>{
    // res.end("Hello chandan"); //it print on the website "Hello chandan"
    const currency = req.url.slice(1); //IND AUS
    if(data[currency]){
        res.end(JSON.stringify(
            {
                code: currency,
                name:data[currency]
            }
        ))

    }
    else{
        res.end(JSON.stringify({
         error:"not found" 
        }))
        
    }

});

server.listen(3000,()=>{
    console.log("i am listening at port 3000")
})