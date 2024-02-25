const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordLength = 8

let sliderEl = document.getElementById("myRange");
let passwordLengthEl = document.getElementById("password-length");
passwordLengthEl.textContent += sliderEl.value; // Display the default slider value

let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")
let password3El = document.getElementById("password3-el")
let password4El = document.getElementById("password4-el")


// passwordLengthEl.textContent += passwordLength

// Update the current slider value (each time you drag the slider handle)
sliderEl.oninput = function() {
    passwordLength = this.value
    passwordLengthEl.textContent = "Length: " +  this.value;
    console.log("slider changing value: ", passwordLength)
}

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    return randomPassword
}

// const generatedPasswordOne = generateRandomPassword()
// const generatedPasswordTwo = generateRandomPassword()
// const generatedPasswordThree = generateRandomPassword()
// const generatedPasswordFour = generateRandomPassword()

function displayPassword() {
    const generatedPasswordOne = generateRandomPassword()
    const generatedPasswordTwo = generateRandomPassword()
    const generatedPasswordThree = generateRandomPassword()
    const generatedPasswordFour = generateRandomPassword()
    console.log("button clicked")
    password1El.value = generatedPasswordOne
    // password1El.style.textAlign = "center";
    password2El.value = generatedPasswordTwo
    password3El.value = generatedPasswordThree
    password4El.value = generatedPasswordFour
}

function copyText(inputId) {
    let inputElement = document.getElementById(inputId)
    inputElement.select();
    document.execCommand("copy");
    // inputElement.blur();
}

function progressScript() {

}

// console.log("Here is a random password: ", generatedPasswordOne)

