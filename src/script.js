const resultPassword = document.getElementById('password-result');
const passwordLength = document.getElementById('password-length');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const strengthBar = document.getElementById('strength-bar');
const strengthText = document.getElementById('strength-text');

function copyResult() {
    const password = resultPassword.value;
    
    if (password !== "") {
        navigator.clipboard.writeText(password);
        return
    }

    alert("Gere uma senha para conseguir copiar!")
}

function generatePassword(length, hasUppercase, hasLowercase, hasNumbers, hasSymbols) {
    let characters = "";
    let finalPassword = "";

    if (hasUppercase) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }; 

    if (hasLowercase) {
        characters += "abcdefghijklmnopqrstuvwxyz";
    };

    if (hasNumbers) {
        characters += "0123456789";
    };  
      
    if (hasSymbols) {
        characters += "!@#$%^&*()_+~|}{[]:;?><,./-="; 
    };   

    if (characters === "") {
        alert("Selecione uma opção!")
        return ""
    }

    for (let init = 0; init < length; ++init) {
        finalPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return finalPassword;
}

function handleGenerate() {
    const length = parseInt(passwordLength.value);
    const hasUppercase = uppercaseCheckbox.checked;
    const hasLowercase = lowercaseCheckbox.checked;
    const hasNumbers = numbersCheckbox.checked;
    const hasSymbols = symbolsCheckbox.checked;

    const newPassword = generatePassword(length, hasUppercase, hasLowercase, hasNumbers, hasSymbols);
    resultPassword.value = newPassword
}    

generateBtn.addEventListener('click', handleGenerate);
copyBtn.addEventListener('click', copyResult);