const hamburgerToggler = document.querySelector(".hamburger")
const navLinksContainer = document.querySelector(".navlinks-container");

const toggleNav = () => {
    navLinksContainer.classList.toggle("open")

    const ariaToggle = hamburgerToggler.getAttribute
    ("aria-expanded") === "true" ? "false" : "true";
    hamburgerToggler.setAttribute("aria-expanded", ariaToggle)
}

hamburgerToggler.addEventListener("click", toggleNav)

const buttons = document.querySelectorAll(".btn");
console.log(buttons);