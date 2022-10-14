//(https://learn.javascript.ru/task/random-int-min-max)

//Функция возвращающая случайное целое число из переданного диапазона включительно
function getRandomInteger(min, max) {
  const randomNamber = min + Math.random() * (max + 1 - min);
  if (min < 0 || max <= min) {
    return NaN;
  }
  return Math.floor(randomNamber);
}

const MAX_LENGTH = 140;

const checkStringLengths = (string) => (string.length <= MAX_LENGTH);

checkStringLengths('string');


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

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const fotoDescription = (getId) => ({
  id: getId,
  url: `photos/${getRandomInteger(1,25)}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  comments: getRandomInteger(0, 200),
});

const similarDescriptionPhoto = Array.from({
  length: DESCRIPTION_FOTOS
}, (a, b) => fotoDescription(b));

export {
  similarDescriptionPhoto,
};
