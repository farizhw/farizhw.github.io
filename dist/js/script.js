// Nav Fix
window.onscroll = function () {
  const header = document.querySelector('header');
  const navFixed = header.offsetTop;

  if (window.pageYOffset > navFixed) {
    header.classList.add('nav-fixed');
  } else {
    header.classList.remove('nav-fixed');
  }
}

// Nav Line & Nav Menu
const nav = document.querySelector('#nav');
const navMenu = document.querySelector('#nav-menu') 
nav.addEventListener('click', function () {
  nav.classList.toggle('nav-active');
  navMenu.classList.toggle('hidden');
});

// Auto Type
const type = new Typed('.auto-type', {
  strings: ['Fresh Graduate of Informatics Engineering', 'FrontEnd Developer', 'UI/UX Design'],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
})