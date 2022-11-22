import{PHOTO_EFFECTS_SETTINGS} from './constants.js';

const form = document.querySelector('.img-upload__form');
const levelSliderElement = document.querySelector('.effect-level__slider');
const effectValueElement = document.querySelector('.effect-level__value');
const imgUploadPreviewImg = document.querySelector('.img-upload__preview img');

const DEFAULT_EFFECT = PHOTO_EFFECTS_SETTINGS[5];

let chosenEffect = DEFAULT_EFFECT;
const isDefault = () => chosenEffect === DEFAULT_EFFECT;

const updateSlider = () => {
  levelSliderElement.classList.remove('hidden');
  levelSliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });

  if(isDefault()) {
    levelSliderElement.classList.add('hidden');
  }
};

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = PHOTO_EFFECTS_SETTINGS.find((effect) => effect.name === evt.target.value);
  updateSlider();
};

const onSliderUpdate = () => {
  imgUploadPreviewImg.style.filter = 'none';
  imgUploadPreviewImg.className = '';
  effectValueElement.value = '';
  if (isDefault()) {
    return;
  }
  const sliderValue = levelSliderElement.noUiSlider.get();
  imgUploadPreviewImg.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  imgUploadPreviewImg.classList.add(`effects__previw--${chosenEffect.name}`);
  effectValueElement.value = levelSliderElement;
};

const resetPhotoEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

noUiSlider.create(levelSliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});

updateSlider();
form.addEventListener('change', onFormChange);
levelSliderElement.noUiSlider.on('update', onSliderUpdate);

export { resetPhotoEffects };
