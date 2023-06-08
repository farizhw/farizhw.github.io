// Nav Fix
window.onscroll = function () {
  const header = document.querySelector('header');
  const navFixed = header.offsetTop;
  const toTop = document.querySelector('#toTop');

  if (window.pageYOffset > navFixed) {
    header.classList.add('nav-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('nav-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// Nav Line & Nav Menu
const nav = document.querySelector('#nav');
const navMenu = document.querySelector('#nav-menu');
nav.addEventListener('click', function () {
  nav.classList.toggle('nav-active');
  navMenu.classList.toggle('hidden');
});

// Klik di luar Line
window.addEventListener('click', function (e) {
  if (e.target != nav && e.target != navMenu) {
    nav.classList.remove('nav-active');
    navMenu.classList.add('hidden');
  }
});

// Darkmode Toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function (e) {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// Auto Type
const type = new Typed('.auto-type', {
  strings: [
    'Fresh Graduate of Informatics Engineering',
    'FrontEnd Developer',
    'UI/UX Design',
  ],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

// Pindah posisi Toggle sesuai dengan Mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}