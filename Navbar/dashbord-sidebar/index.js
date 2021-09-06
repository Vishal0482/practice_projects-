let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchbtn = document.querySelector(".fa-search");


btn.onclick = function(){
    sidebar.classList.toggle("active");
}

searchbtn.onclick = function(){
    sidebar.classList.toggle("active");
}