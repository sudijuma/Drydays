const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const productID = params.get('id');
const API_URL = `https://mwakie.flywheelsites.com/wp-json/wc/store/products/${productID}`;
const productDisplay = document.querySelector(".featured-products");

async function displayJackets() {
  try {
    const productCall = await fetch(API_URL);
    const productResponse = await productCall.json();
    productDisplay.innerHTML = `<div class="featured-products-item">
            <div class="featured-products-item-image"><img src="${productResponse.images[0].src}"></div>
            <p class="title">${productResponse.name}</p>
            <p class="short-description">${productResponse.description}</p>
            <p class="price">${productResponse.prices.sale_price}${productResponse.prices.currency_prefix}</p>
          </div>`;
  } catch (e) {
  }
}
displayJackets(); 

const space_api = "https://api.nasa.gov/planetary/apod?api_key=bQda8zxBMGQUcbPIvQRKVczRhCkq1bJJDy5Jiq6V";
console.log(space_api);
