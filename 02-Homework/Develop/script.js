// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // console.log("before generate password call")
  var password = generatePassword();
  // var password = "Aly is awesome";***example
  // console.log("after generate password call")
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordValue = "";
  var amount = []
  var Allnumbers = [0,1,2,3,4,5,6,7,8,9]
  var littleLetters = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
  var bigLetters = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z]
  // var moreCharacters = [!,",#,$,%,&,',(,),*,+,,,-,.,/,:,;,<,=,>,?,@,[,\,],^,_,`,{,|,},~,]
  var options = []
  
  var amount = prompt("What length do you want your password to be?")
  console.log(amount);

  if (amount == "" ) {
    options.pushValues(amount)
  } 

  var lowercase = prompt("Do you want to include lowercase letters?")
  console.log(lowercase);

  if (lowercase == "yes" ) {
    options.pushValues(littleLetters)
  } 

  var uppercase = prompt("Do you want to include uppercase letters?")
  console.log(uppercase);

  if (uppercase == "yes" ) {
    options.pushValues(bigLetters)
  } 
  var numbers = prompt("Do you want to include numebrs?")
  console.log(numbers);

  if (numbers == "yes" ) {
    options.pushValues(Allnumbers)
  } 
  var moreCharacters = prompt("Do you want to include special characters?")
  console.log(special);

  if (moreCharacters == "yes" ) {
    options.pushValues(moreCharacters)
  } 
  
 for (var randomIndex = 0; randomIndex < options.length; randomIndex++) {
  var randomIndex = Math.random(options.length)

   const randomIndex = options[randomIndex];
   passwordValue = passwordValue + randomIndex;
   
 } 
 return passwordValue;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


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
// !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~  **notice space is not being used**