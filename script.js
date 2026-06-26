// Smooth scrolling for navigation

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e) {

        const target = this.getAttribute('href');

        if(target.startsWith("#")){

            e.preventDefault();

            document.querySelector(target).scrollIntoView({

                behavior:'smooth'

            });

        }

    });

});


// Fade-in animation

const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    sections.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight-100){

            section.style.opacity="1";

            section.style.transform="translateY(0)";

        }

    });

});

sections.forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(50px)";

    section.style.transition="1s";

});


// Hero button animation

const button=document.querySelector(".hero a");

button.addEventListener("mouseenter",()=>{

    button.style.transform="scale(1.05)";

});

button.addEventListener("mouseleave",()=>{

    button.style.transform="scale(1)";

});
