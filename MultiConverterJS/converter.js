// oppgave 1 og 2

function convertToLiters(value, unit) {
    switch (unit) {
        case "gallons":
            return value * 3.78541;
        case "ounces":
            return value * 0.0295735;
        case "cups":
            return value * 0.236588;
        case "tablespoons":
            return value * 0.0147868;
        default:
            return "invalidUnit";
    }
}


function isPalindrome(str) {
    const cleanStr = str.toString().toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

function handleConversion() {
    // user input
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const selectedUnit = document.getElementById("unitDropdown").value;

    // checks if inputValue valid 
    if (isNaN(inputValue) || !isFinite(inputValue)) {
        alert("Please enter a valid number for conversion.");
        return;
    }

    // conversion
    const result = convertToLiters(inputValue, selectedUnit);

    if (!isFinite(result)) {
        alert("Conversion result is not a valid number.");
        return;
    }

    // display result using alert
    alert(`Converted to liters: ${result}`);

    // check if result is a palindrome
    const resultString = result.toString();
    const isResultPalindrome = isPalindrome(resultString);

    // display palindrome message
    const palindromeMessage = isResultPalindrome ? "This is a palindrome" : "This is not a palindrome";
    document.getElementById("palindromeMessage").innerText = palindromeMessage;
}

document.getElementById("submitButton").addEventListener("click", handleConversion);
