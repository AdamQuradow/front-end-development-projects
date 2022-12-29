let Data = [ 
    {
        id:1,
        brand: "Lacoste", 
        cat: "casual",
        name: "casual",
        price: 130.00,
        img: "img/shirt-1.jpg"
    }, 
    {
        id:2,
        cat: "shirt",
        brand: "Versacci", 
        name: "shirt",
        price: 60.00,
        img: "img/shirt-2.jpg"
    }, 
    {
        id:3,
        cat: "shirt",
        brand: "Versacci", 
        name: "shirt",
        price: 44.00,
        img: "img/shirt-3.jpg"
    }, 
    {
        id:4,
        cat: "shirt",
        name: "shirt",
        price: 63.40,
        img: "img/shirt-4.jpg"
    }, 
    {
        id:5,
        cat: "casual",
        brand: "Lacoste", 
        name: "casual",
        price: 80.00,
        img: "img/shirt-5.jpg"
    }, 
    {
        id:6,
        cat: "casual",
        brand: "Luis Vuiton", 
        name: "casual",
        price: 63.50,
        img: "img/shirt-6.jpg"
    }, 
    {
        id:7,
        cat: "casual",
        brand: "Luis Vuiton", 
        name: "casual",
        price: 55.00,
        img: "img/shirt-7.jpg"
    }, 
    {
        id:8,
        cat: "shirt",
        brand: "Luis Vuiton", 
        name: "shirt",
        price: 43.00,
        img: "img/shirt-8.jpg"
    }, 
    {
        id:9,
        cat: "suit",
        brand: "Polo", 
        name: "suit",
        price: 150.00,
        img: "img/suit-1.jpg"
    }, 
    {
        id:10,
        cat: "suit",
        brand: "Polo", 
        name: "suit",
        price: 100.00,
        img: "img/suit-2.jpg"
    }, 
    {
        id:11,
        cat: "suit",
        brand: "Dolci & Gabbana", 
        name: "suit",
        price: 123.00,
        img: "img/suit-3.jpg"
    },
    {
        id:12,
        cat: "Pant",
        brand: "Zara",
        name: "Pant",
        price: 94.50,
        img: "img/trouser.jpg"
    }, 

];

const productsContainer = document.querySelector(".products"),
      productContainer = document.querySelector(".product"),
      searchInput = document.querySelector(".search"),
      categoriesContainer = document.querySelector(".cats"),
      priceRange = document.querySelector(".priceRange"),
      priceValue = document.querySelector(".priceValue"),
      brandContainer = document.querySelectorAll(".brand");

const displayProducts = (Data) => {
    productsContainer.innerHTML = Data.map((product)=> 

      `
        <div class="products">
                <div class="product ${product.brand}">
                    <img src=${product.img} alt="">
                  <span class="name">${product.name}</span>
                  <span class="priceTag">$${product.price.toFixed(2)}</span>
                </div>
            </div>
        `
    ).join("");
}

displayProducts(Data);

searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();

    if(value){

        displayProducts(Data.filter(item => item.name.toLocaleLowerCase().indexOf(value) !== -1))

    } else {
        displayProducts(Data);
    }
})

const setCategories = () => {
    const allCats = Data.map((item) => item.cat);
    const categories = ["All", ...allCats.filter((item, i) => {
      return allCats.indexOf(item) === i;
    }),
];
    categoriesContainer.innerHTML = categories.map(cat => 
        `
        <span class="cat">${cat}</span>
        `
        ).join("");

categoriesContainer.addEventListener("click", (e) => {
    const selectedCat = e.target.textContent;
    selectedCat === "All" ? displayProducts(Data)
     : displayProducts(Data.filter((item) => item.cat == selectedCat)); 
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
    const priceList = Data.map((item) => item.price);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);

    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "$" + maxPrice;

    priceRange.addEventListener("input", (e) => {
        priceValue.textContent = "$" + e.target.value;

        displayProducts(Data.filter((item) => item.price <= e.target.value)); 
    })

}
setPrices()