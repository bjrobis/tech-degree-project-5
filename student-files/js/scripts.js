//Selects the gallery container element 
let gallery = document.getElementById('gallery');

//Selects the body of the document
let body = document.querySelector('body');

//accepts parameters for the selected element and variable containing the HTML and inserts the HTML into the selected element 
function insertHTML(element, HTML) {
    element.insertAdjacentHTML('beforeend', HTML);
}


//function converts the data to json, and logs an error message if it fails
function fetchData(url) {
    return fetch(url)
      .then(res => res.json())
      .catch(error => console.log('There was a problem fetching data', error))
  }

//fetches the data (12 random profies) from the api URL, creates variables for all the needed data and attaches the profile card to the document
  fetchData('https://randomuser.me/api/?results=12')
    .then(data => {
        let info = data.results;
       for (let i = 0; i < info.length; i++) {
        let image = info[i].picture.thumbnail;
        let firstName = info[i].name.first;
        let lastName = info[i].name.last;
        let email = info[i].email;
        let city = info[i].location.city;
        let cellPhone = info[i].cell;
        let street = info[i].location.street;
        let state = info[i].location.state;
        let zip = info[i].location.postcode;
        let dob = info[i].dob;
        //The HTML that will be inserted into the gallery section
        let galleryHTML = `
        <div class="card">
        <div class="card-img-container">
        <img class="card-img" src="${image}" alt="profile picture">
        </div>
        <div class="card-info-container">
        <h3 id="name" class="card-name cap">${firstName} ${lastName}</h3>
        <p class="card-text">${email}</p>
        <p class="card-text cap">${city}, ${state}</p>
        </div>
        </div>
        `;
        insertHTML(gallery, galleryHTML);

        //The HTML that will be inserted into the modal section
        let modalHTML = `
        <div class="modal-container">
        <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
        <img class="modal-img" src="${image}" alt="profile picture">
        <h3 id="name" class="modal-name cap">${firstName} ${lastName}</h3>
        <p class="modal-text">${email}</p>
        <p class="modal-text cap">${city}</p>
        <hr>
        <p class="modal-text">${cellPhone}</p>
        <p class="modal-text">123 ${street}, ${city}, ${state} ${zip}</p>
        <p class="modal-text">Birthday: ${dob}</p>
        </div>
        </div>
        `
        
        //selects all contact cards
         let cards = document.querySelectorAll('.card');
         
         cards.forEach(card => {
              card.addEventListener('click', (e) => {
              insertHTML(body, modalHTML);
              });
         });
    }
     
})

//***Search Bar

//Selects the search bar container element 
let searchBar = document.querySelector('.search-container');

//The HTML that will be inserted for the Search Bar
searchBarHTML = `
<input type="search" id="search-input" class="search-input" placeholder="Search...">
<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>
`;

//Adds the searchBarHTML into the searchbar element
insertHTML(searchBar, searchBarHTML);




