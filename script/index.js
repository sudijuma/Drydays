console.log(document.location.search)
const queryString = window.location.search;

const params = new URLSearchParams(queryString);
console.log(params.get("id"));
const API_URL = "https://mwakie.flywheelsites.com/wp-json/wc/store/products";

const productDisplay = document.querySelector(".featured-products")

async function displayJackets() {
    try {
        const productCall = await fetch(API_URL);
        const productResponse = await productCall.json();
        for (let i = 0; i < productResponse.length; i++) {
            productDisplay.innerHTML += `      <div class="featured-products-item">
            <div class="featured-products-item-image"><img src=""></div>
            <p class="title"></p>
            <p class="description">${productResponse[i].name}</p>
            <p class="price">${productResponse[i].prices.price}</p>
            <button>view item</button>
          </div>`
        }
    } catch (e) {
        console.log(e)
    }
}
displayJackets();