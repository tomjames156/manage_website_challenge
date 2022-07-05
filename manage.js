const hamburgerIcon = document.querySelector("div.hamburger span");
const hamburgerMenu = document.querySelector("div.hamburger-menu");

hamburgerIcon.addEventListener("click", () =>{
    if(hamburgerIcon.innerHTML == "☰"){
        hamburgerIcon.innerHTML = "✕";
        hamburgerMenu.style.display = "flex";
    }else if(hamburgerIcon.innerHTML == "✕"){
        hamburgerIcon.innerHTML = "☰";
        hamburgerMenu.style.display = "none";
    }
})