/*=========================================================
        GANGAULI RISING FOUNDATION
                SCRIPT.JS
=========================================================*/

/*==============================
        MOBILE MENU
==============================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

    } else {

        menuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;

    }

});


/*==============================
        CLOSE MENU
==============================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;

    });

});


/*==============================
        STICKY HEADER
==============================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 30px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow = "0 2px 18px rgba(0,0,0,.05)";

    }

});


/*==============================
        SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*==============================
        ACTIVE MENU
==============================*/

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        const height = section.clientHeight;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*==============================
        SCROLL REVEAL
==============================*/

const revealElements = document.querySelectorAll(

".about,.future,.why-grf,.philosophy,.vision,.mission,.fund,.volunteer,.join,.contact"

);

function reveal() {

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        const visible = 120;

        if (top < window.innerHeight - visible) {

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


/*==============================
        CONTACT FORM
==============================*/

const form = document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("धन्यवाद!\n\nआपका संदेश सफलतापूर्वक प्राप्त हो गया है।");

form.reset();

});

}


/*==============================
        CURRENT YEAR
==============================*/

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if(copyright){

copyright.innerHTML = `© ${year} Gangauli Rising Foundation. सभी अधिकार सुरक्षित।`;

}
