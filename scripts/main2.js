//{const currentyr = new Date();

//console.log(currentyr.getFullYear());}

//const currentYear = new Date().getFullYear();
//console.log(currentYear);

// Select the HTML element to manipulate
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

//document.addEventListener('DOMContentLoaded', function(){
	//const date = new Date();
	//const year = document.querySelector('currentyr');

	//function date() {
	   //year.innerHTML = new Date().getFullYear();
	//};

	//date();
//}
 // when the DOM is ready
//<script>
//document.addEventListener("DOMContentLoaded", function() { 
  // get the the span element
 // const yrSpan = document.querySelector('currentyr');
  // get the current year
 // const currentyr = new Date().getFullYear();
  // set the year span element's text to the current year
//  yrSpan.innerHTML = currentyr;
//});
//</script>

//document.addEventListener("DOMContentLoaded", function() { 
//const date = new Date();
//const year = date.getFullYear();
//document.querySelector('currentyr').innerHTML = year;};