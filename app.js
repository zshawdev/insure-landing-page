const navIconToggleBox = document.querySelector(".nav__icon-toggle-box");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");

navIconToggleBox.addEventListener("click", () => {
    nav.classList.toggle("js-nav--open");
    body.classList.toggle("js-lock-scroll");
})