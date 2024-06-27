// Select the display element and all the button elements
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

// Variable to keep track of the current input and result
let currentInput = '';
let resultDisplayed = false;

// Function to update the display
function updateDisplay() {
    display.textContent = currentInput || '0';
}

// Function to handle button clicks
function handleButtonClick(event) {
    const buttonValue = event.target.value;

    if (buttonValue === 'AC') {
        // Clear all input
        currentInput = '';
        resultDisplayed = false;
    } else if (buttonValue === 'DE') {
        // Delete the last character
        if (resultDisplayed) {
            currentInput = '';
            resultDisplayed = false;
        } else {
            currentInput = currentInput.slice(0, -1);
        }
    } else if (buttonValue === '=') {
        // Calculate the result
        try {
            currentInput = eval(currentInput).toString();
            resultDisplayed = true;
        } catch (error) {
            currentInput = 'Error';
        }
    } else {
        // Append the button value to the current input
        if (resultDisplayed) {
            currentInput = buttonValue;
            resultDisplayed = false;
        } else {
            currentInput += buttonValue;
        }
    }

    updateDisplay();
}

// Add event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

// Initialize the display
updateDisplay();
