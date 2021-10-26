// Assignment code here

//pseudocode for project:
//button is clicked and series of prompts are presented
//first - length of password (between 8 and 128)
var passLength = function() {
  var length = window.prompt("Enter a length for this randomly generated password: ");
  length = parseInt(length);
  if (length >= 8 && length <= 128){
    return length;
  }
  else if (length < 8) {
    window.alert("Your password must be larger. Please enter a larger value.");
    return passLength();
  }
  else if (length > 128) {
    window.alert("Your password cannot be this long. Please enter a smaller value.");
    return passLength();
  }
  else {
    window.alert("This is not an adequate length value. Please enter a valid value.");
    return passLength();
  }
};
//second - lowercase characters
var passLower = function() {
  var lower = window.prompt("Do you want lowercase characters included? Enter Y or N: ");
  if (lower.toUpperCase() === 'Y'){
    return true;
  }
  else if (lower.toUpperCase() === 'N') {
    return false;
  }
  else {
    window.alert("Your input is invalid. Enter a valid value:");
    return passLower();
  }
};

//third - uppercase characters
var passUpper = function() {
  var upper = window.prompt("Do you want uppercase characters included? Enter Y or N: ");
  if (upper.toUpperCase() === 'Y'){
    return true;
  }
  else if (upper.toUpperCase() === 'N') {
    return false;
  }
  else {
    window.alert("Your input is invalid. Enter a valid value:");
    return passUpper();
  }
};

//fourth - numeric characters
var passNum = function() {
  var number = window.prompt("Do you want number characters included? Enter Y or N: ");
  if (number.toUpperCase() === 'Y'){
    return true;
  }
  else if (number.toUpperCase() === 'N') {
    return false;
  }
  else {
    window.alert("Your input is invalid. Enter a valid value:");
    return passNum();
  }
};

//fifth - special characters
var passSpecial = function() {
  var special = window.prompt("Do you want special characters included? Enter Y or N: ");
  if (special.toUpperCase() === 'Y'){
    return true;
  }
  else if (special.toUpperCase() === 'N') {
    return false;
  }
  else {
    window.alert("Your input is invalid. Enter a valid value:");
    return passSpecial();
  }
};

//all input is validated and at least one character type needs to be selected

//password generator
// - for loop over number of characters requested for password (8-128)
var generatePassword = function() {
  //create object for user input values
  var passObj = {
    length: passLength(),
    lowerChar: passLower(),
    upperChar: passUpper(),
    numericChar: passNum(),
    specialChar: passSpecial(),
    generatedPassword: ""
  };

  if (!passObj.lowerChar && !passObj.upperChar && !passObj.numericChar && !passObj.specialChar){
    alert("You must select at least one type of character for your password");
    generatePassword();
  }
 
  while (checkLength(passObj)) {
    if (passObj.lowerChar) {
      passObj.generatedPassword = pickLowerChars(passObj.generatedPassword);
      if (!checkLength(passObj)){
        break;
      }
    }
    if (passObj.upperChar) {
      passObj.generatedPassword = pickUpperChars(passObj.generatedPassword);
      if (!checkLength(passObj)) {
        break;
      }
    }
    if (passObj.numericChar) {
      passObj.generatedPassword = pickNumbers(passObj.generatedPassword);
      if (!checkLength(passObj)) {
        break;
      }
    }
    if (passObj.specialChar) {
      passObj.generatedPassword = pickSpecialChars(passObj.generatedPassword);
      if (!checkLength(passObj)) {
        break;
      }
    }
  }

  return passObj.generatedPassword;

};

var checkLength = function(passObj) {
  if (passObj.generatedPassword.length >= passObj.length) {
    return false;
  }
  else {
    return true;
  }
};

// function to pick special characters
var pickSpecialChars = function(currPassword) {
  currPassword = currPassword.concat(specialChars[Math.floor(Math.random() * 31)]);
  return currPassword;
};

//function to pick upper characters
var pickUpperChars = function(currPassword) {
  currPassword = currPassword.concat(upperChars[Math.floor(Math.random() * 25)]);
  return currPassword;
};

//function to pick lower characters
var pickLowerChars = function(currPassword) {
  currPassword = currPassword.concat(lowerChars[Math.floor(Math.random() * 25)]);
  return currPassword;
};

//function to pick numbers
var pickNumbers = function(currPassword) {
  currPassword = currPassword.concat(numbers[Math.floor(Math.random() * 9)]);
  return currPassword;
};

// - character type requests are passed into a function as booleans (true or false)
// -- this will narrow down the arrays to pick random characters from
var specialChars = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "\/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "\\", "^", "_", "\`", "{", "|", "~"];
var upperChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
