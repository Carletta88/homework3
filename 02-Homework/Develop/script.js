var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordValue = "";
  var Allnumbers = ['0','1','2','3','4','5','6','7','8','9']
  var littleLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var bigLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  var moreCharacters = ['!','"','#','$','%','&','(',')','*','+',',']
  var options = []
  
  function choseHowMany() {
    
  }
  var howMany = prompt("What length do you want your password to be?")
  console.log(howMany);


  if (howMany >= 8 || howmany <= 128 ) {
    options.push(amount)
  } 

  else {
    alert("Please pick a number between 8 and 128.")
  }

  var numbers = prompt("Do you want to include numbers?")
  console.log(numbers);

  if (numbers == "yes" ) {
    options.push(Allnumbers)
  } 
  
  var lowercase = prompt("Do you want to include lowercase letters?")
  console.log(lowercase);

  if (lowercase == "yes" ) {
    options.push(littleLetters)
  } 

  var uppercase = prompt("Do you want to include uppercase letters?")
  console.log(uppercase);

  if (uppercase == "yes" ) {
    options.push(bigLetters)
  } 
  var specialCharacters = prompt("Do you want to include special characters?")
  console.log(specialCharacters);

  if (specialCharacters == "yes" ) {
    options.push(moreCharacters)
  } 
  
 for (var randomIndex = 0; randomIndex < options.length; randomIndex++) {
  var randomIndex = Math.random(options.length)

   const element = options[randomIndex];
   passwordValue = passwordValue + element;
  } 
   
   return passwordValue;
}

generatePassword();
generateBtn.addEventListener("click", writePassword); // should this be ('click', generatePassword?)


// Add event listener to generate button
// ask users parameter questions length
// alow users to answer questions length
// prompt for next question
// allow them to answer
//......for all questions
// generate the password
  //for answer to question 1 do something
  //for answer to question 2 do something
  //.... for all questions
//give them generated pasword
// lowercase, uppercase, numeric, and/or special characters
// abcdefghijklmnopqrstuvwxyz
// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// 0123456789
// '!','"','#','$','%','&',''','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\',']','^','_','`','{','|','}','~'' **notice space is not being used**