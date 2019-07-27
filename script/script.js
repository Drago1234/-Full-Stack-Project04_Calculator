/** This file was implemented by Yi at 06/24 
 * File splited by Yi at 07/03. One whole script file becomes multiple js files
 * This class is used to store core functions/variables of the calculator
*/

// Variables directly used for calculations
var first = ""; // first number: string of integer
var second = ""; // second number: string of integer
var operator = null; //a pointer that points to a function 
var result = null; // store result, null or number
var formula = ""; // display formula
var memory = "Nothing store in memory"; // memory
var degreeMode = false; //true -> degree mode

// Prototype of Array of KEYs that in the same class. Check HTML for details.
const numberKeys = document.getElementsByClassName("number");
const memoryKeys = document.getElementsByClassName("memory");
const unaryKeys = document.getElementsByClassName("unary");
const binaryKeys = document.getElementsByClassName("binary");
const clearKeys = document.getElementsByClassName("clear");
const trigKeys = document.getElementsByClassName("trig");

// Check if this is a valid number. 
function isValidNum (number) {
  return number>Number.MIN_SAFE_INTEGER && number<Number.MAX_SAFE_INTEGER && number != null;
}

// Render the latest result to screen
function updateResult() {
  if (isValidNum(result)) document.getElementById("result").innerHTML = result;
  else document.getElementById("result").innerHTML = 0;
};


// Render the latest formula to screen
function updateFormula() {
  document.getElementById("formula").innerHTML = formula;
};

//Update the current memory value
function updateMemory(){
	document.getElementById("memory_area").innerHTML = memory;
};

// Report error on the result bar
function throwException(error_message) {
  document.getElementById("formula").innerHTML = error_message;
  formula = "";
  first = "";
  second = "";
  operator = null;
  result = null;

  updateResult();

}

