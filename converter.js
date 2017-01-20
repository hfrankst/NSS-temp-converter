//converts user's input into Celsius
function toCelsius (temp) {
	var converted = document.getElementById("tempConverted");
	console.log("made it to celsius");
	console.log(temp);
	//math conversion
	var newTempF = (temp - 32) / 1.8; 
	converted.innerHTML = newTempF.toFixed(2);
	//if statements to change the color of the converted temps
	if(newTempF > 32) {
		converted.style.backgroundColor = "red";
		console.log("hot");
	}
	if(newTempF < 0) {
		converted.style.backgroundColor = "blue";
		console.log("cold");
	} else if(0 < newTempF && newTempF < 32) {
		converted.style.backgroundColor = "green";
		console.log("nice");
	}
}
//converts user's input into Fahrenheit
function toFahrenheit (temp) {
	converted = document.getElementById("tempConverted");
	console.log("made it to fahrenheit");
	console.log(temp);
	//math conversion
	newTempF = (temp * 1.8) + 32;
	converted.innerHTML = newTempF.toFixed(2);
	//if statements to change color of converted temps
	if(newTempF > 90) {
		converted.style.backgroundColor = "red";
		console.log("hot");
		console.log(newTempF);
	} 
	if(newTempF < 32) {
		converted.style.backgroundColor = "blue";
		console.log("cold");
	} else if(32 < newTempF && newTempF < 90) {
		converted.style.backgroundColor = "green";
		console.log("nice");
	}
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
var clearButton = document.getElementById("clear");
var celsiusButton = document.getElementById("celsius");
	console.log(celsiusButton);
var fahrenButton = document.getElementById("fahrenheit");
	console.log(fahrenButton);

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
  var userInput = document.getElementById("userTemp");
	console.log(userInput.value);
  if (celsiusButton.checked) {
  	toCelsius(userInput.value);
  } else if(fahrenButton.checked) {
  	toFahrenheit(userInput.value);
  } else {
  	alert("Choose a temperature!")
  }

}
//clears the field for new input
function clearField (clickEvent) {
	console.log("cleared");
	var userInput = document.getElementById("userTemp");
	userInput.value = "";
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
clearButton.addEventListener("click", clearField);