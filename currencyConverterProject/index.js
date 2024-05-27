`use strict`;

// **********************************
// **********************************

// Getting Acess to the dom elements

const inputBtn = document.getElementById(`currency-input`);
const selectCurrency = document.getElementById(`currency-select`);
const selectCountry = document.getElementById(`country-select`);
const convertBtn = document.getElementById(`result`);

// ***********************************
// ***********************************

// Currency Coverter API

const url = `https://www.floatrates.com/daily/usd.json`;

// Creating currency converter function to consume this API

const convertCurrency = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

// Now consuming the promise
convertCurrency().then((data) => {
  let html = ``;
  for (let key in data) {
    let currecyName = data[key][`name`];
    let countryCode = data[key][`code`];

    html += `
    <option value="${countryCode}">${currecyName}</option>
    `;
  }
  selectCurrency.innerHTML = html;
});
