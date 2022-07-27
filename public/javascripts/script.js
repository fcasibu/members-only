/* eslint-disable no-undef */
const info = document.querySelector('.info-box');
const menu = document.querySelector('.hamburger-menu');
const links = document.querySelector('.primary__links');

if (info) {
  setTimeout(() => {
    info.remove();
  }, 5000);
}

menu.addEventListener('click', () => {
  menu.classList.toggle('toggle-menu');
  links.classList.toggle('toggle-links');
});
