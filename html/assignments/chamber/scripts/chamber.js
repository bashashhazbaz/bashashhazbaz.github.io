









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
document.getElementById("TextBox1").value=str;
document.getElementById("HiddenField1").value=str;



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

const subTime = document.querySelector("#submissionTime");

subTime.value = new Date();




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







//function .getWeather(city, callback) {
  //var url = 'http://api.openweathermap.org/data/2.5/weather';
  //$.ajax({
    //dataType: "jsonp",
    //url: url,
    //jsonCallback: 'jsonp',
    //data: { q: city },
    //cache: false,
    //success: function (data) {
      //callback(data.main.temp);
    //}
  //});
//}




//const date = document.querySelector("#currentyr");
// Try to complete the method with options
//try {
	//const options = {
		//weekday: "long",
		//day: "numeric",
		//month: "long",
		//year: "numeric"
	//};
	//date.innerHTML = `<span class="highlight">${new Date().toLocaleDateString("en-US", options)}</span>`;
//} catch (e) {
	//alert("Error with code or your browser does not support Locale");
//}

//document.getElementById('modify').innerHTML = document.lastModified
//document.getElementById("TextBox1").value=str;
//document.getElementById("HiddenField1").value=str;







//function getWeather(position, callback) {
  //var lat = position.coords.latitude;
  //var lon = position.coords.longitude;

  // Yahoo's PlaceFinder API http://developer.yahoo.com/geo/placefinder/
  // We are passing the R gflag for reverse geocoding (coordinates to place name)
  //var geoAPI = 'http://where.yahooapis.com/geocode?location='+lat+','+lon+'&flags=J&gflags=R&appid='+APPID;

  // Forming the query for Yahoo's weather forecasting API with YQL
  // http://developer.yahoo.com/weather/
  //var wsql = 'select * from weather.forecast where woeid=WID and u="'+DEG+'"',
  //weatherYQL = 'http://query.yahooapis.com/v1/public/yql?q='+encodeURIComponent(wsql)+'&format=json&callback=?', code, city, results, woeid;

  // Issue a cross-domain AJAX request (CORS) to the GEO service (not supported in Opera and IE)
 // $.getJSON(geoAPI, function(r) {
   //   if (r.ResultSet.Found == 1) {
    //      results = r.ResultSet.Results;
     //     city = results[0].city;
     //     code = results[0].statecode || results[0].countrycode; 
     //     woeid = results[0].woeid; // the the city identifier for the weather API

          // Make a weather API request (it is JSONP, so CORS is not an issue):
     //     $.getJSON(weatherYQL.replace('WID', woeid), function(r) {
     //         if (r.query.count == 1) {
     //             var item = r.query.results.channel.item.condition;
      //            callback(item.temp
      //        } else {
      //            console.error("Error retrieving weather data!");
      //        }
      //    });
  //    }
 // }).error(function(){
   //   console.error("Sorry, your browser does not support CORS requests!");
 // });
//}


//$(document).ready(function() {

//	var getIP = 'http://ip-api.com/json/',
//		openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather',
//		APPID = 'APPID';

//	$.getJSON(getIP).done(function(location) {

//	$.getJSON(openWeatherMap, {
//			lat: location.lat,
//			lon: location.lon,
//			APPID: APPID
//		})
//		.done(function(weather) {

//			var celsius = weather.main.temp - 273.15;
//			var fahrenheit = celsius * 1.8 + 32;

//			$('.currentLocation').text('Hello! Your current location is ' + location.city + ', ' + location.region + ', ' + location.country);

//			$('.btn-celsius').on('click', function() {
//				$('.currentTemperature').text('The current temperature in ' + location.city + ' is ' + celsius.toFixed(0) + ' degrees Celsius.');
//			});

//			$('.btn-fahrenheit').on('click', function() {
//				$('.currentTemperature').text('The current temperature in ' + location.city + ' is ' + fahrenheit.toFixed(0) + ' degrees Fahrenheit.');
//			});
//		});
//	});
//});



//Now we need to determine the constant of one of the id functions. Because no html function can be used directly in JavaScript.
//var inputval = document.querySelector("#cityinput");
//var btn = document.querySelector("#add");
//var city = document.querySelector("#cityoutput");
//var descrip = document.querySelector("#description");
//var temp = document.querySelector("#temp");
//var wind = document.querySelector("#wind");

//apik = "3045dd712ffe6e702e3245525ac7fa38";

//kelvin to celcious. 1 Kelvin is equal to -272.15 Celsius.

//function convertion(val) {
  //return (val - 273).toFixed(2);
//}
//Now we have to collect all the information with the help of fetch method


//btn.addEventListener("click", function () {
  //This is the api link from where all the information will be collected

  //fetch(
    //"https://api.openweathermap.org/data/2.5/weather?q=" +
      //inputval.value +
      //"&appid=" +
      //apik
  //)
   // .then((res) => res.json())

    //.then(data => console.log(data))

   // .then((data) => {
      //Now you need to collect the necessary information with the API link. Now I will collect that information and store it in different constants.

     // var nameval = data["name"];
     // var descrip = data["weather"]["0"]["description"];
     // var tempature = data["main"]["temp"];
     // var wndspd = data["wind"]["speed"];
      //Now with the help of innerHTML you have to make arrangements to display all the information in the webpage.
    //  city.innerHTML = `Weather of <span>${nameval}<span>`;
    //  temp.innerHTML = `Temperature: <span>${convertion(
    //    tempature
    //  )} C</span>`;
    //  description.innerHTML = `Sky Conditions: <span>${descrip}<span>`;
    //  wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`;
    //})

    //Now the condition must be added that what if you do not input anything in the input box.
   // .catch((err) => alert("You entered Wrong city name"));
//});
//If you click on the submit button without inputting anything in the input box or typing the wrong city name then the above text can be seen.




//Perceived Temperature = 13.12 + 0.6215T — 11.37 (V⁰-¹⁶) + 0.3965T (V⁰-¹⁶)

//var windchill = document.querySelector("#windchill");

//const windChillCelsius = (temperature, windSpeed) =>
//  13.12 +
//  0.6215 * temperature -
//  11.37 * windSpeed ** 0.16 +
//  0.3965 * temperature * windSpeed ** 0.16;

//  const windChillFahrenheit = (temperature, windSpeed) =>
//  35.74 +
//  0.6215 * temperature -
//  35.75 * windSpeed ** 0.16 +
 // 0.4275 * temperature * windSpeed ** 0.16;

//  export const calculateWindchill = (
 //   temperature,
 //   windSpeed,
 //   units = undefined
 // ) => {
 //   const result =
 //     units === "US"
 //       ? fahrenheit(temperature, windSpeed)
  //      : celsius(temperature, windSpeed);
 //   return Math.round(result);
//  };

  //Convert numbers from one system to another

  //Convert Kilometers and Miles:
//  const kmToMiles = (km) => km * 0.621371;
//const milesToKm = (miles) => miles / 0.621371;

//Convert Celsius and Fahrenheit:
//const celsiusToFahrenheit = (celsius) => celsius * 1.8 + 32;
//const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) / 1.8;

//windchill.innerHTML = `Wind Chill: <span>${calculateWindchill}<span>`;

//const requestURL = 'https://github.com/bashashhazbaz/bashashhazbaz.github.io/blob/main/html/assignments/lesson9/data.json';
const requestURL = '';

const cards = document.querySelector('.cards');

async function getBusiness() {
    const response = await fetch(requestURL);
    const data = await response.json();
    //const prophets = jsonObject['prophets']; 
    data.business.forEach(business => { displayBusiness(business) })
    //return data;
}



function displayBusiness(business) {

    //prophet.forEach(prophet => {
        
   // });

   //example for filtering the array
   //const utahprophets = prophets.filter(prophet => prophet.birthplace == "Utah");
   //utahprophets.forEach(prophet => {})

   
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h4');
    let h5 = document.createElement('h5');
    let h6 = document.createElement('h6');
    let portrait = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${business.name}`;
    h3.textContent = `${business.address}`;
    h4.textContent = `${business.phone}`;
    h5.textContent = `Membership Level: ${business.membership}`;
    h6.textContent = `${business.website}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', business.imageurl);
    portrait.setAttribute(
        'alt', 
        `Portrait of  ${business.name}`
        );
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(h4);
    card.appendChild(h5);    
    card.appendChild(h6);
    card.appendChild(portrait);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    //document.querySelector('div.cards').appendChild(card);
    cards.appendChild(card);
  }

  getBusiness();
  //const prophets = getProphets();
  //displayProphets(data.prophets);

  //or

  //const data = getProphets();
  //displayProphets(data);

  const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}


//select output elements
const temperature = document.querySelector('#temperature');
const description = document.querySelector('#currently');
const weathericon = document.querySelector('#weathericon');
const caption = document.querySelector('#figcaption');

//get the weather data from the API-openweathermap.org
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=columbia,mo,usa&units=imperial&appid=6824c8eed44ab6b5f5d379310efbdb6e';

async function apiFetch(){
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            console.log('Response not OK `${await response.text()}`');
        }
    } catch (error) {
        console.log('Error: ${error.message}');
        
    }
}

apiFetch();

//capitalize
function capitalize(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

//display the results
function displayResults(data) {
    temperature.textContent = data.main.temp.toFixed(0);
    let desc = capitalize(data.weather[0].description);
    //let desc = capitalize(data.weather[0]).description;
    description.textContent = desc;
    caption.textContent = `Icon of current weather condition at McBaine which is ${desc}`;
    weathericon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weathericon.alt = desc;
}


document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazy");    
  var lazyloadThrottleTimeout;
  
  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
    
    lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);
  }
  
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});



