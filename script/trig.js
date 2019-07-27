
// Created by Pranay on 07/02/2019
// Modified by Yi on 07/04: Throw exceptions if result is invalid



// listeners for unary operation keys (all trigonometric functions)
Array.prototype.forEach.call(trigKeys, function(element, index) {
    element.addEventListener("click", function(){
    // get type of unary operator 
    var trigOperator = element.innerHTML;
    // if formula is empty use result
    if (formula == "") formula += result==null ? 0 : result;
    formula = trigOperator + "(" + formula + ")";
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
	var temp = Number(first);
	if (degreeMode) {
		
		temp = (temp * Math.PI) / 180;
		window.alert(temp);
		
	} 
    switch (trigOperator) {
		
	  
      case 'SIN':
        result = sin(temp);
        break;
		
	   
	   case 'COS':
        result = cos(temp);
        break;
		
		case 'TAN':
        result = tan(temp);
        break;
		
		case 'SIN<sup>-1</sup>':
        result = arcsin(temp);
        break;
		
		case 'COS<sup>-1</sup>':
        result = arccos(temp);
        break;
		
		case 'TAN<sup>-1</sup>':
        result = arctan(temp);
        break;
		
		case 'Rad->Deg':
		result = raddeg (temp);
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
    var finalFormula = formula + " = " + result + "\n";
	console.log(finalFormula);
    document.getElementById("history").value += finalFormula; 
    }
	first = "";
	second = "";
	operator = null;
  });
});



// functions to compute operations (default radians)
// Created and implemented on 07/02/2019 by Pranay


function sin (number) {
	return Math.sin(number);
}

function cos (number) {
	return Math.cos(number);
}

function tan (number) {
	return Math.tan(number);
}

function arcsin (number) {
	return Math.asin(number);
}

function arccos (number) {
	return Math.acos(number);
}

function arctan (number) {
	return Math.atan(number);
}

