// hamburger 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
};

// Footer-year 
const Year = document.querySelector("#current-year")
Year.innerHTML = new Date().getFullYear();