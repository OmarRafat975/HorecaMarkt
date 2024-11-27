const removeElementsClass = (elementsArr, elClass) => {
  elementsArr.forEach((element) => element.classList.remove(elClass));
};

///////////////////////////////////////
// Slider Component

const slider = () => {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');
  let currSlide = 0;

  ///////////////////////FUNCTIONS/////////////////////////

  // Create Dots Function
  const createDots = () => {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide ="${i}"></button>`
      );
    });
  };
  // but the translate position to each slie
  const sliding = (currSlide = 0) => {
    slides.forEach(
      (slide, i) =>
        (slide.style.transform = `translateX(${(i - currSlide) * 100}%)`)
    );
  };
  //  go to the next slide with right button
  const nextSlide = (e) => {
    if (currSlide === slides.length - 1) {
      currSlide = 0;
    } else {
      currSlide++;
    }
    sliding(currSlide);
    activeDot(currSlide);
  };
  // go to the prev slide with left button
  const prevSlide = (e) => {
    if (currSlide === 0) {
      currSlide = slides.length - 1;
    } else {
      currSlide--;
    }
    sliding(currSlide);
    activeDot(currSlide);
  };
  // Activate Dot
  const activeDot = (slide) => {
    removeElementsClass(
      document.querySelectorAll('.dots__dot'),
      'dots__dot--active'
    );
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };
  // initial Function
  const initSlider = () => {
    createDots();
    sliding();
    activeDot(0);
  };
  // activate the functionality

  initSlider();

  ///////////////////////EVENT HANDLERS/////////////////////////
  btnLeft.addEventListener('click', prevSlide);
  btnRight.addEventListener('click', nextSlide);

  document.addEventListener('keydown', (e) => {
    e.code === 'ArrowRight' && nextSlide();
    e.code === 'ArrowLeft' && prevSlide();
  });

  dotContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      sliding(slide);
      activeDot(slide);
    }
  });
};
slider();
