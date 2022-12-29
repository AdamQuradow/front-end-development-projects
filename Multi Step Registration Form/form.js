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
          step.classList.add("activate");
          formSteps[i].classList.add("activate");
        } else {
            step.classList.remove("activate");
            formSteps[i].classList.remove("activate");
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