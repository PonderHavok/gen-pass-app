// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowStr = "abcdefghijklmnopqrstuvwxyz";
var lowArr = lowStr.split("");
var uppArr = lowStr.toUpperCase().split("");
var numStr = "0123456789";
var numArr = numStr.split("");
var speStr = "!@#$%^&*()_-?";
var speArr = speStr.split("");

//Functions and if's else's
function askForOptions() {
  var passLen = parseInt(
    prompt("How many characters do you want in your password?")
  );
  if (passLen < 8 || passLen > 128 || isNaN(passLen) === true) {
    alert("Please pick a valid number (between 8-128)");
    return;
  }

  var inLow = confirm("Include lowercase?");
  var inUpp = confirm("Include uppercase?");
  var inNum = confirm("Include numbers?");
  var inSpe = confirm("Include special characters?");

  var options = {
    passLen,
    inLow,
    inUpp,
    inNum,
    inSpe,
  };

  console.log(options);
  return options;
}

function generatePassword() {
  var passOpt = askForOptions();
  var superArr = [];
  var results = [];

  if (passOpt.inLow === true) {
    superArr = superArr.concat(lowArr);
    console.log(superArr);
  }
  if (passOpt.inUpp === true) {
    superArr = superArr.concat(uppArr);
    console.log(superArr);
  }
  if (passOpt.inNum === true) {
    superArr = superArr.concat(numArr);
    console.log(superArr);
  }
  if (passOpt.inSpe === true) {
    superArr = superArr.concat(speArr);
    console.log(superArr);
  }

  for (var i = 0; i < passOpt.passLen; i++) {
    var index = Math.floor(Math.random() * superArr.length);
    console.log(index);
    var digit = superArr[index];
    console.log(digit);
    results.push(digit);
  }
  console.log(results);
  return results.join("");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
