const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children); //grouping <li> together and shoes all <li> elements
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);
const slideSize = slides[0].getBoundingClientRect();
const slideWith = slideSize.width;

// arrange the slides next to one another
// slides[0].style.left = slideWith * 0 + 'px';
// slides[1].style.left = slideWith * 1 + 'px';
// slides[2].style.left = slideWith * 2 + 'px';

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWith * index + 'px';
};

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
};

//looks at all of the slides, index is number how much slides is (0,1,2);
slides.forEach(setSlidePosition);

// when I click the nav index, move that slide
dotsNav.addEventListener('click', e => {
    //which index dot was clicked on
    const targetDot = e.target.closest('button');

    //if targetDot is not a button stop the function
    if (!targetDot) {
        return;
    }

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);

    //dots moving
    updateDots(currentDot, targetDot);
});