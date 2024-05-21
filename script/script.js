function insert(num) {
    document.getElementById('display').value = document.getElementById('display').value + num;
}

function calculate() {
    var expression = document.getElementById('display').value;
    if(expression) {
        document.getElementById('display').value = eval(expression);
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    var display = document.getElementById('display').value;
    document.getElementById('display').value = display.substring(0, display.length - 1);
}