import {SCALE_MIN_VALUE,
  SCALE_MAX_VALUE,
  SCALE_STEP,
  DEFAUL_VALUE} from './constants.js';

const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const previewPhoto = document.querySelector('.img-upload__preview').querySelector('img');

const onDownScale = () => {
  let scaleControlValue = parseInt(scaleValue.value, 10);
  if(scaleControlValue > SCALE_MIN_VALUE){
    scaleControlValue -= SCALE_STEP;
    scaleValue.value = `${scaleControlValue}%`;
    previewPhoto.style.transform = `scale(${scaleControlValue / DEFAUL_VALUE})`;
  }
};

const onUpScale = () => {
  let scaleControlValue = parseInt(scaleValue.value, 10);
  if(scaleControlValue < SCALE_MAX_VALUE){
    scaleControlValue += SCALE_STEP;
    scaleValue.value = `${scaleControlValue}%`;
    previewPhoto.style.transform = `scale(${scaleControlValue / DEFAUL_VALUE})`;
  }
};

const onAddScale = () => {
  scaleValue.value = `${DEFAUL_VALUE}%`;
  scaleSmaller.addEventListener('click', onDownScale);
  scaleBigger.addEventListener('click', onUpScale);
};

const onRemoveScale = () => {
  scaleSmaller.removeEventListener('click', onDownScale);
  scaleBigger.removeEventListener('click', onUpScale);
};

export{scaleValue, previewPhoto, onRemoveScale, onAddScale, DEFAUL_VALUE};
