const hamburgerIcon = document.querySelector("div.hamburger span");
const hamburgerMenu = document.querySelector("div.hamburger-menu");
const arrows = document.querySelectorAll("div.carousel-arrow");
const cards = document.querySelectorAll("div.card");
const pages = document.querySelectorAll("a.page");

hamburgerIcon.addEventListener("click", () =>{
    if(hamburgerIcon.innerHTML == "☰"){
        hamburgerIcon.innerHTML = "✕";
        hamburgerMenu.style.display = "flex";
    }else if(hamburgerIcon.innerHTML == "✕"){
        hamburgerIcon.innerHTML = "☰";
        hamburgerMenu.style.display = "none";
    }
})

arrows[0].click();

arrows[1].addEventListener("click", () => {
    carouselFuntion(3, 0);
})

function carouselFuntion(current, other){
    for(let i = 0; i < arrows.length; i++){
        arrows[i].classList.toggle("hide");
    }
    resetPagination();
    pages[current].classList.add("active");
    showCards();
    cards[other].classList.add("hide");
}

arrows[0].addEventListener("click", () => {
    carouselFuntion(0, 3);
})

function showCards(){
    for(let card of cards){
        card.classList.remove("hide");
    }
}

function resetPagination(){
    for(let page of pages){
        page.classList.remove("active");
    }
}

function resetCards(){
    for(let card of cards){
        card.classList.add("hide-mobile");
    }
}

function showPage(receiver){
    resetCards();
    resetPagination();
    receiver.classList.toggle("active");
    let index = receiver.id - 1;
    if(index == 0){
        carouselFuntion(0, 3);
    }else if(index == 3){
        carouselFuntion(3, 0);
    }
    cards[index].classList.toggle("hide-mobile");
}