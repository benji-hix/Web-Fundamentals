// hover effects
    $("button").hover(function() {
        $(this).addClass('mouseover-button');
    },
    function() {
        $(this).removeClass("mouseover-button");
    });


// js for calculator function
var workingNumText = document.querySelector("#display");

var numberSwitch = 1;
var operatorSwitch = 0;
var calculateSwitch = 0;

var currentOperator = "";
var storedOperator = "";
var storedNumber = "";

// log function for troubleshooting 
function log() {
    console.log("numberSwitch: " + numberSwitch)
    console.log("operatorSwitch: " + operatorSwitch)
    console.log("storedNumber: " + storedNumber)
    console.log("storedOperator :" + storedOperator)
    console.log("storedOperator :" + storedOperator)
    console.log("calculateSwitch: " + calculateSwitch)
}

// clear button 
function pressClear() {
    workingNumText.innerText = 0;
    storedNumber = 0;
    currentOperator = "";
    storedOperator = "";
    numberSwitch = 1;
    operatorSwitch = 0;
    calculateSwitch = 0;
}

function pressNegative() {
 workingNumText.innerText = parseFloat(workingNumText.innerText * -1);
}

function pressPercent() {
 workingNumText.innerText = parseFloat(workingNumText.innerText / 100);
}

// standard function for operating a stored number by the onscreen number
var temp = 0;

function operateStored() {
switch (storedOperator) {
    case "+": {
        temp = parseFloat(workingNumText.innerText);
        workingNumText.innerText = storedNumber + parseFloat(workingNumText.innerText);
        storedNumber = temp;
        break;
    }
    case "-": {
        temp = parseFloat(workingNumText.innerText);
        workingNumText.innerText = storedNumber - parseFloat(workingNumText.innerText);
        storedNumber = temp;
        break;
    }
    case "/": {
        temp = parseFloat(workingNumText.innerText);
        workingNumText.innerText = storedNumber / parseFloat(workingNumText.innerText);
        storedNumber = temp;
        break;
    }
    case "*": {
        temp = parseFloat(workingNumText.innerText);
        workingNumText.innerText = storedNumber * parseFloat(workingNumText.innerText);
        storedNumber = temp;
        break;
    }
    default: break;
}
}

// function for operating the number on screen by a stored number 
function operateByStored() {
switch (storedOperator) {
    case "+": {
        workingNumText.innerText = parseFloat(workingNumText.innerText) + storedNumber;
        break;
    }
    case "-": {
        workingNumText.innerText = parseFloat(workingNumText.innerText) - storedNumber;
        break;
    }
    case "/": {
        workingNumText.innerText = parseFloat(workingNumText.innerText) / storedNumber;
        break;
    }
    case "*": {
        workingNumText.innerText = parseFloat(workingNumText.innerText) * storedNumber;
        break;
    }
    default: break;
}
}


// function for operating when there's no previously stored equation
function operateNoStored() {
storedOperator = currentOperator;
storedNumber = parseFloat(workingNumText.innerText);
switch (currentOperator) {
    case "+": {
        workingNumText.innerText = parseFloat(workingNumText.innerText) + parseFloat(workingNumText.innerText);
        break;
    }
    case "-": {
        workingNumText.innerText = parseFloat(workingNumText.innerText) - parseFloat(workingNumText.innerText);
        break;
    }
    case "/": {
        workingNumText.innerText = parseFloat(workingNumText.innerText) / parseFloat(workingNumText.innerText);
        break;
    }
    case "*": {
        workingNumText.innerText = parseFloat(workingNumText.innerText) * parseFloat(workingNumText.innerText);
        break;
    }
    default: break;
}
}

/* function for pressing buttons
// things to consider: should number onscreen be replaced or addended?
// if so, does it need to be stored?
// how should entering a new number affect the next time we press = or an operator?
// how should we handle decimals or zeros before/after numbers? */
function pressNumber(character) {
console.log("Press " + character);

switch (numberSwitch) {
case (1): {
    switch (operatorSwitch) {
    case (0): {
        console.log("outcome A");
        storedNumber = parseFloat(workingNumText.innerText);
        workingNumText.innerText = character;
        numberSwitch = 0;
            if (currentOperator != "") {
            console.log("outcome B")
            storedOperator = currentOperator;
            operatorSwitch = 1;
            }
        break;
    }
    case (1): {
        console.log("outcome C")
        operatorSwitch = 1;
        numberSwitch = 0;
        workingNumText.innerText = character;
        break;
    }
    }  
break;
}
case (0): {
    switch (character) {
    case ("."): {
        console.log("outcome R")
        workingNumText.innerText += character;
        break;
    } 
    default: { 
        console.log("outcome Q")
        workingNumText.innerText += character;
        workingNumText.innerText = parseFloat(workingNumText.innerText);
        break;
    }
    }
}
}
}

/* function for pressing operators
// to consider:
// should pressing an operator immediately calculate previous entries?
// what if I press an operator more than once?
// how is operator press affected by = and vice versa? */
function pressOperator(character) {
    console.log("Press " + character);
switch (operatorSwitch) {
case (0): {
    if (storedOperator == "") {
    switch (numberSwitch) {
        case (0): {
            console.log("outcome D")
            storedNumber = parseFloat(workingNumText.innerText);
            currentOperator = character
            numberSwitch = 1;
            break;
        }
        case (1): {
            console.log("outcome E")
            currentOperator = character
            break;
        }
    }
    }
    else {
        console.log("outcome F")
        currentOperator = character;
        numberSwitch = 1;
    }
break;
}
case (1): {
    switch (true) {
        case (numberSwitch == 1): {
            console.log("outcome G")
            operatorSwitch = 0
            currentOperator = character;
            break;
        }
        case (numberSwitch == 0 ): {
            if (calculateSwitch == 1) {
                console.log("outcome H");
                operatorSwitch = 0;
                numberSwitch = 1;
                currentOperator = character;
                calculateSwitch = 0;
                }
            else {
                console.log("outcome I");
                operateStored();
                numberSwitch = 1;
                operatorSwitch = 0;
                currentOperator = character;
                }
            break;
        }
    }  
}
}
}




/* function for equals
// to consider:
// what happens if = is pressed repeatedly 
// what happens if = is pressed without a selected operator 
// how should = function differently from clear button */
function pressEqual() {
console.log("Press =");
switch (numberSwitch) {
case (0): {
    switch (operatorSwitch) {
    case (0): {
        console.log("outcome J")
        numberSwitch = 1;
    break;
    }
    case (1): {
        if (calculateSwitch == 1) {
            console.log("outcome K")
            operateByStored();
            operatorSwitch = 1;
            numberSwitch = 1;
            currentOperator = "";
            calculateSwitch = 0;
        }

        else {
            console.log("outcome L");
            operateStored();
            operatorSwitch = 1
            numberSwitch = 1;
            currentOperator = "";
            calculateSwitch = 1; 
            }
    break;
    }
    }
break;
}
case (1): {
    switch (operatorSwitch) {
    case (0): {
    if (currentOperator == "") {
        switch (storedOperator) {
        case (""): {
            console.log("outcome M");
            numberSwitch = 1;
            break;
        }
        default: 
            console.log("outcome N")
            numberSwitch = 1;
            operateByStored();
            break;
        }
    }
    else {
        console.log("outcome O");
        operateNoStored();
        operatorSwitch = 0;
        numberSwitch = 1;
        currentOperator = "";
    break;
    }
    break;
    }
    case (1): {
        console.log("outcome P");
        operateByStored();
        operatorSwitch = 0;
        numberSwitch = 1;
        currentOperator = "";
    break;
    }
    }
break;
}
}
}