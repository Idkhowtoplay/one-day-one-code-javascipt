const display = document.getElementById("display");
const buttons = document.getElementById("buttons");
const history = document.getElementById("historyList");


let currentInput = "";
let previousInput = "";
let operator = null;


buttons.addEventListener("click", (event) => {
    const target = event.target;

    if(target.classList.contains("number")) {
        currentInput += target.textContent;
        display.value = currentInput;
    } else if (target.classList.contains("operator")) {
        if (currentInput === "") return;
        previousInput = currentInput;
        currentInput = "";
        operator = target.textContent;
    } else if (target.id === "equals") {
        if (currentInput === "" || previousInput === "" || !operator) return;

        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);
        let result;

        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num2 !== 0 ? num1 / num2 : "Error";
                break;
        }
        currentInput = result.toString();
        display.value = currentInput;

        const historyItem = document.createElement("li");
        historyItem.textContent = `${previousInput} ${operator} ${num2} = ${result}`;
        historyList.appendChild(historyItem);

        previousInput = "";
        operator = null;
    } else if (target.id === "clear") {
        currentInput = "";
        previousInput = "";
        operator = null;
        display.value = "";
    } else if (target.id === "percent") {
        if (currentInput === "") return;
        currentInput = (parseFloat(currentInput) / 100).toString();
        display.value = currentInput;
    }
});