// get value from input in fahrenheit
// value is in number, wrap in ParseInt method to always have value in number.

const tempInFah = ParseInt(document.getElementById("tempInFahrenheit").value);
console.log(typeof value);

// convert to celcius
const tempInCel =(tempInFah - 32) * 5/9;
console.log(tempInCel)

let convertingBtn= document.getElementById("convertBtn");
let resultDisplayed = document.getElementById("resultInCelcius")

convertingBtn.addEventListener('click', convertingBtn);

// function convert(){
//     let result=0;
//     if(con)
// }