const menuBtn = document.querySelector(".menu-btn"),
      menuItems = document.querySelector(".menu-items"),
      expandBtn = document.querySelectorAll(".expand-btn");
    
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
})

expandBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("open"); 
    })
}) 