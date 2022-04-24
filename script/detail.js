const queryString = window.location.search;

const params = new URLSearchParams(queryString);
console.log(params.get("id"));
const productID = params.get("id");

const API_URL = `https://mwakie.flywheelsites.com/wp-json/wc/store/products?${productID}`;

const productDisplay = document.querySelector(".featured-products");

async function displayDetail() {
  try {
    const productCall = await fetch(API_URL);
    const productResponse = await productCall.json();
    for (let i = 0; i < productResponse.length; i++) {
      productDisplay.innerHTML = `      <div class="featured-products-item">
      <div class="featured-products-item-image"><img src="${productResponse[i].images[0].src}" ></div>
      <p class="title">${productResponse[i].name}</p>
      <p class="short-description">${productResponse[i].description}</p>
      <p class="price">${productResponse[i].prices.price}kr</p>
      <button onclick="location.href='/specific.html?=${productResponse[i].id}'">view item</button>
    </div>`;
    }
  } catch (e) {
    console.log(e);
  }
}
displayDetail();
