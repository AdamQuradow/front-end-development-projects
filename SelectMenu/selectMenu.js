const wrapper = document.querySelector(".wrapper"),
      selectBtn = document.querySelector(".select-btn"),
      searchInput = document.querySelector("input"),
      options = document.querySelector(".options");

      let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Austria", "Bangledesh", "Belgium", "Bhutan",
      "Brazil", "Benin", "Canada", "China", "Denmark", "England", "Eswatini",  "Ehtiopia", "Finland", "France", "Germany", "Taiwan", "Hong Kong", 
     "Ghana", "Guayana", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Jamaica",
     "Mali", "Malaysia", "Mauritania", "Maldives", "Mexico", "Morocco", "Nepal", "Nigeria", "Namibia", 
     "Norway", "North Korea",  "Netherlands", "Pakistan", "Philippines", "Peru", "Qatar", "Russia", "Romania", "Saudi Arabia", 
      "South Africa", "Spain", "Sri Lanka", "Sweden", "South Korea", "Switzerland", "Singapore", 
        "Somalia",  "Tanzania", "Swatziland", "Thailand", "Turkey", "Uganda", "Ukraine", "United Arab Emirates",
         "United States", "United Kingdom", "Vietnam", "Zambia", "Zimbabwe"];

const addCountry = () => {
    countries.forEach(country => {
       let li = `<li onclick="selectCountry(this)">${country}</li>`;
       options.insertAdjacentHTML("beforeend", li);
       

    })
}
addCountry();
function selectCountry(selectLi) {
    
searchInput.value = "";   
addCountry();
wrapper.classList.remove("active"); 
selectBtn.firstElementChild.innerText = selectLi.innerText;
}

searchInput.addEventListener("keyup", ()=> {
let arr = [];
let searchVal = searchInput.value.toLocaleLowerCase();

arr = countries.filter(data => {
return data.toLocaleLowerCase().includes(searchVal);
}).map(data => `<li onclick="selectCountry(this)">${data}</li>`).join(""); 
options.innerHTML = arr ? arr : `<p>Country not found</p>`; 

})
selectBtn.addEventListener("click", () => {
    wrapper.classList.toggle("active");
})
