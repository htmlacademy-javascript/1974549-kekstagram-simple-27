import {
  getRandomArrayElement,
  getRandomInteger
} from './util.js';

const DESCRIPTION = [
  'Лето',
  'Осень',
  'Зима',
  'Весна',
  'Пора уезжать',
  'Я остаюсь',
  'Бывало и лучше',
  'Раньше было лучше',
  'Все хорошо',
  'Закат',
  'Я не люблю скайрим',
  'Просто космос',
  'Библейская история',
  'Игорь существует',
];

const DESCRIPTION_FOTOS = 25;

const fotoDescription = (getId) => ({
  id: getId + 1,
  url: `photos/${(getId + 1)}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  comments: getRandomInteger(0, 200),
});

const similarDescriptionPhoto = () => Array.from({
  length: DESCRIPTION_FOTOS
}, (a, b) => fotoDescription(b));

export {
  similarDescriptionPhoto,
};
