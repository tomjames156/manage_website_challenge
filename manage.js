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

arrows[1].addEventListener("click", () => {
    for(let i = 0; i < arrows.length; i++){
        arrows[i].classList.toggle("hide");
    }
    resetPagination();
    pages[3].classList.toggle("active");
    cards[0].classList.toggle("hide");
    cards[3].classList.toggle("hide");
})

arrows[0].addEventListener("click", () => {
    for(let i = 0; i < arrows.length; i++){
        arrows[i].classList.toggle("hide");
    }
    resetPagination();
    pages[0].classList.toggle("active");
    cards[0].classList.toggle("hide");
    cards[3].classList.toggle("hide");
})

function resetPagination(){
    for(let page of pages){
        page.classList.remove("active");
    }
}

for(i = 0; i < pages.length; i++){
    let current_index = i;
    pages[current_index].addEventListener("click", () =>{
        resetPagination();
        console.log(current_index);
    })
}