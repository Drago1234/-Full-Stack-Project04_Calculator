/**
 * This file was implemented, tested and documented by Yi on 07/01
 * This class implements clear functions and creates event listeners for corresponding buttons
 */

// Restore first, second, operator, result, formula and update displays
function clear(){
  first = ""; 
  second = ""; 
  operator = null;
  result = null; 
  formula = ""; 
  updateFormula();
  updateResult();
}

// restore the second number and update the screen
function clearSecond() {
  formula = formula.replace(new RegExp(second + '$'), "");
  second = ""; 
  updateFormula();
}

// delete the last entered digit
function del() {
  if ("1234567890.".includes(formula.charAt(formula.length - 1))) {
    formula = formula.slice(0, -1);

  }
  if (operator == null) first = first=="" ? first : first.slice(0, -1);
  else second = second == "" ? second : second.slice(0, -1);
  updateFormula();
}


// Create listeners for clear buttons (DEL, C, CE)
Array.prototype.forEach.call(clearKeys, function (element, index) {
  element.addEventListener("click", function(){
    var ch = element.innerHTML;
    switch (ch) {
      case "DEL":
        del();
        break;
      case 'C':
        clear();
        break;
      case "CE":
        clearSecond();
        break;
    }
  });
});
