const colorHexCodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("button");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
	let hexaColor = '#';  
	for(let i = 0; i < 6; i++){
		hexaColor += colorHexCodes[getRandomNumber()];
	}
	color.textContent = hexaColor;
	document.body.style.backgroundColor = hexaColor;	
});

function getRandomNumber() {
	return Math.floor(Math.random() * colorHexCodes.length);
}

