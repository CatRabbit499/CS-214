'use-strict';
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
});