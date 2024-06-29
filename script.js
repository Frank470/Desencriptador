document.getElementById('encryptButton').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    if (validateInput(inputText)) {
        let encryptedText = encryptText(inputText);
        document.getElementById('outputText').value = encryptedText;
        document.getElementById('validationMessage').textContent = '';
    } else {
        document.getElementById('validationMessage').textContent = 'No se aceptan mayúsculas ni caracteres especiales.';
    }
});

document.getElementById('decryptButton').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    if (validateInput(inputText)) {
        let decryptedText = decryptText(inputText);
        document.getElementById('outputText').value = decryptedText;
        document.getElementById('validationMessage').textContent = '';
    } else {
        document.getElementById('validationMessage').textContent = 'No se aceptan mayúsculas ni caracteres especiales.';
    }
});

document.getElementById('copyButton').addEventListener('click', function() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
});

function encryptText(text) {
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
        encryptedText += String.fromCharCode(text.charCodeAt(i) + 3);
    }
    return encryptedText;
}

function decryptText(text) {
    let decryptedText = '';
    for (let i = 0; i < text.length; i++) {
        decryptedText += String.fromCharCode(text.charCodeAt(i) - 3);
    }
    return decryptedText;
}

function validateInput(text) {
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}
