import Slide from './slide.js';
import { addPeople, dropDown, pickMeridiem } from './form.js';

const slide = new Slide('.slide__image', '.slide__text', '.slide__label');
slide.init();

if (document.querySelector('.form')) {
  addPeople('.button-number-picker', '.people-aria-text');
  dropDown('.meridiem__toggle', '.meridiem__dropdown');
  pickMeridiem('.button-meridiem', '.meridiem__text');
}
