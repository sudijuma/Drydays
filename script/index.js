const API_URL = "http://rainydays.local/wp-json/wc/store/products";

const productDisplay = document.querySelector(".featured-products")

async function displayJackets(){
    try {
        const productCall = await fetch(API_URL);
        const productResponse = await productCall.json();
        for (let i = 0; i < productResponse.length; i++) {
            productDisplay.innerHTML +=`      <div class="featured-products-item">
            <div class="featured-products-item-image"></div>
            <p class="title">${productResponse[i].id}</p>
            <p class="description">${productResponse[i].description}</p>
            <p class="price">from 298kr</p>
            <button>view item</button>
          </div>"`
        }
    }catch (e) {
        console.log(e)
    }
}
displayJackets();