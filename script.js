// Task 1
function showMessage() {
    alert("Hello, JavaScript!");
}

// Task 2
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

// Task 3
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM redo");

    const links = document.querySelectorAll(".menu-link");

    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        const linkPage = link.getAttribute("href").split("/").pop();

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
});

function toggleCinemaMode() {
    document.body.classList.toggle("cinema");
}