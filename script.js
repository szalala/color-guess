document.addEventListener("DOMContentLoaded", function() {
var numSquares = (6);
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = (3);
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) { 
		squares[i].style.background = colors[i];
	} else {
		squares[i].style.display = "none";
	}
}
});


hardBtn.addEventListener("click", function() {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	
}
});


//button resetu kolorów
resetButton.addEventListener("click", function() {
	//generate new colors
	colors = generateRandomColors(numSquares);
	//pick new colors
	pickedColor = pickColor();
	//display color match picked color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New colors";
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	};
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = " ";

});


//zgadywanie kolorów

for(var i =0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function() {
		//grab color after click
		var clickedColor = this.style.backgroundColor;
		//compare picked to clicked
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct. Good job!";
			changeColors(pickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?"

		} else {
			this.style.backgroundColor = "#5a6794";
			messageDisplay.textContent = "Try Again"
		}

	});
};

function changeColors(color) {
	//loop through squares
	for(var i = 0; i < squares.length; i++) { 
	//change colors of squares
	squares[i].style.backgroundColor = color;
	}
};

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//repeat 
	for(var i = 0; i < num; i++) { 
	arr.push(randomColor());
	}
	//return array
	return arr;
};

function randomColor() {
	//pick red
	var r = Math.floor(Math.random() * 256);
	//pick green
	var g = Math.floor(Math.random() * 256);
	//pick blue
	var b = Math.floor(Math.random() * 256);
	//return rgb
	return "rgb(" + r + ", " + g + ", " + b + ")";
};















});