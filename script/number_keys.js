/**
 * This file was implemented, tested and documented by Yi on 06/24. Originally in script.js
 * This class implements buttons event listeners to handle user input properly
 */


// Create listeners for numberKeys: (1234567890 and '.')
Array.prototype.forEach.call(numberKeys, function(element, index) {
  element.addEventListener("click", function(){
    var ch = element.innerHTML;
    // clear all data if result is not null. 
    if (result != null) {
      // For example, if you click 1+1= then click a number, you are expecting a new calculation
      clear();  //restore to initial state
    }
    // adding digit to first or second; DO NOT ADD if ch is '.' and '.' already exists 
    if (operator == null && second == "") {
      if (ch != '.' || !first.includes('.')) {
        if (isValidNum(first+ch)) {first += ch; formula += ch;}
        if (first == "" && ch == ".") {first += "0"+ch; formula += "0"+ch;}
      }
    } else {
      if (ch != '.' || !second.includes('.')) {
        if (isValidNum(second+ch)) {second += ch; formula += ch;}
        if (second == "" && ch == ".") {second += "0"+ch; formula += "0"+ch;}
      }
    }
    updateFormula();
  });
});
