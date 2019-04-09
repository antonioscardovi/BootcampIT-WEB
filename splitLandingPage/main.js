const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');
const button = document.querySelector('.button');

left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
});

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
});

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
});

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
});

button.addEventListener('click', () => {
    container.classList.remove('hidden')
}); 