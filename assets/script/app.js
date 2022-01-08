const btn = document.querySelector('[data-btn]');
const tick = document.getElementById('tick');
const check = document.getElementById('checkmark-container');

btn.addEventListener('click', () => {
    btn.classList.toggle('animating');
    btn.classList.toggle('progress-reverse')
    check.classList.toggle('checkmark-cont')
    tick.classList.toggle('tick');
})

check.addEventListener('click', () => {
    btn.classList.toggle('animating');
    btn.classList.toggle('progress-reverse')
    check.classList.toggle('checkmark-cont')
    tick.classList.toggle('tick');
})