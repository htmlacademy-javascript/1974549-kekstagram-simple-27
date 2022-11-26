import{PHOTO_EFFECTS_SETTINGS} from './constants.js';

const imgPreviewElement = document.querySelector('.img-upload__preview img');
const sliderElement = document.querySelector('.effect-level__slider');
const effectValueElement = document.querySelector('.effect-level__value');
const effectButtonElement = document.querySelectorAll('.effects__radio');

const DEFAULT_EFFECT = PHOTO_EFFECTS_SETTINGS[0];
let changeEffects = DEFAULT_EFFECT;
const isDefault = () => changeEffects === DEFAULT_EFFECT;

const getSlider = () => {
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: changeEffects.min,
      max: changeEffects.max,
    },
    step: changeEffects.step,
    start: changeEffects.max,
  });
  if(isDefault()) {
    sliderElement.classList.add('hidden');
  }
};

const onListChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  changeEffects = PHOTO_EFFECTS_SETTINGS.find((effect) => effect.name === evt.target.value);
  getSlider();
};

const onSliderUpdate = () => {
  imgPreviewElement.style.filter = 'none';
  imgPreviewElement.className = '';
  imgPreviewElement.value = '';
  if (isDefault()) {
    return;
  }
  const newValueSlider = sliderElement.noUiSlider.get();
  imgPreviewElement.style.filter = `${changeEffects.style}(${newValueSlider}${changeEffects.unit})`;
  imgPreviewElement.classList.add(`effects__preview--${changeEffects.name}`);
  effectValueElement.value = sliderElement;
};

const resetSliderImg = () => {
  effectButtonElement[0].checked = true;
  changeEffects = DEFAULT_EFFECT;
  imgPreviewElement.removeAttribute('class');
  imgPreviewElement.removeAttribute('style');
  getSlider();
};

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});

getSlider();

sliderElement.noUiSlider.on('update', onSliderUpdate);

export{onListChange, resetSliderImg};
