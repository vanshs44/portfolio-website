console.log("Welcome to Vansh's Portfolio!");
const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

const hiddenElements = document.querySelectorAll(
".about-container, .skills-container, .projects-container, .resume-container, .contact-container"
);

hiddenElements.forEach((el) => observer.observe(el));
// =========================
// MOBILE MENU
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("nav-links-active");
});