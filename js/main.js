const intro = document.querySelector('#intro__content');
const features = document.querySelector('#features');
const howWorks = document.querySelector('#how-it-works');
const getDemo = document.querySelector('#get-demo');

function fadeIn(section) {
    if (window.pageYOffset >= section.offsetTop - 350) {
        section.style.transform = 'translate(0px, 0px)';
        section.style.opacity = '1';
    }
}

window.addEventListener('load', ()=> {
    fadeIn(intro);
});

window.addEventListener('scroll', ()=> {
    fadeIn(features);
    fadeIn(howWorks);
    fadeIn(getDemo);
});

