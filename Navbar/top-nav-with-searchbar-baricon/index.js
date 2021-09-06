const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancleBtn = document.querySelector(".cancle-icon");

const item = document.querySelector(".nav-items");
const form = document.querySelector("form");

menuBtn.onclick = ()=>{
    item.classList.add("active");
    menuBtn.classList.add("hide");
    searchBtn.classList.add("hide");
    cancleBtn.classList.add("show");
}

cancleBtn.onclick = ()=>{
    item.classList.remove("active");
    menuBtn.classList.remove("hide");
    searchBtn.classList.remove("hide");
    cancleBtn.classList.remove("show");
    form.classList.remove("active");
}

searchBtn.onclick = ()=>{
    form.classList.add("active");
    searchBtn.classList.add("hide");
    cancleBtn.classList.add("show");
}

menuBtn.addEventListener("mouseover", ()=>{
    item.classList.add("active");
    menuBtn.classList.add("hide");
    searchBtn.classList.add("hide");
    cancleBtn.classList.add("show");
});


