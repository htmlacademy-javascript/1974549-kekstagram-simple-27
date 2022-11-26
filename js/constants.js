const MIN_LENGTH = 20;
const MAX_LENGTH = 140;

const SCALE_MIN_VALUE = 25;
const SCALE_MAX_VALUE = 100;

const SCALE_STEP = 25;
const DEFAUL_VALUE = 100;

const ALERT_SHOW_TIME = 5000;

const PHOTO_EFFECTS_SETTINGS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  }
];

export {
  MAX_LENGTH,
  MIN_LENGTH,
  PHOTO_EFFECTS_SETTINGS,
  SCALE_MIN_VALUE,
  SCALE_MAX_VALUE,
  SCALE_STEP,
  DEFAUL_VALUE,
  ALERT_SHOW_TIME
};
