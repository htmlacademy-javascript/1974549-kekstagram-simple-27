import {
  MAX_LENGTH
} from './constants.js';


//(https://learn.javascript.ru/task/random-int-min-max)

//Функция возвращающая случайное целое число из переданного диапазона включительно
function getRandomInteger(min, max) {
  const randomNamber = min + Math.random() * (max + 1 - min);
  if (min < 0 || max <= min) {
    return NaN;
  }
  return Math.floor(randomNamber);
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Функция для проверки максимальной длины строки.

const checkStringLengths = (string) => (string.length <= MAX_LENGTH);

checkStringLengths('string');

const isEscapeKey = (evt) => evt.key === 'Escape';

export {
  getRandomInteger,
  checkStringLengths,
  getRandomArrayElement,
  isEscapeKey
};
