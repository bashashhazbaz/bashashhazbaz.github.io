const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

async function getProphets() {
    const response = await fetch(requestURL);
    const data = await response.json();
    //const prophets = jsonObject['prophets']; 
    data.prophets.forEach(prophet => { displayProphets(prophet) })
    //return data;
}



function displayProphets(prophet) {

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
    let portrait = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    h3.textContent = `Date of birth: ${prophet.birthdate}`;
    h4.textContent = `Place of birth: ${prophet.birthplace}`;
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute(
        'alt', 
        `Portrait of  ${prophet.name} ${prophet.lastname}`
        );
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(h4);
    card.appendChild(portrait);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    //document.querySelector('div.cards').appendChild(card);
    cards.appendChild(card);
  }

  getProphets();
  //const prophets = getProphets();
  //displayProphets(data.prophets);

  //or

  //const data = getProphets();
  //displayProphets(data);