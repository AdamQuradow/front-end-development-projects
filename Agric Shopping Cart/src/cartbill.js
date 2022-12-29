let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
    cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x+y, 0)
}
calculation (); 

let generateCartItems = () => {
   if(basket.length !== 0) {
    return (shoppingCart.innerHTML = basket.map((x) => {

        let {id, item} = x;
        let search =  shopItemsData.find((y) => y.id === id) || [];
         return `
        <div class="cart-item">
          <img width="80" src=${search.img} alt="" />
          <div class="details">
          <div class="title-price-trash">
              <h5 class="title-price">
              <p class="name"> ${search.name} </p>
              <p class="cart-item-price"> GHc${search.price}.00 </p>
              </h5>
              <i onclick="removeItem(${id})"  class="fa fa-trash"></i>
          </div>

          <div class="cart-buttons">
                <i onclick="decrement(${id})" class="fa fa-minus"></i>
                <h4 id=${id} class="quantity">${item}</h4>
                <i onclick="increment(${id})"  class="fa fa-plus"></i>
            </div>

          <h4 class="cart-item-total">GHc ${item * search.price}.00</h4>
          </div>
        </div>
         `
    }).join(""));
   } 
   else {
    shoppingCart.innerHTML = ``; 
    label.innerHTML = `
    <h2>Your cart is Empty</h2>
     <a href="cart.html">
     <button class="HomeBtn">Back to Shopping</button>
     </a>
    `
   }
};

generateCartItems ();

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
    generateCartItems ();
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
    generateCartItems ();
    localStorage.setItem("data", JSON.stringify(basket)); 
}

let update = (id) =>{
    let search = basket.find((x) => x.id === id);
       console.log(search.item);
    document.getElementById(id).innerHTML = search.item;

    calculation ();
    TotalAmount ();
}

let removeItem = (id) => {
    basket = basket.filter((x) => x.id !== id);

    generateCartItems ();
    TotalAmount ();
    calculation ();

    localStorage.setItem("data", JSON.stringify(basket)); 

}

let TotalAmount = () => {
    if(basket !== 0) {
     let amount = basket.map((x) => {
        let {item, id} = x;
        let search =  shopItemsData.find((y) => y.id === id) || [];
        return item * search.price;
     }).reduce((x,y) => x+y, 0);

     label.innerHTML = `
     <h2>Total Bill: Ghc ${amount}.00 </h2>
     <button class="checkout">Checkout</button>
     <button onclick="clearCart()" class="removeAll">Clear Cart</button>
     `;
     
}  else return;

if (basket == 0){
    label.innerHTML = `
    <h2>Your cart is Empty</h2>
     <a href="cart.html">
     <button class="HomeBtn">Back to Shopping</button>
     </a>
    `;
};

};

TotalAmount ();

let clearCart = () => {
    basket = [];
    generateCartItems ();
    calculation ();

    localStorage.setItem("data", JSON.stringify(basket)); 
    
}

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
