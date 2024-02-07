// oppgave 1

function convertToLiters (value, unit) {
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

function handleConversion() {
    //user input
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const selectedUnit = document.getElementById("unitDropdown").value;

    //conversion
    const result = convertToLiters(inputValue, selectedUnit);

    // display result using alert
    alert(`Converted to liters: ${result}`);
}

document.getElementById("submitButton").addEventListener("click", handleConversion);
