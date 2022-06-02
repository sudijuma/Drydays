const API_URL = `https://mwakie.flywheelsites.com/wp-json/wc/store/products/`;
const productDisplay = document.querySelector(".featured-products");

async function displayJackets() {
  try {
    const productCall = await fetch(API_URL);
    const productResponse = await productCall.json();
    for (let i = 0; i < productResponse.length; i++) {
      productDisplay.innerHTML += `<div class="featured-products-item">
            <div class="featured-products-item-image-box"><img src="${productResponse[i].images[0].src}"></div>
            <p class="title">${productResponse[i].name}</p>
            <p class="short-description">${productResponse[i].short_description}</p>
            <p class="price">${productResponse[i].prices.price}kr</p>
            <a href="/specific.html?id=${productResponse[i].id}">View details</a>
          </div>`;
    }
  } catch (e) {
    console.log(e);
  }
}
displayJackets();
