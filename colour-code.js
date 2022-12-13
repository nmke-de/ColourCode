const input = document.getElementById("in");
const body = document.getElementsByTagName("body")[0];

input.oninput = () => {
	body.style.setProperty("background-color", input.value);
};
