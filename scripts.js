
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".navbar-toggle");
    const navbarLinks = document.querySelector(".navbar-link");

    toggleButton.addEventListener("click", () => {
        navbarLinks.classList.toggle("active");
    });

});