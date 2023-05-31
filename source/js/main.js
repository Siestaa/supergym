import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {onPlay} from './functions/video';
import {initTabs} from './modules/tabs/init-tabs';

// swiper.js
import Swiper, {Navigation, Pagination} from 'swiper';

Swiper.use([Navigation, Pagination]);

export const swiperOne = new Swiper('.swiper-one', {
  loop: true,
  slidesPerView: 1,
  grid: {
    rows: 1,
  },
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 480px
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  spaceBetween: 0,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-one',
    prevEl: '.swiper-button-prev-one',
  },
});

export const swiperTwo = new Swiper('.swiper-two', {
  loop: false,
  slidesPerView: 1,
  grid: {
    rows: 1,
  },
  spaceBetween: 0,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-two',
    prevEl: '.swiper-button-prev-two',
  },
});

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    onPlay();
    initTabs();
    const form = new Form();
    form.init();
    window.form = form;
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
