let displayButton = document.querySelector("#display-menu");
let hideButton = document.querySelector("#hide-menu");
let navbar = document.querySelector("#nav-bar--hid");
displayButton.addEventListener("click", () =>{
    navbar.style.right="0%";
});
hideButton.addEventListener("click", () =>{
    navbar.style.right ="-100%";
});