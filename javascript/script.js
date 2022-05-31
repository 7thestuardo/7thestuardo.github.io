
//======menu=======//

(function(){
    const openButton = document.querySelector('.nav_menu');
    const menu = document.querySelector('.nav');
    const closeMenu = document.querySelector('.nav_close');
    const menuLinks = document.querySelectorAll('.nav a[href^="#"]');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav--show')
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav--show');
    });

    menuLinks.forEach(menuLinks => {
    menuLinks.addEventListener("click", function() {
        menu.classList.remove('nav--show');
        })
    });

})();

//======Scroll=======//
const sr = ScrollReveal ({
    distance: '40px',
    duration: 2600,
    reset: true
})

sr.reveal('.home-text', {delay:300, origin:'left'})
sr.reveal('.about, .proyect, .contact, .footer', {delay:100, origin:'bottom'})