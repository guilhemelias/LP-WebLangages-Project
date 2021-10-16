




const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const main = document.querySelector("main");
console.log(hamburger);

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {

    main.classList.toggle("active");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
   
}



const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    main.classList.remove("active");
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
   

}