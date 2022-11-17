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

const PHOTO_EFFECTS_SETTINGS = {
  chrome: {
    filter: 'grayscale',
    unit: '',
    options: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    }
  },

  sepia: {
    filter: 'sepia',
    unit: '',
    options: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    }
  },

  marvin: {
    filter: 'invert',
    unit: '%',
    options: {
      range: {
        min: 0,
        max: 100
      },
      start: 100,
      step: 1
    }
  },

  phobos: {
    filter: 'blur',
    unit: 'px',
    options: {
      range: {
        min: 0,
        max: 3
      },
      start: 3,
      step: 0.1
    }
  },

  heat: {
    filter: 'brightness',
    unit: '',
    options: {
      range: {
        min: 1,
        max: 3
      },
      start: 3,
      step: 0.1
    }
  }
};

const MAX_LENGTH = 140;
const MIN_LENGTH = 20;
const DESCRIPTION_FOTOS = 25;


const SCALE_MIN_VALUE = 25;
const SCALE_MAX_VALUE = 100;
const SCALE_STEP = 25;
const DEFAUL_VALUE = 100;

export {
  DESCRIPTION,
  MAX_LENGTH,
  DESCRIPTION_FOTOS,
  MIN_LENGTH,
  SCALE_MIN_VALUE,
  SCALE_MAX_VALUE,
  SCALE_STEP,
  DEFAUL_VALUE,
  PHOTO_EFFECTS_SETTINGS
};
