// Alert for testing
function showAlert() {
	alert("Hello, world!");
}

// Event handler for the Bigger button
document.getElementById("biggerButton").onclick = function () {
	console.log("Bigger button pressed")
	alert("Hello, world!"); // Show the alert box
	const textArea = document.getElementById("textArea");
	textArea.style.fontSize = "24pt"; // Increase the font size
};

// Event handler for applying styles based on radio button selection
function applyStyle() {
	const textArea = document.getElementById("textArea");
	const fancy = document.getElementById("fancy").checked;

	if (fancy) {
		textArea.style.fontWeight = "bold";
		textArea.style.color = "blue";
		textArea.style.textDecoration = "underline";
	} else {
		textArea.style.fontWeight = "normal";
		textArea.style.color = "black";
		textArea.style.textDecoration = "none";
	}
}

// Event handler for the Moo button
function applyMoo() {
	const textArea = document.getElementById("textArea");
	let sentences = textArea.value.split(".");
	sentences = sentences.map(sentence => {
		if (sentence.trim()) {
			return sentence.trim().toUpperCase() + "-Moo";
		}
		return sentence;
	});
	textArea.value = sentences.join(". ");
}