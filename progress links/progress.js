const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");

one.addEventListener("click", () => {
    one.classList.toggle("active");
    two.classList.remove("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
});
two.addEventListener("click", () => {
   if(one.classList.contains("active")) {

       one.classList.add("active");
       two.classList.add("active");
       three.classList.remove("active");
       four.classList.remove("active");
       five.classList.remove("active");
   } else {
    one.classList.remove("active");
    two.classList.remove("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
   }
});
three.addEventListener("click", () => {
    if(one.classList.contains("active") && two.classList.contains("active")) {

        one.classList.add("active");
        two.classList.add("active");
        three.classList.add("active");
        four.classList.remove("active");
        five.classList.remove("active");
    } else {
     one.classList.remove("active");
     two.classList.remove("active");
     three.classList.remove("active");
     four.classList.remove("active");
     five.classList.remove("active");
    }
});
four.addEventListener("click", () => {
    if(one.classList.contains("active") && two.classList.contains("active") && three.classList.contains("active")) {

        one.classList.add("active");
        two.classList.add("active");
        three.classList.add("active");
        four.classList.add("active");
        five.classList.remove("active");
    } else {
     one.classList.remove("active");
     two.classList.remove("active");
     three.classList.remove("active");
     four.classList.remove("active");
     five.classList.remove("active");
    }
});
five.addEventListener("click", () => {
    if(one.classList.contains("active") && two.classList.contains("active") && three.classList.contains("active") && 
    four.classList.contains("active")) {

        one.classList.add("active");
        two.classList.add("active");
        three.classList.add("active");
        four.classList.add("active");
        five.classList.add("active");
    } else {
     one.classList.remove("active");
     two.classList.remove("active");
     three.classList.remove("active");
     four.classList.remove("active");
     five.classList.remove("active");
    }
});