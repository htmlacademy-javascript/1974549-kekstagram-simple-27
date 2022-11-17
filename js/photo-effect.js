import { PHOTO_EFFECTS_SETTINGS } from './constants.js';

const uploadedPhoto = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevelSliderContainer = document.querySelector('.img-upload__effect-level');

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 1
  },
  start: 0,
  step: 0.1,
  connect: 'lower'
});

const resetPhotoEffects = () => {
  uploadedPhoto.className = 'img-upload__preview';
  uploadedPhoto.style.filter = '';
  effectLevelSlider.setAttribute('disabled', true);
  effectLevelSliderContainer.classList.add('hidden');
  effectLevelValue.value = '';
};

const addPhotoEffects = ({effect, options}) => {
  effectLevelSlider.removeAttribute('disabled');
  effectLevelSliderContainer.classList.remove('hidden');
  uploadedPhoto.className = 'img-upload__preview';
  uploadedPhoto.classList.add(`effects__preview--${effect}`);
  effectLevelSlider.noUiSlider.updateOptions(options);
};

const photoEffectHandler = (evt) => {
  if (evt.target.value === 'none') {
    resetPhotoEffects();
  } else {
    addPhotoEffects(PHOTO_EFFECTS_SETTINGS[evt.target.value]);
  }
};

effectsList.addEventListener('change', photoEffectHandler);

effectLevelSlider.noUiSlider.on('update', () => {
  const effectLevelSliderValue = effectLevelSlider.noUiSlider.get();
  effectLevelValue.value = effectLevelSliderValue;

  const checkedPhotoEffectValue = document.querySelector('input[name="effect"]:checked');
  if (checkedPhotoEffectValue && checkedPhotoEffectValue.value !== 'none') {
    const {filter, unit} = PHOTO_EFFECTS_SETTINGS[checkedPhotoEffectValue.value];
    uploadedPhoto.style.filter = `${filter}(${effectLevelSliderValue}${unit})`;
  }
});

export {
  resetPhotoEffects
};
