

// VARIABLE 
const cartBtn = document.querySelector(".cart-btn"),
      closeCartBtn = document.querySelector(".close-cart"), 
      clearCartBtn = document.querySelector(".clear-btn"),
      cartDOM = document.querySelector(".cart"),
      cartOverlay = document.querySelector(".cart-overlay"),
      cartItems = document.querySelector(".cart-items"),
      cartTotal = document.querySelector(".cart-total"),
      cartContent = document.querySelector(".cart-content"),
      productDOM = document.querySelector(".products-center");
    
      
//  Toggle Cart
      cartBtn.addEventListener("click", () => {
          cartOverlay.classList.add("transparentBcg");
          cartDOM.classList.add("showCart"); 
        });
        
        closeCartBtn.addEventListener("click", () => {
    cartOverlay.classList.remove("transparentBcg");
    cartDOM.classList.remove("showCart"); 
});


//display Items
let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = (shopData) => {

    return ( productDOM.innerHTML =  shopData.map((x) => {

        let {id, title, price, image, category} = x

        return  `
        <article class="product ${category}">
        <div class="img-container">
            <img src=${image} class="product-img" alt="">
            <button onclick="addToCart(${id})" class="bag-btn" data-id=${id}>
              <i class="fas fa-shopping-cart"></i>
              add to cart
            </button>
            <h3>${title}</h3>
            <h4>${price.toFixed(2)}</h4>
        </div>
        </article>
        `
    }).join(""));

}

generateShop(shopData); 

let addToCart = (id) => {

let search = basket.find((x) => x.id === id); 
if(search == undefined) {
   let bagBtn = document.querySelector(".bag-btn");
    
    basket.push({
           id : id,
           item: 1,
   });
} 

localStorage.setItem("data", JSON.stringify(basket)); 
calculation()

}

let calculation = () => {
    let cartIcon = document.getElementById("cart-items");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x+y, 0);
}

calculation(); 

let createCartItems = () => {
    
    if(basket.length !== 0 ) {
      return (cartContent.innerHTML = basket.map((x) => {
        
        let {id, item} = x
        let search = shopData.find((y) => y.id === id) || []; 
        return ` <div class="cart-item">
        <img src=${search.image} alt="">
        <div>
            <h4>${search.title}</h4>
            <h5>Ghc ${search.price}</h5>
            <span class="remove-item"><i class="fas fa-trash"></i></i>  remove</span>
        </div>
        <div>
            <i onclick="increment(${id})" class="fas fa-chevron-up"></i>
            <p id=${id} class="item-amount">${item}</p>
            <i onclick="decrement(${id})" class="fas fa-chevron-down"></i>
        </div>
    </div>`; 
      }).join(""));
    } else {
        cartContent.innerHTML =``; 
    } 
}
 
createCartItems();

let increment = (id) => {
    console.log(id);
    let search = basket.find((x) => x.id === id); 
    if(search == undefined) {
       let bagBtn = document.querySelector(".bag-btn");
        
        basket.push({
               id : id,
               item: 1,
       });
    } else {
        search.item +=1
    }
    
 
    update(id)
    localStorage.setItem("data", JSON.stringify(basket)); 
    
}

let decrement = (id) => {
    let search = basket.find((x) => x.id === id);
    if(search === undefined) return;
    else if(search.item === 0)  return;
    else {
        search.item -=  1
    }

    update(id);
    localStorage.setItem("data", JSON.stringify(basket)); 
}

let update = (id) => {
    let search = basket.find((x) => x.id === id); 
    document.getElementById(id).innerHTML = search.item;
    calculation();
}

// Items Catergory 
const searchInput = document.querySelector(".search"),
      categoriesContainer = document.querySelector(".cats"),
      priceRange = document.querySelector(".priceRange"),
      priceValue = document.querySelector(".priceValue"),
      brandContainer = document.querySelectorAll(".brand");


searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();

    if(value){

        generateShop(shopData.filter(item => item.title.toLocaleLowerCase().indexOf(value) !== -1))

    } else {
        generateShop(shopDat);
    }
})

const setCategories = () => {
    const allCats = shopData.map((item) => item.category);
    const categories = ["All", ...allCats.filter((item, i) => {
      return allCats.indexOf(item) === i;
    }),
];
categoriesContainer.innerHTML = categories.map(category => 
        `
        <span class="cat">${category}</span>
        `
        ).join("");

categoriesContainer.addEventListener("click", (e) => {
    const selectedCat = e.target.textContent;
    selectedCat === "All" ? generateShop(shopData)
     : generateShop(shopData.filter((item) => item.category == selectedCat)); 
})
};

for (i = 0; i < brandContainer.length; i++) {
    brandContainer[i].addEventListener("click", (e) => {
        e.preventDefault();

        const filterProduct = e.target.dataset.filter;
            
        productContainer.forEach((x) => {
            if(filterProduct == "all") {
                item.style.display = "flex";
            } else {
                if(item.classList.contains(filterProduct)) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
            }
        })
      
    })
}


setCategories()

const setPrices = () => {
    const priceList = shopData.map((item) => item.price);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);

    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "$" + maxPrice;

    priceRange.addEventListener("input", (e) => {
        priceValue.textContent = "$" + e.target.value;

        generateShop(shopData.filter((item) => item.price <= e.target.value)); 
    })

}
setPrices()
      

// cart items 

    
 


