// stupid button border that cant be set in css
const fcknbtn = document.querySelector('button');
fcknbtn.style.border = 'none';

// hamburger
const hamburgerIcon = document.querySelector('.hamburger__icon');
const hamburgerMenu = document.querySelector('.menu__hamburger');
const hamburgerImg = document.querySelector('.hamburger__img')

hamburgerImg.src = './assets/shared/mobile/icon-hamburger.svg'


hamburgerIcon.addEventListener('click', function () {
    hamburgerMenu.classList.toggle('hidden');

    if (hamburgerImg.src.includes('icon-hamburger.svg')) {
        hamburgerImg.src = './assets/shared/mobile/icon-close.svg';
    } else {
        hamburgerImg.src = './assets/shared/mobile/icon-hamburger.svg';
    }
});