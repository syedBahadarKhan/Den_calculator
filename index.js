document.getElementById('calculator').addEventListener('submit', function(event) {
    event.preventDefault();
    calculate();
});

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.value === 'Error') {
        display.value = '';
    }
    display.value += value;
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Check for empty input
        if (!display.value) {
            display.value = '';
            return;
        }
        
        // Evaluate the expression
        const result = eval(display.value);
        
        // Check if result is valid
        if (isNaN(result) || !isFinite(result)) {
            display.value = 'Error';
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = 'Error';
    }
}

// Clear button functionality (reset already handles this, but ensuring consistency)
document.querySelector('button[type="reset"]').addEventListener('click', function() {
    document.getElementById('display').value = '';
});