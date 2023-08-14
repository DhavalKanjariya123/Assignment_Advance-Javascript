// JavaScript to handle the responsive behavior
const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('show'); // Toggle the 'show' class on the navbar
});
