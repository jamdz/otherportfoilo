let hamburger = document.querySelector(".newhamb");
let mobileNavaigation = document.querySelector(".moible-navigation-11");

hamburger.addEventListener("click", () => {
    mobileNavaigation.classList.toggle("open");
    // mobileNavaigation.classList.remove("open");
});

let collectMedium = document.querySelector(".body-details-heads-112 h5");
let cooletMedium2 = document.querySelector(".body-details-heads-113 h5");
let imageContent = document.querySelector(".body-div-details-img");
let textContent = document.querySelector(".body-div-tetxtes11");

cooletMedium2.addEventListener("click", () => {
    cooletMedium2.classList.add("active-tab");
    collectMedium.classList.remove("active-tab");
    imageContent.style.display = "none";
    textContent.style.display = "block";
});

collectMedium.addEventListener("click", () => {
    collectMedium.classList.add("active-tab");
    cooletMedium2.classList.remove("active-tab");
    imageContent.style.display = "block";
    textContent.style.display = "none";
});

let aboutContent = document.querySelector("div.body-details-heads>div.body-details-heads-112");
let makeCotent = document.querySelector("div.body-details-heads>div.body-details-heads-113");

aboutContent.addEventListener("click", () => {
    aboutContent.classList.add("active-hands");
    makeCotent.classList.remove("active-hands");
});

makeCotent.addEventListener("click", () => {
    makeCotent.classList.add("active-hands");
    aboutContent.classList.remove("active-hands");
});


// let imageHover = document.querySelector(".body-div-24434");
// let divShow = document.querySelector(".body-div-hover-button");

// imageHover.addEventListener("click", () => {
//     divShow.classList.add("active-hover");
// });