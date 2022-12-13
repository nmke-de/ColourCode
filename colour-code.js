const input = document.getElementById("in");
const body = document.getElementsByTagName("body")[0];

window.onload = () => {
	input.value = window.location.hash;
	body.style.setProperty("background-color", window.location.hash);
}

input.oninput = () => {
	body.style.setProperty("background-color", input.value);
	window.location.hash = input.value;
};
