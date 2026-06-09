function toggleMenu()
{
    const mobileIcon = document.querySelector(".mobile-icon");
    const sideMenu = document.querySelector(".side-menu");

    mobileIcon.addEventListener("click", () => {
        sideMenu.classList.toggle("open");
        mobileIcon.classList.toggle("active");
    })
}

document.addEventListener("DOMContentLoaded", () => {
    toggleMenu();
})
