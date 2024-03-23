const closeBtn = document.querySelector('.close-btn');
const overLay = document.querySelector('.overlay');
const navBtn = document.querySelector('.header-mobile');
const navBar = document.querySelector('#nav-bar-mobile');
document.querySelector('a').addEventListener('click', function(event) {
    if (window.innerWidth < 740) {
      event.preventDefault();
      var target = document.querySelector(event.target.hash);
      target.scrollIntoView({behavior: 'smooth'});
      window.scrollBy(0, -24);
    }
  });
navBtn.addEventListener('click',()=>{
    overLay.style.visibility = 'visible';
    overLay.style.opacity = '1';
    navBar.style.visibility = 'visible';
    navBar.style.transform = 'translateY(0%)';
    navBar.style.opacity = '1';
});
closeBtn.addEventListener('click',closeNavBar);
overLay.addEventListener('click',closeNavBar);
navBar.addEventListener('click',closeNavBar);
function closeNavBar(){
    overLay.style.visibility = 'hidden';
    overLay.style.opacity = '0';
    navBar.style.visibility = 'hidden';
    navBar.style.transform = 'translateY(-50%)';
    navBar.style.opacity = '0';
}
