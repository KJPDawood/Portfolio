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

color1.addEventListener("click",function () {
    root.style.setProperty("--gradientColor" ,"black,rgb(255, 0, 0),red,black,black");
    root.style.setProperty("--textColor" ,"red");
    root.style.setProperty("--boxShadow" ,"0 0 15px 0px rgba(255, 0, 0)");
});
color2.addEventListener("click",function () {
    root.style.setProperty("--gradientColor" ,"black,rgb(0, 255, 0),rgb(0, 255, 0),black,black");
    root.style.setProperty("--textColor" ,"rgb(0, 255, 0)");
    root.style.setProperty("--boxShadow" ,"0 0 15px 0px rgb(0, 255, 0)");
});
color3.addEventListener("click",function () {
    root.style.setProperty("--gradientColor" ,"black,rgb(0, 174, 255),rgb(0, 174, 255),black,black");
    root.style.setProperty("--textColor" ,"rgb(0, 174, 255)");
    root.style.setProperty("--boxShadow" ,"0 0 15px 0px rgb(0, 174, 255)");
});
color4.addEventListener("click",function () {
    root.style.setProperty("--gradientColor" ,"black,rgb(255, 255, 0),rgb(255, 255, 0),black,black");
    root.style.setProperty("--textColor" ,"rgb(255, 255, 0)");
    root.style.setProperty("--boxShadow" ,"0 0 15px 0px rgb(255, 255, 0)");
});
color5.addEventListener("click",function () {
    root.style.setProperty("--gradientColor" ,"black,rgb(255, 166, 0),rgb(255, 166, 0),black,black");
    root.style.setProperty("--textColor" ,"rgb(255, 166, 0)");
    root.style.setProperty("--boxShadow" ,"0 0 15px 0px rgrgb(255, 166, 0)");
});