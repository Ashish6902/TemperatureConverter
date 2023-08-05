document.addEventListener("DOMContentLoaded", function () {
  //to get values use anonymous function
    var convertButton = document.getElementById("Convert");
    var ResetButton = document.querySelector("input[type='reset']");
    var outputElement = document.getElementById("output");
    var formulaElement = document.getElementById("Formula");
// add event listner to to button
    convertButton.addEventListener("click", function (event) {
        event.preventDefault();

        var input_Value = parseFloat(document.getElementById("input_area").value);
        var selectedUnit = document.querySelector("select").value;
        var converted_Value;
        var formula;
            //use if else to check what value is selected 
        if (selectedUnit === "Fahrenheit") {
            converted_Value = (input_Value * 9/5) + 32;
            formula = `${input_Value}°C × 9/5 + 32 = ${converted_Value}°F`;
        } else if (selectedUnit === "Kelvin") {
            converted_Value = input_Value + 273.15;
            formula = `${input_Value}°C + 273.15 = ${converted_Value}K`;
        }
            // to change inner html
        outputElement.textContent = `Converted Temperature: ${converted_Value} ${selectedUnit}`;
        formulaElement.textContent = `Formula: ${formula}`;
    });

    //to reset everything
    ResetButton.addEventListener("click", function () {
        outputElement.textContent = "";
        formulaElement.textContent = "";
    });
});
