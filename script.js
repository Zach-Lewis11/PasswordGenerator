// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
 
 // User prompts for password criteria 
 
 // Generate the random password function 
 
 function generatePassword(){
   function userSelect(){
    let passLength = +prompt("How long do you want you password?");
    if (passLength > 26) {
      alert("Please enter a number between 8 and 26")
    } else if (passLength < 8){
      alert("Please enter a number between 8 and 26")
    } else if(isNaN(passLength)) {
      alert("Please make sure to input a Number between 8 and 26")
    } else {
    var upperCaseSelect = confirm("Do you want to include Upper Case letters?");
    var lowerCaseSelect = confirm("Do you want to include Lower Case letters?");
    var numberSelect =confirm("Do you want to include Numbers?");
    var symbolSelect = confirm("Do you want to include Symbols?");
    }
    // if (upperCaseSelect === false && lowerCaseSelect === false && numberSelect === false && symbolSelect ===false){
    //      alert("Please select one or more criteria.")
    //      }
    var myArr = [passLength, upperCaseSelect, lowerCaseSelect, numberSelect, symbolSelect];
  
    // if(upperCaseSelect === false && lowerCaseSelect === false && numberSelect === false && symbolSelect ===false){
    //   alert("Please select one or more criteria.")
    // }
  
    return myArr;
   }
   
   var myNewArr = userSelect();
   var length = myNewArr[0];
   var upperCaseSelect = myNewArr[1];
   var lowerCaseSelect = myNewArr[2];
   var numberSelect = myNewArr[3];
   var symbolSelect = myNewArr[4];
   var password = '';
   
   for(let i =0; i < length; i++) {
     
     //Array for random Characters 
     
     randomFunction = [getRandomUpperCase(), getRandomLowerCase(), getRandomNumber(), getRandomSymbol()]
     
     if (!upperCaseSelect) randomFunction[0] = null;
     if (!lowerCaseSelect) randomFunction[1] = null;
     if (!numberSelect) randomFunction[2] = null;
     if (!symbolSelect) randomFunction[3] = null;
     //need to pick a value at random from randomFunction, if null pick a diff one, and append it to password string
     while(true){
       var y = getRandomInt(4);
       if(randomFunction[y] === null){
      }
      else{
        password = password + randomFunction[y];
        break
      }
    } console.log(password)
  }
  return password
};

//picks a number integer between 0 and 3 for array index
function getRandomInt(x) {
  return Math.floor(Math.random() * x);
}
//these functions generate random characters for password

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




// var randomFunction = {
  //   upper: getRandomUpperCase(),
  //   lower: getRandomLowerCase(),
  //   numbers: getRandomNumber(),
  //   symbol: getRandomSymbol()
  //  } 
  
  
  //var myArr = [passLength, upperCaseSelect, lowerCaseSelect, numberSelect, symbolSelect];
  
  // if(typesCount === 0) {
  //   return alert("Please confirm one or more items");
  // }
  
  // function passwordGen(upper, lower, numbers, symbol, length) {
    //   let generatedPassword = '';
    //   const typesCount = upper + lower + numbers + symbol;
    
    //   const countArray =[{lower}, {upper}, {numbers}, {symbol}].filter(item => Object.values(item)[0]);
    
    // passwordGen(upperCaseSelect, lowerCaseSelect, numberSelect, symbolSelect, length)
    // });
    
    //     countArray.forEach(type => {
      //       const functionName = Object.keys(type)[0];
      //       console.log('functionName: ', functionName)
        //       generatedPassword += randomFunction[functionName];
        //     });
        
        
        //     console.log(generatedPassword)
        //   } return writePassword
        // }





  // Array backup area

   
 //  const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 //  const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 //  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
 //  const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "`", "|", ":", ";", "?", ">", "<", ",", ".", "/", "-", "="]
 

//  if(upperCaseSelect === false && lowerCaseSelect === false && numberSelect === false && symbolSelect ===false){
//   alert("Please select one or more criteria.")
//   break
// }

// generateBtn.addEventListener("click", 

// function pwdGen(length,characters){
//   var passWord = ''
//   for (var i = 0; i < length; i++){
//     passWord += characters.charAt(Math.floor(math.random() * characters.length));
//   }
//   return passWord
// }