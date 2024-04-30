function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

function clearAll() {
    document.getElementById('display').value = '';
}

function calculate() {
    let expression = document.getElementById('display').value;
    try {
        let result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateSquareRoot() {
    let expression = document.getElementById('display').value;
    try {
        let result = Math.sqrt(eval(expression));
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculatePercentage() {
    let expression = document.getElementById('display').value;
    try {
        let result = eval(expression) / 100;
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}