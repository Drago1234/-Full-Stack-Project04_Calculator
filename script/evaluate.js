/**
 * This file was implemented by Yi on 06/24. Split out from script.js
 * Modified by Yi on 07/05 to fix history functionality
 * This file implements the evaluate() function, and adds listener to "=" keys
 */


// Update: result; Restore: first, second, operator
function evaluate() {
  // set second equal first if only second is missing
  if (first != "" && second == "" && operator != null) second = first;
  // if first, second and operator all exists, call operator and get result
  if (first != "" && second != "" && operator!=null) {
    result = operator(Number(first), Number(second));
  } else if (operator == null) {
    // if user click '=' before clicking an operator, compliment missing operator/first/second to proper value
    first = first== "" ? "0":first;
    second = second== "" ? "0":second;
    operator = holdValue;
    result = isValidNum(result)? result : Number(first);
  }
  if (isValidNum(result)) updateResult();
  else {
    if (result.toString().includes("e") || result.toString().includes("finity") || typeof(result)=="number") {throwException("OVERFLOW!");}
    else {
      throwException("Invalid Number!");
    }
  }
};

// Create listeners for "=" button 
// Added history function
document.getElementById("=").addEventListener("click", function(){
  if (result == null) { 
  evaluate();
  }
  else {
    first = result + ""; // accumulative calculation
    evaluate();
  }
  // Append to history textarea if result is valid
  if (isValidNum(result) && operator != holdValue && formula != "") {
    var finalFormula = formula + " = " + result + "\n";
    document.getElementById("history").value += finalFormula;
  }
  // set formula to "", without rendering to screen 
  formula = "";
});
