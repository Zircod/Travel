'use strict';

const slider = new Slider('.destination__slider');
slider.init();


const popUpEl = document.querySelector('.header__popup');
const burgerEl = document.querySelector('.header__nav-menu');
const closePopUpEl = document.querySelector('.header__popup-close');
burgerEl.addEventListener('click', () => {
  popUpEl.classList.toggle('header__popup-open')
});
closePopUpEl.addEventListener('click', () => {
  popUpEl.classList.toggle('header__popup-open')
});


const loginPopUpBkg = document.querySelector('.login');
const loginPopUp = document.querySelector('.login__form');
const openLoginPopUpBtn = document.querySelector('.header__btn-login');
openLoginPopUpBtn.addEventListener('click', (event) => {
  event.preventDefault();
  loginPopUpBkg.classList.toggle('hidden');
  loginPopUp.classList.toggle('login__form-active');
});
loginPopUpBkg.addEventListener("click", function(e) {
  if (e.target == this) {
    loginPopUpBkg.classList.toggle("hidden");
    loginPopUp.classList.toggle('login__form-active');
    console.log(123)
  }
});


// let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
// let popup = document.querySelector('.popup'); // Само окно
// let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
// let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна
// openPopupButtons.forEach((button) => { // Перебираем все кнопки
//   button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
//     e.preventDefault(); // Предотвращаем дефолтное поведение браузера
//     popupBg.classList.add('active'); // Добавляем класс 'active' для фона
//     popup.classList.add('active'); // И для самого окна
//   })
// });
// closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
//   popupBg.classList.remove('active'); // Убираем активный класс с фона
//   popup.classList.remove('active'); // И с окна
// });
// document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
//   if(e.target === popupBg) { // Если цель клика - фот, то:
//     popupBg.classList.remove('active'); // Убираем активный класс с фона
//     popup.classList.remove('active'); // И с окна
//   }
// });