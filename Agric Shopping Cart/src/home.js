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
