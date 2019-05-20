// NAVIGATION

const Links = document.querySelectorAll('a');
const burgerIcon = document.querySelector('.nav__burger');
const navList = document.querySelector('.nav__list');

burgerIcon.addEventListener('click', function () {
    burgerIcon.classList.toggle('active');
    navList.classList.toggle('active');
})

navList.addEventListener('click', function () {
    navList.classList.remove('active');
    burgerIcon.classList.remove('active');
})

// SCROLL
Links.forEach(link => {
    link.addEventListener('click', function () {
        if (this.getAttribute('href')[0] == '#') {
            let goTo = this.getAttribute('href').replace('#', '.');
            let howFar = document.querySelector(goTo).offsetTop - 60;
            window.scroll(0, howFar);
        }
    })
})

// SLIDER
new Glide('.glide', {
    type: 'carousel',
}).mount();