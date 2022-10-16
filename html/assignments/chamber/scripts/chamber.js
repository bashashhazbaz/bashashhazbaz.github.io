const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

/*** Programming Notes **************************************
  Arrow Functions - es6 syntactically compact alternative to a regular function expression
  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  or https://www.w3schools.com/js/js_arrow_function.asp

  classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  */

  

//function toggleMenu () {
    //console.log("It worked!");
    //document.getElementById("primaryNav").classList.toggle("open");
    //document.getElementById("hamburgerBtn").classList.toggle("open");
//}

//const x = document.getElementById("hamburgerBtn")
//x.onclick = toggleMenu;



// select the elements to manipulate (output to)
//const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
//const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
//	now
//);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

//datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

//var banner = weekday; 
// {/

//var weekday = [
  //"Sunday",
  //"Monday",
  //"Tuesday",
  //"Wednesday",
  //"Thursday",
  //"Friday",
  //"Saturday"
//]
//var banner = weekday[now.getDay()];

//function checkValue(banner) {
  //if (weekday === "Monday","Tuesday")
    //if (b === 2)
      //console.log("a is 1 and b is 2");
    //else
      //console.log("a is not 1");
//}

//if (day == "Monday","Tuesday") {
	//document.writeln("<h2>Come join us for the chamber meet and greet Wednesday at 7:00 p.m.</h2>");
  //} 
  //else if (day == "Tuesday"){
	//document.writeln("<h2>Monday</h2>");
  //}
   //else {
	//document.writeln("<h2>n</h2>");

//}

const d = new Date();
let day = d.getDay()

if (day === 1) {
    document.getElementById("banner").style.display = "";
}
else if (day === 2) {
    document.getElementById("banner").style.display = "";
}
else {
    document.getElementById("banner").style.display = "none";
}


!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');


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

