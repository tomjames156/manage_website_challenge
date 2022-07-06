const hamburgerIcon = document.querySelector("div.hamburger span");
const hamburgerMenu = document.querySelector("div.hamburger-menu");
const carouselNumbers = document.querySelectorAll("div.carousel-number");

hamburgerIcon.addEventListener("click", () =>{
    if(hamburgerIcon.innerHTML == "☰"){
        hamburgerIcon.innerHTML = "✕";
        hamburgerMenu.style.display = "flex";
    }else if(hamburgerIcon.innerHTML == "✕"){
        hamburgerIcon.innerHTML = "☰";
        hamburgerMenu.style.display = "none";
    }
})

carouselNumbers[3].addEventListener("click", () => {
    console.log("working");
})