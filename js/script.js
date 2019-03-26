"use strict";

// zmienna z adresem url i lista krajow :

var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

// implementacja funkcji :

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    // warunek sprawdzajacy czy pole nie jest puste :

    if (!countryName.length) countryName = 'Poland';

    // FETCH API :
    // funkcja logiki wyszukiwania:

    fetch(url + countryName)
        .then(function (resp) {
            return resp.json();
        })
        .then(showCountriesList);
}

// implementacja funkcji pokazujacej liste krajow :
// resp = obiekt JSON z funkcji fetch
function showCountriesList(resp) {

    countriesList.innerHTML = '';
    resp.forEach(function (item) {
        var liEl = document.createElement('li');
        liEl.innerText = item.name;
        countriesList.appendChild(liEl);
    });
}


// funkcja na klikniecie "szukaj" + nasluchiwanie :

document.getElementById('search').addEventListener('click', searchCountries);