// oppgave 2

function checkPalindrome() {
    // input value
    let inputNumber = document.getElementById('inputNumber').value;

    // Convert to string and check for palindrome
    let inputString = inputNumber.toString();
    let reversedString = inputString.split('').reverse().join('');

    // Get the result span
    let resultSpan = document.getElementById('palindromeResult');

    if (inputString === reversedString) {
        resultSpan.textContent = 'Input is a PALINDROM!!';
    } else {
        resultSpan.textContent = 'Input is not a palindrome.';
    }
}

