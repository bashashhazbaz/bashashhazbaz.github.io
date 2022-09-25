const date = document.querySelector("#currentyr");
// Try to complete the method with options
try {
	const options = {
		//weekday: "long",
		//day: "numeric",
		//month: "long",
		year: "numeric"
	};
	date.innerHTML = `<span class="highlight">${new Date().toLocaleDateString("en-US", options)}</span>`;
} catch (e) {
	alert("Error with code or your browser does not support Locale");
}

document.getElementById('modify').innerHTML = document.lastModified
