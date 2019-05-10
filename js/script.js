const burgerIcon = document.querySelector('.nav__burger');
const navList = document.querySelector('.nav__list');
const Links = document.querySelectorAll('a')

burgerIcon.addEventListener('click', function () {
    burgerIcon.classList.toggle('active')
    navList.classList.toggle('active')
})

navList.addEventListener('click', function () {
    navList.classList.remove('active')
    burgerIcon.classList.remove('active')
})

// scroll, animation offset... instead scrollIntoView

Links.forEach(link => {
    link.addEventListener('click', function () {
        let goTo = this.getAttribute('href').replace('#', '.')
        let howFar = document.querySelector(goTo).offsetTop - 60
        window.scroll(0, howFar)
        // document.querySelector(goTo).scrollIntoView(true)
    })
})

// SLIDER
new Glide('.glide', {
    type: 'carousel',
}).mount()

// burgerIcon.addEventListener('click', function () {
//     burgerLines.forEach(line => {
//         line.classList.toggle('close');
//     });
// })