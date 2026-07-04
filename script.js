/*==================================================
        GANGAULI RISING FOUNDATION
              SCRIPT.JS
==================================================*/

/*==============================
        LOADER
==============================*/

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if(loader){

        loader.classList.add("hidden");

    }

});

/*==============================
        MOBILE MENU
==============================*/

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){

        menuBtn.innerHTML='<i class="fa-solid fa-xmark"></i>';

    }

    else{

        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

    }

});

/*==============================
        CLOSE MENU
==============================*/

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

});

});

/*==============================
        STICKY HEADER
==============================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

header.style.boxShadow="0 12px 35px rgba(0,0,0,.08)";

}

else{

header.style.boxShadow="0 2px 15px rgba(0,0,0,.05)";

}

});

/*==============================
        SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*==============================
        ACTIVE MENU
==============================*/

const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.offsetHeight;

if(window.pageYOffset>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*==============================
        REVEAL ANIMATION
==============================*/

const reveals=document.querySelectorAll("section");

function revealSections(){

reveals.forEach(section=>{

const top=section.getBoundingClientRect().top;

const visible=120;

if(top<window.innerHeight-visible){

section.classList.add("active");

}

});

}

window.addEventListener("scroll",revealSections);

revealSections();

/*==============================
        SCROLL TO TOP
==============================*/

const scrollBtn=document.querySelector(".scroll-top");

window.addEventListener("scroll",()=>{

if(scrollBtn){

if(window.scrollY>500){

scrollBtn.classList.add("active");

}

else{

scrollBtn.classList.remove("active");

}

}

});

if(scrollBtn){

scrollBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/*==============================
        CONTACT FORM
==============================*/

const form=document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const name=form.querySelector('input[type="text"]').value.trim();

const phone=form.querySelector('input[type="tel"]').value.trim();

if(name.length<3){

alert("कृपया अपना सही नाम दर्ज करें।");

return;

}

if(phone.length<10){

alert("कृपया सही मोबाइल नंबर दर्ज करें।");

return;

}

alert("धन्यवाद!\n\nआपका संदेश सफलतापूर्वक प्राप्त हो गया है।");

form.reset();

});

}

/*==============================
        CURRENT YEAR
==============================*/

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

/*==============================
        IMAGE FADE
==============================*/

const images=document.querySelectorAll("img");

images.forEach(img=>{

img.setAttribute("draggable","false");

});

/*==============================
        KEYBOARD ACCESSIBILITY
==============================*/

document.addEventListener("keyup",(e)=>{

if(e.key==="Escape"){

navLinks.classList.remove("active");

menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

}

});

/*==============================
        CONSOLE MESSAGE
==============================*/

console.log("%c🌿 Gangauli Rising Foundation","font-size:22px;color:#1B5E20;font-weight:bold");

console.log("%cWebsite Developed with ❤️","color:#F57C00;font-size:15px;");
/*==================================================
        GANGAULI RISING FOUNDATION
              SCRIPT.JS
==================================================*/

/*==============================
        LOADER
==============================*/

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if(loader){

        loader.classList.add("hidden");

    }

});

/*==============================
        MOBILE MENU
==============================*/

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){

        menuBtn.innerHTML='<i class="fa-solid fa-xmark"></i>';

    }

    else{

        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

    }

});

/*==============================
        CLOSE MENU
==============================*/

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

});

});

/*==============================
        STICKY HEADER
==============================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

header.style.boxShadow="0 12px 35px rgba(0,0,0,.08)";

}

else{

header.style.boxShadow="0 2px 15px rgba(0,0,0,.05)";

}

});

/*==============================
        SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*==============================
        ACTIVE MENU
==============================*/

const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.offsetHeight;

if(window.pageYOffset>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*==============================
        REVEAL ANIMATION
==============================*/

const reveals=document.querySelectorAll("section");

function revealSections(){

reveals.forEach(section=>{

const top=section.getBoundingClientRect().top;

const visible=120;

if(top<window.innerHeight-visible){

section.classList.add("active");

}

});

}

window.addEventListener("scroll",revealSections);

revealSections();

/*==============================
        SCROLL TO TOP
==============================*/

const scrollBtn=document.querySelector(".scroll-top");

window.addEventListener("scroll",()=>{

if(scrollBtn){

if(window.scrollY>500){

scrollBtn.classList.add("active");

}

else{

scrollBtn.classList.remove("active");

}

}

});

if(scrollBtn){

scrollBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/*==============================
        CONTACT FORM
==============================*/

const form=document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const name=form.querySelector('input[type="text"]').value.trim();

const phone=form.querySelector('input[type="tel"]').value.trim();

if(name.length<3){

alert("कृपया अपना सही नाम दर्ज करें।");

return;

}

if(phone.length<10){

alert("कृपया सही मोबाइल नंबर दर्ज करें।");

return;

}

alert("धन्यवाद!\n\nआपका संदेश सफलतापूर्वक प्राप्त हो गया है।");

form.reset();

});

}

/*==============================
        CURRENT YEAR
==============================*/

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

/*==============================
        IMAGE FADE
==============================*/

const images=document.querySelectorAll("img");

images.forEach(img=>{

img.setAttribute("draggable","false");

});

/*==============================
        KEYBOARD ACCESSIBILITY
==============================*/

document.addEventListener("keyup",(e)=>{

if(e.key==="Escape"){

navLinks.classList.remove("active");

menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

}

});

/*==============================
        CONSOLE MESSAGE
==============================*/

console.log("%c🌿 Gangauli Rising Foundation","font-size:22px;color:#1B5E20;font-weight:bold");

console.log("%cWebsite Developed with ❤️","color:#F57C00;font-size:15px;");
