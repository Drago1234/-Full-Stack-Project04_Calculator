
// Created by Trevor on 07/01/2019
// Modified by Yi on 07/04: Throw exceptions if result is invalid

// Implemented by Trevor on 07/01/2019
// Updated by Trevor on 07/04/2019
// Updated on 07/04/2019 by Trevor (fixed bug in unary operator listener function)

// listeners for unary operation keys (sqrt, x^2, neg, 1/x)
Array.prototype.forEach.call(unaryKeys, function(element, index) {
    element.addEventListener("click", function(){
    // get type of unary operator 
    var currentOp = element.innerHTML;
    // if formula is empty use result
    if (formula == "") formula += result==null ? 0 : result;
	switch (currentOp) {
      case '√':
        formula += "√";
        break;
      case 'NEG':
        formula += "(-)";
        break;
      case 'X<sup>2</sup>':
        formula += "<sup>2</sup>";
        break;
      case '1/X':
        formula += "1/X";
        break;
    }
    updateFormula();
    // evaluate if there is a previous operation and return to initial state
    if (first != "" && second != "" && operator != null) {
      evaluate(); 
      first = ""; second = ""; operator = null; 
    }
    // if first is "", cut result value and paste to first.
    if (first == "") {
      first = result == null ? "0" : result.toString();
      result = null;
    }
    switch (currentOp) {
      case '√':
        result = srt(Number(first));
        break;
      case 'NEG':
        result = negate(Number(first));
        break;
      case 'X<sup>2</sup>':
        result = square(Number(first));
        break;
      case '1/x':
        result = inverse(Number(first));
        break;
    }
    // Throw Exceptions if result seems to be invalid
    if (isValidNum(result)) updateResult();
    else {
      if (result.toString().includes("e") || result.toString().includes("finity") || typeof(result)=="number") {throwException("OVERFLOW!");}
      else {
        throwException("Invalid Number!");
      }
    }
	if (isValidNum(result) && operator != holdValue && formula != "") {
       if (formula.includes("<sup>")) {
            formula = formula.replace("<sup>", "^");
            formula = formula.replace("</sup>", "");
        }
		
        var finalFormula = formula + " = " + result + "\n";
        console.log(finalFormula);
       document.getElementById("history").value += finalFormula;
   }
	first = "";
	second = "";
	operator = null;
  });
});



// Unary Operators sqrt, negate, square, inverse
// Created and implemented on 07/01/2019 by Trevor
// Updated on 07/04/2019 by Trevor (changed parameterization)

// Square Root function
function srt (number) {
	return Math.sqrt(number);
}

// Negation function
function negate (number) {
	return number * -1;
}

// Square function
function square (number) {
	return number * number;
}

// Inverse function
function inverse (number) {
	if (number != 0) {
		return 1 / number;
	} else {
		return "NaN";
	}
}

