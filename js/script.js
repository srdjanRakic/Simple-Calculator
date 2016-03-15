var firstOperand = 0;
var secondOperand = 0;
var operatorToExecute = "default";

var toClearAfterOperator = false;
var equalsPressed = false;

window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;

    switch(key){
        case 96:
        case 48:
            //Zero
            numberPressed(0);
            break;
        case 97:
        case 49:
            numberPressed(1);
            //One
            break;
        case 98:
        case 50:
            numberPressed(2);
            //two
            break;
        case 99:
        case 51:
            numberPressed(3);
            //Three
            break;
        case 100:
        case 52:
            numberPressed(4);
            //Four
            break;
        case 101:
        case 53:
            //Five
            numberPressed(5);
            break;
        case 102:
        case 54:
            //Six
            numberPressed(6);
            break;
        case 103:
        case 55:
            //Seven
            numberPressed(7);
            break;
        case 104:
        case 56:
            //Eight
            numberPressed(8);
            break;
        case 105:
        case 57:
            //Nine
            numberPressed(9);
            break;
        case 106:
            //Multiply
            operatorPressed("MUL");
            break;
        case 107:
            //Add
            operatorPressed("+");
            break;
        case 109:
            //Subtract
            operatorPressed("-");
            break;
        case 111:
            //Divide
            operatorPressed("/");
            break;
        case 46:
            //Clear
            operatorPressed("clear");
            break;
        case 77:
            //Mod
            operatorPressed("%");
            break;
        case 187:
        case 13:
            //Equals
            operatorPressed("=");
            break;
    }
}

function numberPressed(number){

    var display = document.getElementById("display");
    var newValue = parseInt(display.value);

    if (equalsPressed){
        newValue = 0;
        equalsPressed = !equalsPressed;
    }

    if (toClearAfterOperator){
        newValue = 0;
        toClearAfterOperator = !toClearAfterOperator;
    }

    newValue *= 10;

    switch(number){
        case 1:
            newValue += 1;
            break;
        case 2:
            newValue += 2;
            break;
        case 3:
            newValue += 3;
            break;
        case 4:
            newValue += 4;
            break;
        case 5:
            newValue += 5;
            break;
        case 6:
            newValue += 6;
            break;
        case 7:
            newValue += 7;
            break;
        case 8:
            newValue += 8;
            break;
        case 9:
            newValue += 9;
            break;
        case 0:
            break;
    }

    display.value = newValue;
}

function operatorPressed(operator){

    var display = document.getElementById("display");

    if (equalsPressed){
        toClearAfterOperator = !toClearAfterOperator;
    }

    switch(operator){
        case "+":
            operatorToExecute = "+";
            firstOperand = executeOperationOnOperands(firstOperand, parseInt(display.value), operatorToExecute);
            display.value = firstOperand;
            break;
        case "-":
            operatorToExecute = "-";
            if (firstOperand !== 0) firstOperand = executeOperationOnOperands(firstOperand, parseInt(display.value), operatorToExecute);
            else firstOperand = executeOperationOnOperands(firstOperand, parseInt(display.value), "+");
            display.value = firstOperand;
            break;
        case "MUL":
            operatorToExecute = "*";
            if (firstOperand !== 0) firstOperand = executeOperationOnOperands(firstOperand, parseInt(display.value), operatorToExecute);
            else firstOperand = executeOperationOnOperands(firstOperand, parseInt(display.value), "+");
            display.value = firstOperand;
            break;
        case "/":
            operatorToExecute = "/";
            if (firstOperand !== 0) firstOperand = executeOperationOnOperands(firstOperand, parseInt(display.value), operatorToExecute);
            else firstOperand = executeOperationOnOperands(firstOperand, parseInt(display.value), "+");
            display.value = firstOperand;
            break;
        case "%":
            operatorToExecute = "%";
            if (firstOperand !== 0) firstOperand = executeOperationOnOperands(firstOperand, parseInt(display.value), operatorToExecute);
            else firstOperand = executeOperationOnOperands(firstOperand, parseInt(display.value), "+");
            display.value = firstOperand;
            break;
        case "=":
            secondOperand = parseInt(display.value);
            firstOperand = executeOperationOnOperands(firstOperand, secondOperand, operatorToExecute);
            display.value = firstOperand;
            firstOperand = 0;
            equalsPressed = !equalsPressed;
            break;
        case "clear":
            display.value = 0;
            firstOperand = 0;
            secondOperand = 0;
            operatorToExecute = "default";
            toClearAfterOperator = !toClearAfterOperator;
            break;
    }

    toClearAfterOperator = !toClearAfterOperator;

}

function executeOperationOnOperands(firstOperand, secondOperand, operation){

    var result;

    switch(operation){
        case "+":
            result = firstOperand + secondOperand;
            break;
        case "-":
            result = firstOperand - secondOperand;
            break;
        case "*":
            result = firstOperand * secondOperand;
            break;
        case "/":
            if (secondOperand === 0) result = "Division by zero.";
            else{
                result = Math.floor(firstOperand / secondOperand);
            }
            break;
        case "%":
            if (secondOperand !== 0) result = firstOperand % secondOperand;
            else result = "Division by zero.";
            break;
        default:
            result = "Operands or operator invalid (switcher).";
            break;
    }

    return result;

}

function writeResultToInputField(element, value){
    element.value = value;
}
