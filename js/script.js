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