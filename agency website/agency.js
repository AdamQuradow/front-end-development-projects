const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navUl = document.querySelector(".nav-ul");

hamburger.addEventListener("click", () => {
    navUl.classList.toggle("show");
    hamburger.classList.toggle("hide");
})

close.addEventListener("click", () => {
    navUl.classList.toggle("show");
    hamburger.classList.toggle("hide");
})

const modal = document.querySelector(".modal");
const btn = document.querySelector(".search");
const closeModal = document.querySelector(".close-modal"); 

btn.addEventListener("click", () => {
    modal.style.display = "block";
})

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
})