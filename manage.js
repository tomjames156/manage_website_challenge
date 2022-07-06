const hamburgerIcon = document.querySelector("div.hamburger span");
const hamburgerMenu = document.querySelector("div.hamburger-menu");
const arrows = document.querySelectorAll("div.carousel-arrow");
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

arrows[1].addEventListener("click", () => {
    for(let i = 0; i < arrows.length; i++){
        arrows[i].classList.toggle("hide");
    }
    cards[0].classList.toggle("hide");
    cards[3].classList.toggle("hide");
})

arrows[0].addEventListener("click", () => {
    for(let i = 0; i < arrows.length; i++){
        arrows[i].classList.toggle("hide");
    }
    cards[0].classList.toggle("hide");
    cards[3].classList.toggle("hide");
})