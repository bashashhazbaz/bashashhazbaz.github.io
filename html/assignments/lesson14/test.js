//Here is how to pick 3 random businesses once you have a filtered object:
for (let i = 0; i < 3; i++) {//you want to pick 3 businesses
    let rand = Math.floor(Math.random() * levels.length);//pick a random business from the array
    
    let icon = document.createElement("img");//this part is basically your display function
    let card = document.createElement("section");
    let h3 = document.createElement("h3");
    let link = document.createElement("a")
    
    
    h3.textContent = levels[rand].name;
    link.textContent = levels[rand].webUrl;
    
    link.setAttribute("href", levels[rand].webUrl);
    icon.setAttribute("src", levels[rand].imageIconUrl);
    icon.setAttribute("alt", `${levels[rand].name}'s icon`);
    
    card.appendChild(icon);
    card.appendChild(h3);
    card.appendChild(link);
    
    document.querySelector("#cards").appendChild(card);
    
    levels.splice(rand,1);//delete the business you just displayed, next time levels.length will be one shorter
    }

    //Also, here is an example of how to filter an JSON object based on matching values, it's a fruit example but does not match the JSON file for the final site:

    const citrus = allFruits.filter((fruit) =>
           fruit.type === 'orange' || fruit.type === 'lemon' || fruit.type === 'lime' || fruit.type === 'grapefruit'
             );

    //So, you would be left with a JSON object that has things like mandarin oranges, navel oranges, key limes, Meyer lemons, etc. in it, but not Fuji apples or Concord grapes.