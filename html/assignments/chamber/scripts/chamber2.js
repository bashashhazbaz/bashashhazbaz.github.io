//navigation
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);


// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};






//const date
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






//last modified
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





//hidden field date
const subTime = document.querySelector("#submissionTime");

subTime.value = new Date();





//banner date announcement
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



//weather option?
//!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');







//business card stuff
const requestURL = 'https://github.com/bashashhazbaz/bashashhazbaz.github.io/blob/main/html/assignments/chamber/json/data2.json';
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






//api fetch
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





//lazy load
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
  
  
  
  
