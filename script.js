// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 }

// // Add event listener to generate button
// 

generateBtn.addEventListener("click", () => {

let length = +prompt("How long do you want you password?");
let upperCaseSelect = confirm("Do you want to include Upper Case letters?");
let lowerCaseSelect = confirm("Do you want to include Lower Case letters?");
let numberSelect =confirm("Do you want to include Numbers?");
let symbolSelect = confirm("Do you want to include Symbols?");

passwordGen(upperCaseSelect, lowerCaseSelect, numberSelect, symbolSelect, length)
});

//genoator funtions 

const randomFunction = {
  upper: getRandomUpperCase(),
  lower: getRandomLowerCase(),
  numbers: getRandomNumber(),
  symbol: getRandomSymbol()
} 

function passwordGen(upper, lower, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = upper + lower + number + symbol;

  const countArray =[{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

  if(typesCount === 0) {
    return alert("Please confirm one or more items");
  }

  for(let i =0; i < length; i +=typesCount) {
    countArray.forEach(type => {
      const functionName = Object.keys(type)[0];
      console.log('functionName: ', functionName)
      generatedPassword += randomFunction[functionName];
    });
  }
console.log(generatedPassword)
}


function getRandomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
  return symbols[Math.floor(Math.random() * symbols.length)];
}
