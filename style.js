const yearEl = document.querySelector('.year');

const date = new Date();
const currentYear = date.getFullYear();
// console.log(currentYear);
yearEl.innerHTML = currentYear;

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
};

let section = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      document
        .querySelector(`header nav a[href*='${id}']`)
        .classList.add('active');
    }
  });
};

ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal(
  '.home-img, .services-container, .portfolio-box, contact form',
  {
    origin: 'bottom',
  }
);
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Web designer'],
  typeSpeed: 70,
  backspeed: 70,
  backDelay: 1000,
  loop: true,
});