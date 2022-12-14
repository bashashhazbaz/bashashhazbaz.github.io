//const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
//const cards = document.querySelector('.cards');

//async function getfruit() {
 //   const response = await fetch(requestURL);
 //   const data = await response.json();
    //const prophets = jsonObject['prophets']; 
 //   data.fruit.forEach(fruit => { displayfruit(fruit) })
    //return data;
//}



//function displayfruit(fruit) {

    //prophet.forEach(prophet => {
        
   // });

   //example for filtering the array
   //const utahprophets = prophets.filter(prophet => prophet.birthplace == "Utah");
   //utahprophets.forEach(prophet => {})

   
    // Create elements to add to the document
    //let card = document.createElement('section');
    //let h2 = document.createElement('h2');
    //let h3 = document.createElement('h3');
    //let h4 = document.createElement('h4');
    //let portrait = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    //h2.textContent = `${fruit.name}`;
    //h3.textContent = `Date of birth: ${prophet.birthdate}`;
    //h4.textContent = `Place of birth: ${prophet.birthplace}`;
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    //portrait.setAttribute('src', prophet.imageurl);
    //portrait.setAttribute(
      //  'alt', 
      //  `Portrait of  ${prophet.name} ${prophet.lastname}`
      //  );
   // portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    //card.appendChild(h2);
    //card.appendChild(h3);
   // card.appendChild(h4);
   // card.appendChild(portrait);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    //document.querySelector('div.cards').appendChild(card);
   // cards.appendChild(card);
 // }

 // getfruit();
  //const prophets = getProphets();
  //displayProphets(data.prophets);

  //or

  //const data = getProphets();
  //displayProphets(data);

  let dropdown = document.getElementById('food-dropdown');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose Fruit/Vegetable';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

fetch(url)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.warn('Looks like there was a problem. Status Code: ' + 
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
        let option;
    
    	for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
      	  option.text = data[i].name;
      	  option.value = data[i].abbreviation;
      	  dropdown.add(option);
    	}    
      });  
    }  
  )  
  .catch(function(err) {  
    console.error('Fetch Error -', err);  
  });

  

  const output = document.querySelector('#output');
function handleClick(e) {
  output.textContent += `You ordered ${food-dropdown} element\n`;
}

const container = document.querySelector('#container');
container.addEventListener('click', handleClick);