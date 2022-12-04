const requestURL = 'https://github.com/bashashhazbaz/bashashhazbaz.github.io/blob/main/html/data.json';
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