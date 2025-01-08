const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
let autoplayInterval;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

function showPrevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
}

function startAutoplay() {
    autoplayInterval = setInterval(showNextSlide, 3000);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

prevBtn.addEventListener('click', () => {
    stopAutoplay();
    showPrevSlide();
    startAutoplay();
});

nextBtn.addEventListener('click', () => {
    stopAutoplay();
    showNextSlide();
    startAutoplay();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        stopAutoplay();
        currentIndex = index;
        updateSlider();
        startAutoplay();
    });
});

slider.addEventListener('mouseenter', stopAutoplay);
slider.addEventListener('mouseleave', startAutoplay);

updateSlider();
startAutoplay();
