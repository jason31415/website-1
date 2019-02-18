var images = document.getElementById("menu-images");
var about_page = document.getElementById("menu-about");
about_page.style.display = "none";
var work = document.getElementById("opt-work");
var about = document.getElementById("opt-about");
var arrow = document.getElementById("right-arrow");
var background = document.getElementById("particles-js");
function image_open() {
    arrow.style.transform = "translateX(-270px)";
    images.style.display = "grid";
    about_page.style.display = "none";
    about.classList.remove("active");
    work.classList.add("active");
    background.style.filter = "blur(0px)";
}

function image_close() {
    arrow.style.transform = "translateX(-140px)";
    background.style.filter = "blur(2px)";
    images.style.display = "none";
    about_page.style.display = "grid";
    work.classList.remove("active");
    about.classList.add("active");
    var modal_container = document.getElementsByClassName("modal-container");
    for (var i = 0; i < modal_container.length; ++i) {
        modal_container[i].style.display = "none";
    }
}
