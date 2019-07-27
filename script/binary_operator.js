/** 
 * The file was implemented by Yi on 06/24 (without modulus and power)
 * This file implements binary operations and listener for corresponding buttons
 */ 

// Arithmatic Functions (+-×÷ and holdvalue)
function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

function minus (firstNum, secondNum) {
  return firstNum - secondNum;
}

function multiply (firstNum, secondNum){
  return (firstNum* 10) * (secondNum*10) / 100;
}

function divide (firstNum, secondNum) {
  var result = firstNum/secondNum;
  var isValid = result <= Number.MAX_SAFE_INTEGER && result >= Number.MIN_SAFE_INTEGER;
  return isValid ? result : "NaN";
}

function holdValue (firstNum, secondNum) {
  return firstNum;
}


// Other binary functions % and ^
// Implemented on 07/01/2019 by Trevor
function modulus (firstNum, secondNum) {
	if (secondNum != 0) {
		return ((firstNum * 10) % (secondNum * 10)) / 10;
	} else {
		return 0;
	}
}
  
function power (firstNum, secondNum) {
	return Math.pow(firstNum, secondNum);
}


// Implementd by Yi on 06/24. Originally was in script.js
// listeners for binary operation keys : (+-×÷%^)
// Updated on 07/04/2019 by Trevor (added modulus and power functions to binary operators)
Array.prototype.forEach.call(binaryKeys, function(element, index) {
  element.addEventListener("click", function(){
    // get type of binary operator; one of +-×÷%^
    var ch = element.innerHTML; 
    // If operator already exist, delete last character in formula and add new character
    if (operator != null && second == "") formula = formula.slice(0, -1); 
    // if formula is empty, we add result before adding operator
    if (formula == "") formula += result==null ? 0 : result;
    formula += ch;
    updateFormula();
    // evaluate if (first, second and operator) exist before click this operation key
    if (first != "" && second != "" && operator != null) {
      evaluate(); 
      // recover to initial state after evaluate
      first = ""; second = ""; operator = null; 
    }
    // if first is "", cut result value and paste to first.
    if (first == "") {
      first = result == null ? "0" : result.toString();
      result = null;
    }
    // assign value to operator (pointer to function definition)
    switch (ch) {
      case '+':
        operator = add;
        break;
      case '-':
        operator = minus;
        break;
      case '×':
        operator = multiply;
        break;
      case '÷':
        operator = divide;
        break;
      case '%':
        operator = modulus;
        break;
      case '^':
        operator = power;
        break;
      default:
        operand = holdValue;
    }
  });
});
