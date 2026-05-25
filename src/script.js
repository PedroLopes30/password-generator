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
    const password = resultPassword.innerHTML;
    
    if (password !== 'Sua Senha Aqui' && password !== 'Selecione uma opção!') {
        navigator.clipboard.writeText(password);
        alert('Senha copiada com sucesso!');
    }
}

function generatePassword(length, hasUppercase, hasLowercase, hasNumbers, hasSymbols) {
    const characters = "";
    const finalPassword = "";

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
        return "Selecione uma opção!";
    }

    for (let i = 0, n = characters.length; i < length; ++i) {
        finalPassword += characters.charAt(Math.floor(Math.random() * n));
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
    
    resultPassword.innerHTML = newPassword;
}    

generateBtn.addEventListener('click', handleGenerate);
copyBtn.addEventListener('click', copyResult);