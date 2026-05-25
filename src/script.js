var resultPassword = document.getElementById('password-result');
var passwordLength = document.getElementById('password-length');
var uppercaseCheckbox = document.getElementById('uppercase');
var lowercaseCheckbox = document.getElementById('lowercase');
var numbersCheckbox = document.getElementById('numbers');
var symbolsCheckbox = document.getElementById('symbols');
var generateBtn = document.getElementById('generate-btn');
var copyBtn = document.getElementById('copy-btn');
var strengthBar = document.getElementById('strength-bar');
var strengthText = document.getElementById('strength-text');

function copyResult() {
    var password = resultPassword.innerHTML;
    
    if (password !== 'SuaSenhaAqui' && password !== 'Selecione uma opção!') {
        navigator.clipboard.writeText(password);
        alert('Senha copiada com sucesso!');
    }
}

function generatePassword(length, hasUppercase, hasLowercase, hasNumbers, hasSymbols) {
    var characters = "",
        finalPassword = "";
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
    for (var i = 0, n = characters.length; i < length; ++i) {
        finalPassword += characters.charAt(Math.floor(Math.random() * n));
    }
    return finalPassword;
}

function handleGenerate() {
    var length = parseInt(passwordLength.value);
    var hasUppercase = uppercaseCheckbox.checked;
    var hasLowercase = lowercaseCheckbox.checked;
    var hasNumbers = numbersCheckbox.checked;
    var hasSymbols = symbolsCheckbox.checked;

    var newPassword = generatePassword(length, hasUppercase, hasLowercase, hasNumbers, hasSymbols);
    
    resultPassword.innerHTML = newPassword;

    
}    
generateBtn.addEventListener('click', handleGenerate);
copyBtn.addEventListener('click', copyResult);