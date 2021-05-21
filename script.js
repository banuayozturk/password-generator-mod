// Assignment Code
var generateBtn = document.querySelector("#generate");

//Character Types and Lenght Asked and Validated
function getRandomLower(){
  let isExecuted = confirm("Do you want Lowercase character in your password?");
  return isExecuted;
}

function getRandomUpper(){
  let isExecuted = confirm("Do you want Uppercase character in your password?");
  return isExecuted;
}

function getRandomNumbers(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getRandomNumbers());

function getSpecialCharacter(){
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getSpecialCharacter());

function getPasswordLength(){
  var length = prompt("Please enter a number between 8 and 128!");
  if(length < 8 || length > 128){
    alert("alert");
    getPasswordLength();
  }
  return length;
}

function generatePassword(){
  //Code for user choices and random calculations
  getPasswordLength();
  let isExecuted = confirm("Do you want lowercase letters");
  console.log(isExecuted);
  let isExecuted1 = confirm("Do you want uppercase letters?");
  console.log(isExecuted1);
  let isExecuted2 = confirm("Do you want numbers?");
  console.log(isExecuted2);
  let isExecuted3 = confirm("Do you want special characters?");
  console.log(isExecuted3);

  const typesCount = isExecuted + isExecuted1 + isExecuted2 + isExecuted3;
  console.log(typesCount);
  const typesArr = [{isExecuted}, {isExecuted1}, {isExecuted2}, {isExecuted3}]
  console.log(typesArr);

  if(isExecuted == true){
     console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
   }
   else if(isExecuted1 == true){
     console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 65));
   }
  return password;
}

// Code for Writing Password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

