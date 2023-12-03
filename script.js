
// burger menu navbar

const burgerMenu = document.querySelector(".burger-menu")
const navLinks = document.querySelector(".nav-links")

burgerMenu.addEventListener('click',()=>{
navLinks.classList.toggle("mobile-menu")
})
