const hamburgerIcon = document.querySelector("div.hamburger span");
const hamburgerMenu = document.querySelector("div.hamburger-menu");
const carouselArrows = document.querySelectorAll("div.carousel-arrow");
const cards = document.querySelectorAll("div.card")

hamburgerIcon.addEventListener("click", () =>{
    if(hamburgerIcon.innerHTML == "☰"){
        hamburgerIcon.innerHTML = "✕";
        hamburgerMenu.style.display = "flex";
    }else if(hamburgerIcon.innerHTML == "✕"){
        hamburgerIcon.innerHTML = "☰";
        hamburgerMenu.style.display = "none";
    }
})

carouselArrows[1].addEventListener("click", () => {
    carouselArrows[0].classList.toggle("hide");
    carouselArrows[1].classList.toggle("hide");
    cards[0].classList.toggle("hide");
    cards[3].classList.toggle("hide");
})

carouselArrows[0].addEventListener("click", () => {
    carouselArrows[0].classList.toggle("hide");
    carouselArrows[1].classList.toggle("hide");
    cards[0].classList.toggle("hide");
    cards[3].classList.toggle("hide");
})