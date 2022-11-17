import {
  getRandomArrayElement,
  getRandomInteger
} from './util.js';

import {
  DESCRIPTION,
  DESCRIPTION_FOTOS
} from './constants.js';

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
