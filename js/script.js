const burgerIcon = document.querySelector('.nav__burger');
const navList = document.querySelector('.nav__list');

burgerIcon.addEventListener('click', function () {
    burgerIcon.classList.toggle('active')
    navList.classList.toggle('active')
})

// DODAC ZAMYKANIE PO KLIKNIECIU LINKU W MENU

// SLIDER
new Glide('.glide', {
    type: 'carousel',
}).mount()

// burgerIcon.addEventListener('click', function () {
//     burgerLines.forEach(line => {
//         line.classList.toggle('close');
//     });
// })