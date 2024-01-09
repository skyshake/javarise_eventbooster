const preloader = document.querySelector('.preloader');
const body = document.querySelector('body');

window.addEventListener('load', () => {
  setTimeout(() => {
    preloader.remove();
    body.style.overflowY = 'scroll';
  }, 1500);
});
