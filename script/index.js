const API_URL = "https://mwakie.flywheelsites.com/wp-json/wc/store/products";

const productDisplay = document.querySelector(".featured-products")

async function displayJackets(){
    try {
        const productCall = await fetch(API_URL);
        const productResponse = await productCall.json();
        for (let i = 0; i < productResponse.length; i++) {
            productDisplay.innerHTML +=`      <div class="featured-products-item">
            <div class="featured-products-item-image"></div>
            <p class="title">${productResponse[i].images.thumbnail}</p>
            <p class="description">${productResponse[i].name}</p>
            <p class="price">from 298kr</p>
            <button>view item</button>
          </div>`
        }
    }catch (e) {
        console.log(e)
    }
}
displayJackets();