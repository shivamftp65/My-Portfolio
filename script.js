const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const hamburgerToggle = document.querySelector("#hamburger-toggle")
const body = document.querySelector("body")
const moon = document.querySelector("#moon")

hamburger.addEventListener("click", () => {
    menu.classList.toggle("hidden")
    hamburgerToggle.classList.toggle("hidden")
    hamburger.classList.toggle("hidden")
})
hamburgerToggle.addEventListener("click", () => {
    menu.classList.toggle("hidden")
    hamburgerToggle.classList.toggle("hidden")
    hamburger.classList.toggle("hidden")
})

moon.addEventListener("click", () => {
    body.classList.toggle("dark");
})