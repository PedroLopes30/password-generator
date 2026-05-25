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

function verifyOccurrences(value, regex, occurrences) {
    let verifyNumber = 0

    for (let character in value) {
        if (verifyNumber == occurrences) return true
        if (regex.includes(value[character])) {
            verifyNumber += 1
        }
    }
}

function generatePassword(length, hasUppercase, hasLowercase, hasNumbers, hasSymbols, strength = 2) {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowercase = "abcdefghijklmnopqrstuvwxyz"
    const numbers = "0123456789"
    const symbols = "!@#$%^&*()_+~|}{[]:;?><,./-="

    let characters = "";
    let finalPassword = "";

    if (hasUppercase) {
        characters += uppercase;
    }; 

    if (hasLowercase) {
        characters += lowercase;
    };

    if (hasNumbers) {
        characters += numbers;
    };  
      
    if (hasSymbols) {    
        characters += symbols; 
    };   

    if (characters === "") {
        alert("Selecione uma opção!")
        return ""
    }

    switch (strength) {
        case 1:
            for (let init = 0; init < length; ++init) {
                if (verifyOccurrences(finalPassword, symbols, 1)) {
                    finalPassword += characters.charAt(Math.floor(Math.random() * (characters.length - symbols.length)));
                    continue
                }
                
                finalPassword += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            
            return finalPassword
        case 2:
            for (let init = 0; init < length; ++init) {
                if (verifyOccurrences(finalPassword, symbols, 4)) {
                    finalPassword += characters.charAt(Math.floor(Math.random() * (characters.length - symbols.length)));
                    continue
                }
                finalPassword += characters.charAt(Math.floor(Math.random() * characters.length));
            }

            return finalPassword
        case 3:         
            for (let init = 0; init < length; ++init) {
                finalPassword += characters.charAt(Math.floor(Math.random() * characters.length));
            }

            return finalPassword
    }
}

function handleGenerate() {
    const length = parseInt(passwordLength.value);
    const hasUppercase = uppercaseCheckbox.checked;
    const hasLowercase = lowercaseCheckbox.checked;
    const hasNumbers = numbersCheckbox.checked;
    const hasSymbols = symbolsCheckbox.checked;
    const strength = parseInt(strengthBar.value)
    
    const newPassword = generatePassword(length, hasUppercase, hasLowercase, hasNumbers, hasSymbols, strength);
    resultPassword.value = newPassword
}    

generateBtn.addEventListener('click', handleGenerate);
copyBtn.addEventListener('click', copyResult);