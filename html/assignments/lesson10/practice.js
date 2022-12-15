const requestURL = 'https://bashashhazbaz.github.io/html/assignments/lesson9/data.json';
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

    
    const filters = {membership: 'Gold'};
const filteredArray = array.filter(item => Object.keys(filters).every(key => item[key] === filters[key]))
console.log('filteredArray', filteredArray);

//const membership = ['gold','silver','bronze','blue'];
//checkmembership = membership.filter(membership => membership > gold);

//console.log(checkmembership); // [ 2015, 2020 ]


    
    //const arr1 = data.filter(d => d.membership === 'gold');
    //console.log('arr1', arr1);
    
    //const arr2 = data.filter(d => d.membership === 'gold');
    //console.log('arr2', arr2);
    
    //const goldmembership = d => d.membership > gold && d.membership === 'gold';
    
   // const arr3 = data.filter(goldmembership);
   // console.log('arr3', arr3);

   // {users = users.filter(user => user.medium === "Oil on canvas") }

}

  getBusiness();
  //const prophets = getProphets();
  //displayProphets(data.prophets);

  //or

  //const data = getProphets();
  //displayProphets(data);