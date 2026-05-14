function showMessage() {
    alert("Hello, JavaScript!");
}

const movieRow = document.getElementById("movieRow");
const movies = document.querySelectorAll(".movie-card");

const movieWidth = 300;

let position = 0;
function moveLeft() {
    const step = 300;
    const maxScroll =
        movieRow.parentElement.offsetWidth - movieRow.scrollWidth;

    position += step;

    if (position > 0) {
        position = maxScroll;
    }

    movieRow.style.transform = `translateX(${position}px)`;
}
function moveRight() {
    const step = 300;
    const maxScroll =
        movieRow.parentElement.offsetWidth - movieRow.scrollWidth;

    position -= step;

    if (position < maxScroll) {
        position = 0;
    }

    movieRow.style.transform = `translateX(${position}px)`;
}