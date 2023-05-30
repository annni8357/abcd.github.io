let menu = document.querySelector("#menuBars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa fa-times");
    navbar.classList.toggle("active");
};