const toggleMenu = document.querySelector(".menu-toggle"),
      closeCartBtn = document.querySelector(".close-cart"), 
      cartDOM = document.querySelector(".cart-submenu"),
      cartOverlay = document.querySelector(".cart-overlay");

    toggleMenu.addEventListener("click", () => {
    cartOverlay.classList.add("transparentBcg");
    cartDOM.classList.add("showCart"); 
  });
  
  closeCartBtn.addEventListener("click", () => {
cartOverlay.classList.remove("transparentBcg");
cartDOM.classList.remove("showCart"); 
});


let shop = document.getElementById("shop");

let productCategory = document.getElementsByClassName("category");
let productGroup = document.getElementsByClassName("list-category");



let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  
    return (shop.innerHTML =  shopItemsData.map((x) => {

        let {id, name, price, desc, img, category} = x

        let search = basket.find((x) => x.id === id) || [];

        return  `
        <div class='item ${category} ${name}' >
        <img height="200" width="200" src=${img} alt="">
        <div class="details">
            <h3 class="name">${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h3>GHc${price}.00</h3>
            <div class="buttons">
                <i onclick="decrement(${id})" class="fa fa-minus"></i>
                <h4 id=${id} class="quantity">
                ${search.item === undefined? 0: search.item}
                </h4>
                <i onclick="increment(${id})"  class="fa fa-plus"></i>
            </div>
            </div>
        </div>
    </div>
        `
    }).join(""));
}

generateShop(); 


let increment = (id) =>{

    let search = basket.find((x) => x.id === id);

    if(search === undefined) {
        basket.push({
            id:id,
            item:1,
        })
    }
    else {
        search.item +=  1
    }

    update(id)

 localStorage.setItem("data", JSON.stringify(basket)); 
};

let decrement = (id) =>{
   
    let search = basket.find((x) => x.id === id);
    if(search === undefined) return;
    else if(search.item === 0)  return;
    else {
        search.item -=  1
    }

    update(id);
    
    basket = basket.filter((x) => x.item !== 0); 

    localStorage.setItem("data", JSON.stringify(basket)); 
}

let update = (id) =>{
    let search = basket.find((x) => x.id === id);
       console.log(search.item);
    document.getElementById(id).innerHTML = search.item;

    calculation ()
}

let calculation = () => {
    cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x+y, 0)
}
calculation (); 

const btns = document.querySelectorAll('.btn');
const items = document.querySelectorAll('.item'); 
 
for (i = 0; i< btns.length; i++) {
    btns[i].addEventListener("click", (e) => {
        e.preventDefault();

        const filterProduct = e.target.dataset.filter;
    
        items.forEach((item) => {
            if(filterProduct == "all") {
                item.style.display = "block";
            } else {
                if(item.classList.contains(filterProduct)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none"; 
                }
            }
        })
      
    })
}
const inputSearch = document.querySelector(".input-search");

inputSearch.addEventListener("keyup", (e)=> {
e.preventDefault();
const searchValue = inputSearch.value.toLowerCase().trim();

for (i = 0; i < items.length; i++) {
    if(items[i].classList.contains(searchValue)) {
        items[i].style.display = "block";
    } else if (searchValue == "") {
        items[i].style.display = "block";
    } else {
        items[i].style.display = "none"; 
    }
}
})



