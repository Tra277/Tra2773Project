let navBtn = document.querySelector('.nav__bars-btn');
let closeNav = document.querySelector('.close-nav');
let overLay = document.querySelector('.overlay');
let navMobile = document.querySelector('.nav__mobile');
navBtn.addEventListener('click',() =>{
    overLay.style.display = "block";
    overLay.style.animation = "fadeIn linear 0.5s"
    navMobile.style.transform = "translateX(0%)";
    navMobile.style.opacity = "1";
});

function closeMenu(){
    overLay.style.display = "none";
    navMobile.style.transform = "translateX(-100%)";
    navMobile.style.opacity = "0";
}
closeNav.addEventListener('click',closeMenu);

overLay.addEventListener('click',closeMenu);