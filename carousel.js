let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.carousel-slide');
    const dots = document.querySelectorAll('.dot');

    const totalSlides = dots.length;

    // Correction des limites
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    // Largeur d'un seul slide (598px)
    const slideWidth = 598;

    // Déplacement du carrousel selon l'image active
    slides.style.transform = `translateX(${-slideWidth * currentIndex}px)`;

    // Mettre à jour les points d'indication
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function currentSlide(index) {
    showSlide(index - 1);
}

function changeSlide(n) {
    showSlide(currentIndex + n);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});
