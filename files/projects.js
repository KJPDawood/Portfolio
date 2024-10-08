const color = document.getElementById("color");
const colors = document.getElementById("colors");
const color1 = document.getElementById("red");
const color2 = document.getElementById("green");
const color3 = document.getElementById("sky-blue");
const color4 = document.getElementById("yellow");
const color5 = document.getElementById("orange");
const root = document.documentElement;
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
function nav() {
    var tablet = window.matchMedia("(max-width : 913px)")
    var btn = document.getElementsByClassName("btn")
    if (tablet.matches) {
        if (btn[2].style.display = "block") {
            btn[0].style.display = "none"
            btn[2].style.display = "block"
            setInterval(() => {
                btn[2].style.display = "none"
                btn[0].style.display = "block"
                btn[3].style.display = "none"
                setTimeout(() => {
                    btn[3].style.display = "none"
                    btn[0].style.display = "block"
                }, 500);
                setTimeout(() => {
                    btn[0].style.display = "none"
                    btn[1].style.display = "block"
                }, 2000);
                setTimeout(() => {
                    btn[1].style.display = "none"
                    btn[3].style.display = "block"
                }, 3500);
            }, 5000);
        }
    }
}
nav()