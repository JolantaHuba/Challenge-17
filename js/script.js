let burgerIcon = document.querySelector('.nav__burger');
let navList = document.querySelector('.nav__list');

burgerIcon.addEventListener('click', function () {
    burgerIcon.classList.toggle('active')
    navList.classList.toggle('active')
})

// burgerIcon.addEventListener('click', function () {
//     burgerLines.forEach(line => {
//         line.classList.toggle('close');
//     });
// })