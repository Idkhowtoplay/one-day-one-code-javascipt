const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector(".nav-links");
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.addEventListener("click", (event) => {
    const isClickInside = hamburger.contains(event.target) || navLinks.contains(event.target);
    if (!isClickInside && navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
    }
});

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 60;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navItems.forEach((item) => {
        item.classList.remove("active");
        if (item.getAttribute("href").includes(currentSection)) {
            item.classList.add("active");
        }
    });
});