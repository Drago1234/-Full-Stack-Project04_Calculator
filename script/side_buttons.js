/**
 * This file was implemented and documented by Yi on 07/04. 
 * This class implements side buttons to: skin-trigger, clean-memory-bar and clean-history-textarea
 */

// add listener for trigger button
document.getElementById("trigger1").addEventListener('click', function() {
  var url = document.getElementById('csslink');
  var skins = ["./style/dark_mode.css", "./style/style.css"]
  var newUrl = url.getAttribute("href") == skins[1] ? skins[0] : skins[1];
  url.setAttribute('href', newUrl);
});

//create clear history button
document.getElementById("trigger2").addEventListener('click', function() {
  document.getElementById("history").value = null;
});

//create clear memory button
document.getElementById("trigger3").addEventListener('click', function() {
  document.getElementById("memory_area").value = null;
});

//updated by Pranay 07/05/19 to make degree/rad conversion
//updated by Trevor 07/05/19 to fix bugs and logic errors
document.getElementById("deg").addEventListener('click', function() {
	if (degreeMode) {
	degreeMode = false;
	document.getElementById("deg").innerHTML = "deg";
	document.getElementById("currentTrigMode").innerHTML = "Current Trignometric Mode: Radians";
	} else {
	degreeMode = true;
	document.getElementById("deg").innerHTML = "rad";
	document.getElementById("currentTrigMode").innerHTML = "Current Trignometric Mode: Degrees";
	}
	
});
