

const siteNav = document.querySelector(".nav");
const toggle = document.querySelector(".menu-toggle");
const humToggle = document.querySelector(".humburger");

toggle.addEventListener("click", function() {

    siteNav.classList.toggle("nav-closed");
    humToggle.classList.toggle("hum-close")

    if (siteNav.classList.contains("nav-closed")) {
        console.log("close");
        // toggle.classList.remove("open");
    }
    else {
        console.log("open");
        // toggle.classList.add("open");
    }

});


const dropdown = document.querySelectorAll(".dropdown-btn");
const dropdownContainer = document.querySelectorAll(".dropdown-container");
    
dropdown[0].addEventListener("click", function() {

    if (dropdownContainer[0].style.display === "") {
        dropdownContainer[0].style.display = "flex";
    } else {
        dropdownContainer[0].style.display = ""
    }
});

dropdown[1].addEventListener("click", function() {

    if (dropdownContainer[1].style.display === "") {
        dropdownContainer[1].style.display = "flex";
    } else {
        dropdownContainer[1].style.display = ""
    }
});

dropdown[2].addEventListener("click", function() {

    if (dropdownContainer[2].style.display === "") {
        dropdownContainer[2].style.display = "flex";
    } else {
        dropdownContainer[2].style.display = ""
    }
});

