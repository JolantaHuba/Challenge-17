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

// Links.forEach(link => {
//     link.addEventListener('click', function () {
//         let goTo = this.getAttribute('href').replace('#', '.')
//         console.log(goTo)
//         document.querySelector(goTo).scrollIntoView()
//     })
// });

// SLIDER
new Glide('.glide', {
    type: 'carousel',
}).mount()

// burgerIcon.addEventListener('click', function () {
//     burgerLines.forEach(line => {
//         line.classList.toggle('close');
//     });
// })