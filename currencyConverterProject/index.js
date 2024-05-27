`use strict`;

// **********************************
// **********************************

// Getting Acess to the dom elements

const selectCurrency = document.getElementById(`currency-select`);
const selectCountry = document.getElementById(`country-select`);
const convertBtn = document.getElementById(`result`);
const convertedPriceContainer = document.getElementById(
  `coverted-price-container`
);
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
  let currencyHtml = ``;
  let countryHtml = ``;
  let convertedPriceHtml = ``;
  for (let key in data) {
    let currecyName = data[key][`name`];
    let countryCode = data[key][`code`];

    currencyHtml += `
    <option value="${countryCode}">${currecyName}</option>
    `;

    countryHtml += `
    <option value="${countryCode}">${countryCode}</option>
    `;
  }

  // Appending generated data into html
  selectCurrency.innerHTML = currencyHtml;
  selectCountry.innerHTML = countryHtml;

  // Adding the functuanility to the conversion btn

  convertBtn.addEventListener(`click`, function (e) {
    const inputBtn = document.getElementById(`currency-input`);
    const currecyInput = Number(inputBtn.value);
    const countryKey = selectCountry.value.toLowerCase();
    const converionRate = data[countryKey][`rate`];
    const convertedMoney = currecyInput * converionRate;
    console.log(convertedMoney);

    // Appending it to converted Price Container
    convertedPriceHtml = `
     <p class="convertedMoney">${convertedMoney}</p>
    `;
    convertedPriceContainer.innerHTML = convertedPriceHtml;
  });
});
