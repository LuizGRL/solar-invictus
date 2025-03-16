function toggleMobileMenu(icon) {
    icon.classList.toggle("open");
    document.querySelector(".mobile-menu").classList.toggle("open");
    document.querySelector("#overlay").classList.toggle("open"); 
}

document.querySelector("#overlay").addEventListener("click", function() {
    document.querySelector("#hamburger-icon").classList.remove("open");
    document.querySelector(".mobile-menu").classList.remove("open");
    document.querySelector("#overlay").classList.remove("open");
});
