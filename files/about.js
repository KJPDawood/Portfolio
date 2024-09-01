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
var spic3 = document.getElementById("spic3");
var count = 0;
var count2 = 0;2
var skil
count2++;ls = document.getElementsByClassName("skills");
var hobby = document.getElementsByClassName("hobby");

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
    let gradient = "black,aquamarine,aquamarine,black,black";
    let textColor = "aquamarine";
    let boxShadow = "0 0 15px aquamarine";
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
        spic.style.borderRadius = "0px";
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
        spic.style.borderRadius = "50%";
         spic.src = "pics/avnac.jpg";
        count = 0;
                spic.style.animation = "pop 1s"
        setTimeout(function () {spic.style.animation = ""},1000)
    }
},2000);
setInterval(function () {
    if (count2 === 0) {
        count2++;
        spic3.src = "pics/cartoon.png";
        spic3.style.backgroundColor = "white";
        spic3.style.borderRadius = "30px"
                spic3.style.padding = "10px"
        hobby[8].style.backgroundColor = "black";
        hobby[0].style.backgroundColor = "var(--textColor)";
        spic3.style.animation = "pop 1s"
        setTimeout(function () {spic3.style.animation = ""},1000)
    } else if (count2 === 1) {
        count2++;
        hobby[0].style.backgroundColor = "black"
        hobby[1].style.backgroundColor = "var(--textColor)"
         spic3.src = "pics/throw.png";
                spic3.style.animation = "pop 1s"
        setTimeout(function () {spic3.style.animation = ""},1000)
    } else if (count2 === 2) {
        count2++;
        hobby[1].style.backgroundColor = "black"
        hobby[2].style.backgroundColor = "var(--textColor)"
         spic3.src = "pics/games.png";
                spic3.style.animation = "pop 1s"
        setTimeout(function () {spic3.style.animation = ""},1000) 
    } else if (count2 === 3) {
        count2++;
        hobby[2].style.backgroundColor = "black"
        hobby[3].style.backgroundColor = "var(--textColor)"
        spic3.src = "pics/programming.png";
                spic3.style.animation = "pop 1s"
        setTimeout(function () {spic3.style.animation = ""},1000)
    } else if (count2 === 4) {
        count2++;
        hobby[3].style.backgroundColor = "black"
        hobby[4].style.backgroundColor = "var(--textColor)"
         spic3.src = "pics/music.png";
                spic3.style.animation = "pop 1s"
        setTimeout(function () {spic3.style.animation = ""},1000)
    } else if (count2 === 5) {
        count2++;
        hobby[4].style.backgroundColor = "black"
        hobby[5].style.backgroundColor = "var(--textColor)"
        spic3.src = "pics/content-writing.png";
                spic3.style.animation = "pop 1s"
        setTimeout(function () {spic3.style.animation = ""},1000)
    } else if (count2 === 6) {
        count2++;
        hobby[5].style.backgroundColor = "black"
        hobby[6].style.backgroundColor = "var(--textColor)"
         spic3.src = "pics/chess.png";
                spic3.style.animation = "pop 1s"
        setTimeout(function () {spic3.style.animation = ""},1000)
    } else if (count2 === 7) {
        count2++;
        hobby[6].style.backgroundColor = "black"
        hobby[7].style.backgroundColor = "var(--textColor)"
         spic3.src = "pics/poetry-symbol-of-a-feather-in-ink-container.png";
                spic3.style.animation = "pop 1s"
        setTimeout(function () {spic3.style.animation = ""},1000)
    } else if (count2 === 8) {
        count2 = 0;
        hobby[7].style.backgroundColor = "black"
        hobby[8].style.backgroundColor = "var(--textColor)"
         spic3.src = "pics/poetry.png";
                spic3.style.animation = "pop 1s"
        setTimeout(function () {spic3.style.animation = ""},1000)
    }
},2000);
var spic4 = document.getElementById("spic4");
var spic5 = document.getElementById("spic5");
var skills2 = document.getElementsByClassName("skills2");
var hobby2 = document.getElementsByClassName("hobby2");
setInterval(function () {
    if (count === 0) {
        spic4.style.borderRadius = "0px";
        spic4.src = "pics/html.png";
        skills2[8].style.backgroundColor = "black";
        skills2[0].style.backgroundColor = "var(--textColor)";
        spic4.style.animation = "pop 1s";
        setTimeout(function () {spic4.style.animation = ""},1000);
    } else if (count === 1) {
        skills2[0].style.backgroundColor = "black"
        skills2[1].style.backgroundColor = "var(--textColor)"
         spic4.src = "pics/text.png";
                spic4.style.animation = "pop 1s";
        setTimeout(function () {spic4.style.animation = ""},1000);
    } else if (count === 2) {
        skills2[1].style.backgroundColor = "black";
        skills2[2].style.backgroundColor = "var(--textColor)";
        spic4.style.borderRadius = "60px";
         spic4.src = "pics/js.png";
                spic4.style.animation = "pop 1s";
        setTimeout(function () {spic4.style.animation = ""},1000); 
    } else if (count === 3) {
        skills2[2].style.backgroundColor = "black";
        skills2[3].style.backgroundColor = "var(--textColor)";
        spic4.src = "pics/bootstrap.png";
        spic4.style.borderRadius = "0px";
                spic4.style.animation = "pop 1s";
        setTimeout(function () {spic4.style.animation = ""},1000);
    } else if (count === 4) {
        skills2[3].style.backgroundColor = "black";
        skills2[4].style.backgroundColor = "var(--textColor)";
        spic4.style.borderRadius = "50%";
        spic4.style.backgroundColor = "white";
         spic4.src = "pics/github.png";
                spic4.style.animation = "pop 1s";
        setTimeout(function () {spic4.style.animation = ""},1000);
    } else if (count === 5) {
        skills2[4].style.backgroundColor = "black";
        skills2[5].style.backgroundColor = "var(--textColor)";
        spic4.style.borderRadius = "60px";
        spic4.src = "pics/camera.png";
                spic4.style.animation = "pop 1s";
        setTimeout(function () {spic4.style.animation = ""},1000);
    } else if (count === 6) {
        skills2[5].style.backgroundColor = "black";
        skills2[6].style.backgroundColor = "var(--textColor)";
        spic4.style.borderRadius = "0px";
        spic4.style.backgroundColor = "";
         spic4.src = "pics/hacker.png";
                spic4.style.animation = "pop 1s";
        setTimeout(function () {spic4.style.animation = ""},1000);
    } else if (count === 7) {
        skills2[6].style.backgroundColor = "black";
        skills2[7].style.backgroundColor = "var(--textColor)";
         spic4.src = "pics/mobile.png";
                spic4.style.animation = "pop 1s";
        setTimeout(function () {spic4.style.animation = ""},1000);
    } else if (count === 8) {
        skills2[7].style.backgroundColor = "black";
        skills2[8].style.backgroundColor = "var(--textColor)";
        spic4.style.borderRadius = "50%";
         spic4.src = "pics/avnac.jpg";
                spic4.style.animation = "pop 1s";
        setTimeout(function () {spic4.style.animation = ""},1000);
    }
},2000);
setInterval(function () {
    if (count === 0) {
        spic5.src = "pics/cartoon.png";
        spic5.style.backgroundColor = "white";
        spic5.style.borderRadius = "30px"
                spic5.style.padding = "10px"
        hobby2[8].style.backgroundColor = "black";
        hobby2[0].style.backgroundColor = "var(--textColor)";
        spic5.style.animation = "pop 1s"
        setTimeout(function () {spic5.style.animation = ""},1000)
    } else if (count === 1) {
        hobby2[0].style.backgroundColor = "black"
        hobby2[1].style.backgroundColor = "var(--textColor)"
         spic5.src = "pics/throw.png";
                spic5.style.animation = "pop 1s"
        setTimeout(function () {spic5.style.animation = ""},1000)
    } else if (count === 2) {
        hobby2[1].style.backgroundColor = "black"
        hobby2[2].style.backgroundColor = "var(--textColor)"
         spic5.src = "pics/games.png";
                spic5.style.animation = "pop 1s"
        setTimeout(function () {spic5.style.animation = ""},1000) 
    } else if (count === 3) {
        hobby2[2].style.backgroundColor = "black"
        hobby2[3].style.backgroundColor = "var(--textColor)"
        spic5.src = "pics/programming.png";
                spic5.style.animation = "pop 1s"
        setTimeout(function () {spic5.style.animation = ""},1000)
    } else if (count === 4) {
        hobby2[3].style.backgroundColor = "black"
        hobby2[4].style.backgroundColor = "var(--textColor)"
         spic5.src = "pics/music.png";
                spic5.style.animation = "pop 1s"
        setTimeout(function () {spic5.style.animation = ""},1000)
    } else if (count === 5) {
        hobby2[4].style.backgroundColor = "black"
        hobby2[5].style.backgroundColor = "var(--textColor)"
        spic5.src = "pics/content-writing.png";
                spic5.style.animation = "pop 1s"
        setTimeout(function () {spic5.style.animation = ""},1000)
    } else if (count === 6) {
        hobby2[5].style.backgroundColor = "black"
        hobby2[6].style.backgroundColor = "var(--textColor)"
         spic5.src = "pics/chess.png";
                spic5.style.animation = "pop 1s"
        setTimeout(function () {spic5.style.animation = ""},1000)
    } else if (count === 7) {
        hobby2[6].style.backgroundColor = "black"
        hobby2[7].style.backgroundColor = "var(--textColor)"
         spic5.src = "pics/poetry-symbol-of-a-feather-in-ink-container.png";
                spic5.style.animation = "pop 1s"
        setTimeout(function () {spic5.style.animation = ""},1000)
    } else if (count === 8) {
        hobby2[7].style.backgroundColor = "black"
        hobby2[8].style.backgroundColor = "var(--textColor)"
         spic5.src = "pics/poetry.png";
                spic5.style.animation = "pop 1s"
        setTimeout(function () {spic5.style.animation = ""},1000)
    }
},2000);
function nav() {
    var tablet = window.matchMedia("(max-width : 913px)")
    var btn = document.getElementsByClassName("btn")
    if (tablet.matches) {
        if (btn[1].style.display = "block") {
            btn[0].style.display = "none"
            btn[1].style.display = "block"
            setInterval(() => {
                btn[1].style.display = "none"
                btn[0].style.display = "block"
                btn[3].style.display = "none"
                setTimeout(() => {
                    btn[3].style.display = "none"
                    btn[0].style.display = "block"
                }, 500);
                setTimeout(() => {
                    btn[0].style.display = "none"
                    btn[2].style.display = "block"
                }, 2000);
                setTimeout(() => {
                    btn[2].style.display = "none"
                    btn[3].style.display = "block"
                }, 3500);
            }, 5000);
        }
    }
}
nav()