// *****************FIXED NAV***************

const navbar = document.getElementById("navbar")
const homePage = document.getElementsByClassName("homePage");
const backToTop = document.querySelector(".backToTop");

window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if(scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
     
    } else {
        navbar.classList.remove("fixed-nav");
    }
    if(scrollHeight > 500) {
     backToTop.classList.add("show-link");
    }
     else {
    backToTop.classList.remove("show-link");
    }
})

const toggleMenu = document.querySelector(".toggleMenu"),
      menuOverlay = document.querySelector(".overlay"),
      closeMenu = document.querySelector(".closeMenu");

    toggleMenu.addEventListener("click", () => {
    menuOverlay.classList.add("show-overlay");
  });

  closeMenu.addEventListener("click", () => {
    menuOverlay.classList.remove("show-overlay");
  });

// *****************CAROUSEL***************

let slideIndex = 0;
showSlides(); 

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);   
}

function showSlides (n){
let i; 
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
if(n > slides.length) {slideIndex = 1};
if(n < 1) {slideIndex = slides.length};
for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
}
for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", ""); 
}
slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].style.display += "active"
}

function showSlides() {
    let i; 
    let slides = document.getElementsByClassName("mySlides");
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slideIndex++;
    if( slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 10000)

}
  
// *****************TESTIMONIAL SLIDER***************

const slideRow = document.querySelector(".testimonial-carousel-container"); 
const slideItems = document.getElementsByClassName("carousel-item"); 
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let index = 1; 
let width; 

let slideWidth = () => {
    width = slideItems[0].clientWidth;
}
slideWidth();
slideRow.style.transform = 'translateX('+ (- width * index) + 'px)'; 

nextBtn.addEventListener("click", nextSlide = () => {
    console.log(nextBtn);
    if(index >= slideItems.length - 1) {return};
    slideRow.style.transition = "transform 0.4s ease-out";
    index++;
    slideRow.style.transform = 'translateX(' + ( - width * index ) + 'px)'; 
} );

prevBtn.addEventListener("click", prevSlide = () => {
    console.log(prevBtn);
    if(index <= 0) {return};
    slideRow.style.transition = "transform 0.4s ease-out";
    index--;
    slideRow.style.transform = 'translateX(' + ( - width * index ) + 'px)'; 
} );

slideRow.addEventListener("transitionend", () => {
    if(slideItems[index].id === "firstSlideDuplicate") {
        slideRow.style.transition = "none";
        index = slideItems.length - index; 
        slideRow.style.transform = 'translateX(' + ( - width * index ) + 'px)'; 
    }
    if(slideItems[index].id === "lastSlideDuplicate") {
        slideRow.style.transition = "none";
        index = slideItems.length - 2; 
        slideRow.style.transform = 'translateX(' + ( - width * index ) + 'px)'; 
    }
})

function autoSlide () {
    deleteInterval = setInterval(timer, 15000);

    function timer() {
    nextSlide()
    }
}
autoSlide()

const btnRight = document.querySelector(".btnRight");
const btnLeft = document.querySelector(".btnLeft");
const slider = document.getElementById("slider");
btnLeft.addEventListener("click", () => {
    slider.scrollLeft -= 125; 
    console.log(btnLeft);
})
