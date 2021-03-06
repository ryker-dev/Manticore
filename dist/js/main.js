// Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

/* $('#carousel').carousel({
    interval: 3000,
    cycle: true
}); */


// Set initial state
let menuOpen = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!menuOpen) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        navItems.forEach(item => item.classList.add("show"));

        menuOpen = true;
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        navItems.forEach(item => item.classList.remove("show"));

        menuOpen = false;
    }
}