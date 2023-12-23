// mobile menu toggle starts 
$(document).ready(function(){ 
    $('#icon').click(function(){ 
        $('ul').toggleClass('show')
    });
});

const  primaryHeader = document.querySelector(" .primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".navbar");

navToggle.addEventListener("click", () =>{
    primaryNav.hasAttribute('data-visible') 
        ? navToggle.setAttribute("aria-expanded", false) : navToggle.setAttribute("aria-expanded", true);
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute('data-overlay')
});