var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordValue = "";
  var Allnumbers = ['0','1','2','3','4','5','6','7','8','9'];
  var littleLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var bigLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var moreCharacters = ['!','"','#','$','%','&','(',')','*','+',','];
  var options = [];
  var howMany = 0;
  
  function choseHowMany() {
    howMany = prompt("What length do you want your password to be?")
    console.log(howMany);
  
    if (howMany >= 8 || howMany <= 128 ) {
      options = options.concat(howMany);
    } 
    else {
      alert("Please pick a number between 8 and 128.")
    }
  };
  
  choseHowMany();
   

  var numbers = prompt("Do you want to include numbers?")
  console.log(numbers);

  if (numbers) {
    options = options.concat(Allnumbers);
  } 
  
  var lowercase = prompt("Do you want to include lowercase letters?")
  console.log(lowercase);

  if (lowercase == "yes" ) {
    options = options.concat(littleLetters);
  } 

  var uppercase = prompt("Do you want to include uppercase letters?")
  console.log(uppercase);

  if (uppercase == "yes" ) {
    options = options.concat(bigLetters);
  } 
  var specialCharacters = prompt("Do you want to include special characters?")
  console.log(specialCharacters);

  if (specialCharacters == "yes" ) {
    options = options.concat(moreCharacters);
  } 
  console.log(options);
  console.log(howMany);
  
  for (var randomIndex = 0; randomIndex < howMany; randomIndex++) {
    passwordValue = passwordValue + options[Math.floor(Math.random() * options.length)];
    
  } 
  return passwordValue;
};
   
generateBtn.addEventListener("click", writePassword);



  
  



