const carousel = document.querySelector('.carousel-items');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
var index = 0;
const color = document.getElementById("color");
const colors = document.getElementById("colors");
const color1 = document.getElementById("red"); 
const color2 = document.getElementById("green"); 
const color3 = document.getElementById("sky-blue"); 
const color4 = document.getElementById("yellow"); 
const color5 = document.getElementById("orange"); 
const root = document.documentElement;
var spic = document.getElementById("spic");
var count = 0;
var skills = document.getElementsByClassName("skills");

document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % totalItems;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + totalItems) % totalItems;
    updateCarousel();
});

function updateCarousel() {
    carousel.style.transform = `translateX(${-index * 100}%)`;
}; 
document.addEventListener("DOMContentLoaded", function () {
    function toggleDiv2() {
        if (colors.style.display === "none" || colors.style.display === "") {
            colors.style.display = "flex";
        } else {
            colors.style.display = "none";
        }
    }
    color.addEventListener("click", toggleDiv2);
    colors.addEventListener("click", toggleDiv2);
});
function saveToLocalStorage(gradient, textColor, boxShadow) {
    localStorage.setItem("gradientColor", gradient);
    localStorage.setItem("textColor", textColor);
    localStorage.setItem("boxShadow", boxShadow);
}
color1.addEventListener("click", function () {
    let gradient = "black,rgb(255, 0, 0),red,black,black";
    let textColor = "red";
    let boxShadow = "0 0 15px rgba(255, 0, 0)";
    root.style.setProperty("--gradientColor", gradient);
    root.style.setProperty("--textColor", textColor);
    root.style.setProperty("--boxShadow", boxShadow);
    saveToLocalStorage(gradient, textColor, boxShadow);
});
color2.addEventListener("click", function () {
    let gradient = "black,rgb(0, 255, 0),rgb(0, 255, 0),black,black";
    let textColor = "rgb(0, 255, 0)";
    let boxShadow = "0 0 15px rgb(0, 255, 0)";
    root.style.setProperty("--gradientColor", gradient);
    root.style.setProperty("--textColor", textColor);
    root.style.setProperty("--boxShadow", boxShadow);
    saveToLocalStorage(gradient, textColor, boxShadow);
});
color3.addEventListener("click", function () {
    let gradient = "black,rgb(0, 174, 255),rgb(0, 174, 255),black,black";
    let textColor = "rgb(0, 174, 255)";
    let boxShadow = "0 0 15px rgb(0, 174, 255)";
    root.style.setProperty("--gradientColor", gradient);
    root.style.setProperty("--textColor", textColor);
    root.style.setProperty("--boxShadow", boxShadow);
    saveToLocalStorage(gradient, textColor, boxShadow);
});
color4.addEventListener("click", function () {
    let gradient = "black,rgb(255, 255, 0),rgb(255, 255, 0),black,black";
    let textColor = "rgb(255, 255, 0)";
    let boxShadow = "0 0 15px rgb(255, 255, 0)";
    root.style.setProperty("--gradientColor", gradient);
    root.style.setProperty("--textColor", textColor);
    root.style.setProperty("--boxShadow", boxShadow);
    saveToLocalStorage(gradient, textColor, boxShadow);
});
color5.addEventListener("click", function () {
    let gradient = "black,rgb(255, 166, 0),rgb(255, 166, 0),black,black";
    let textColor = "rgb(255, 166, 0)";
    let boxShadow = "0 0 15px rgb(255, 166, 0)";
    root.style.setProperty("--gradientColor", gradient);
    root.style.setProperty("--textColor", textColor);
    root.style.setProperty("--boxShadow", boxShadow);
    saveToLocalStorage(gradient, textColor, boxShadow);
});
function loadFromLocalStorage() {
    let gradient = localStorage.getItem("gradientColor");
    let textColor = localStorage.getItem("textColor");
    let boxShadow = localStorage.getItem("boxShadow");

    if (gradient && textColor && boxShadow) {
        root.style.setProperty("--gradientColor", gradient);
        root.style.setProperty("--textColor", textColor);
        root.style.setProperty("--boxShadow", boxShadow);
    }
}
loadFromLocalStorage();
setInterval(function () {
    if (count === 0) {
        spic.src = "pics/html.png";
        skills[8].style.backgroundColor = "black"
        skills[0].style.backgroundColor = "var(--textColor)"
        count++;
        spic.style.animation = "pop 1s"
        setTimeout(function () {spic.style.animation = ""},1000)
    } else if (count === 1) {
        skills[0].style.backgroundColor = "black"
        skills[1].style.backgroundColor = "var(--textColor)"
         spic.src = "pics/text.png";
        count++;
                spic.style.animation = "pop 1s"
        setTimeout(function () {spic.style.animation = ""},1000)
    } else if (count === 2) {
        skills[1].style.backgroundColor = "black"
        skills[2].style.backgroundColor = "var(--textColor)"
        spic.style.borderRadius = "60px";
         spic.src = "pics/js.png";
        count++;
                spic.style.animation = "pop 1s"
        setTimeout(function () {spic.style.animation = ""},1000) 
    } else if (count === 3) {
        skills[2].style.backgroundColor = "black"
        skills[3].style.backgroundColor = "var(--textColor)"
        spic.src = "pics/bootstrap.png";
        spic.style.borderRadius = "0px";
        count++;
                spic.style.animation = "pop 1s"
        setTimeout(function () {spic.style.animation = ""},1000)
    } else if (count === 4) {
        skills[3].style.backgroundColor = "black"
        skills[4].style.backgroundColor = "var(--textColor)"
        spic.style.borderRadius = "50%";
        spic.style.backgroundColor = "white";
         spic.src = "pics/github.png";
        count++;
                spic.style.animation = "pop 1s"
        setTimeout(function () {spic.style.animation = ""},1000)
    } else if (count === 5) {
        skills[4].style.backgroundColor = "black"
        skills[5].style.backgroundColor = "var(--textColor)"
        spic.style.borderRadius = "60px";
        spic.src = "pics/camera.png";
        count++;
                spic.style.animation = "pop 1s"
        setTimeout(function () {spic.style.animation = ""},1000)
    } else if (count === 6) {
        skills[5].style.backgroundColor = "black"
        skills[6].style.backgroundColor = "var(--textColor)"
        spic.style.borderRadius = "0px";
        spic.style.backgroundColor = "";
         spic.src = "pics/hacker.png";
        count++;
                spic.style.animation = "pop 1s"
        setTimeout(function () {spic.style.animation = ""},1000)
    } else if (count === 7) {
        skills[6].style.backgroundColor = "black"
        skills[7].style.backgroundColor = "var(--textColor)"
         spic.src = "pics/mobile.png";
        count++;
                spic.style.animation = "pop 1s"
        setTimeout(function () {spic.style.animation = ""},1000)
    } else if (count === 8) {
        skills[7].style.backgroundColor = "black"
        skills[8].style.backgroundColor = "var(--textColor)"
         spic.src = "pics/html.png";
        count = 0;
                spic.style.animation = "pop 1s"
        setTimeout(function () {spic.style.animation = ""},1000)
    }
},2000)