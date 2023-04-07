let menuIcon = document.querySelector(".menuIcon");
let menuCover = document.querySelector(".menuCover"); 
let closeIcon = document.querySelector("#closeIcon")


menuIcon.addEventListener("click", () => {
    menuCover.classList.add("menuCoverActive");
});

closeIcon.addEventListener("click", () => {
    menuCover.classList.remove("menuCoverActive");
})
