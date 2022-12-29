const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");
const steps = document.querySelectorAll(".step");
const formSteps = document.querySelectorAll(".form-step");

let active = 1; 
nextBtn.addEventListener("click", () => {
    active++ 
    if(active > steps.length) {
        active = steps.length
    }
  updateProgess(); 
})
prevBtn.addEventListener("click", () => {
    active-- 
    if(active < 1) {
        active = 1
    }
  updateProgess(); 
})

const updateProgess = () => {

    steps.forEach((step, i) => {
        if(i == active-1) {
          step.classList.add("active");
          formSteps[i].classList.add("active");
        } else {
            step.classList.remove("active");
            formSteps[i].classList.remove("active");
        }
    }); 

    if(active === 1) {
        prevBtn.disabled = true;
     } else if (active === steps.length) {
        nextBtn.disabled = true;
     } else {
         prevBtn.disabled = false;
         nextBtn.disabled = false;
     }
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
