'use strict'
class Slider {
  constructor(selector) {
    this.sliderEl = document.querySelector(selector);

    if (!this.sliderEl) {
      throw new Error("Wrong selector");
    }

    this.slides = this.sliderEl.querySelectorAll('.destination__slide');
    this.sliderInx = 1;
    this.input = document.querySelectorAll('.destination__label');
  }

  init() {
  const leftArrow = document.querySelector('.destination__slide-arrow-left');
  const rightArrow = document.querySelector('.destination__slide-arrow-right');

    window.addEventListener('load', () => {
      this.slides[this.sliderInx].classList.remove('hidden');
      this.input[this.sliderInx].classList.add('destination__label-active');

      leftArrow.addEventListener('click', () => {
        this.prevSlide();
      });

      rightArrow.addEventListener('click', () => {
        this.nextSlide();
      });
    });
  }

  prevSlide() {
    this.slides[this.sliderInx].classList.add('hidden');
    this.input[this.sliderInx].classList.remove('destination__label-active');

    if (this.sliderInx === 0) {
      this.sliderInx = this.slides.length -1;
    } else {
      this.sliderInx--;
    }

    this.slides[this.sliderInx].classList.remove('hidden');
    this.input[this.sliderInx].classList.add('destination__label-active');
  }

  nextSlide() {
    this.slides[this.sliderInx].classList.add('hidden');
    this.input[this.sliderInx].classList.remove('destination__label-active');

    if (this.sliderInx === this.slides.length -1) {
      this.sliderInx = 0;
    } else {
      this.sliderInx++;
    }

    this.slides[this.sliderInx].classList.remove('hidden');
    this.input[this.sliderInx].classList.add('destination__label-active');
  }
}


//es5
// function Slider(selector) {
//   this.sliderEl = document.querySelector(selector);
//   if (!this.sliderEl) {
//     throw new Error("Wrong selector");
//   }
//
//   this.slides = this.sliderEl.querySelectorAll('.destination__slide');
//   this.sliderInx = 1;
//   this.input = document.querySelectorAll('.destination__label');
// }
//
// Slider.prototype.init = function () {
//   const leftArrow = document.querySelector('.destination__slide-arrow-left');
//   const rightArrow = document.querySelector('.destination__slide-arrow-right');
//
//   window.addEventListener('load', () => {
//     this.slides[this.sliderInx].classList.remove('hidden');
//     this.input[this.sliderInx].classList.add('destination__label-active');
//
//     leftArrow.addEventListener('click', () => {
//       this.prevSlide();
//     });
//
//     rightArrow.addEventListener('click', () => {
//       this.nextSlide();
//     });
//   });
// }
//
// Slider.prototype.prevSlide = function () {
//   this.slides[this.sliderInx].classList.add('hidden');
//   this.input[this.sliderInx].classList.remove('destination__label-active');
//
//   if (this.sliderInx === 0) {
//     this.sliderInx = this.slides.length -1;
//   } else {
//     this.sliderInx--;
//   }
//
//   this.slides[this.sliderInx].classList.remove('hidden');
//   this.input[this.sliderInx].classList.add('destination__label-active');
// }
//
// Slider.prototype.nextSlide = function () {
//   this.slides[this.sliderInx].classList.add('hidden');
//   this.input[this.sliderInx].classList.remove('destination__label-active');
//
//   if (this.sliderInx === this.slides.length -1) {
//     this.sliderInx = 0;
//   } else {
//     this.sliderInx++;
//   }
//
//   this.slides[this.sliderInx].classList.remove('hidden');
//   this.input[this.sliderInx].classList.add('destination__label-active');
// }