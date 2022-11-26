import {SCALE_MIN_VALUE,
  SCALE_MAX_VALUE,
  SCALE_STEP,
  DEFAUL_VALUE} from './constants.js';

const scaleSmallerElement = document.querySelector('.scale__control--smaller');
const scaleBiggerElement = document.querySelector('.scale__control--bigger');
const scaleValueElement = document.querySelector('.scale__control--value');
const previewPhotoElement = document.querySelector('.img-upload__preview').querySelector('img');

const onDownScale = () => {
  let scaleControlValue = parseInt(scaleValueElement.value, 10);
  if(scaleControlValue > SCALE_MIN_VALUE){
    scaleControlValue -= SCALE_STEP;
    scaleValueElement.value = `${scaleControlValue}%`;
    previewPhotoElement.style.transform = `scale(${scaleControlValue / DEFAUL_VALUE})`;
  }
};

const onUpScale = () => {
  let scaleControlValue = parseInt(scaleValueElement.value, 10);
  if(scaleControlValue < SCALE_MAX_VALUE){
    scaleControlValue += SCALE_STEP;
    scaleValueElement.value = `${scaleControlValue}%`;
    previewPhotoElement.style.transform = `scale(${scaleControlValue / DEFAUL_VALUE})`;
  }
};

const onAddScale = () => {
  scaleValueElement.value = `${DEFAUL_VALUE}%`;
  scaleSmallerElement.addEventListener('click', onDownScale);
  scaleBiggerElement.addEventListener('click', onUpScale);
};

const onRemoveScale = () => {
  scaleSmallerElement.removeEventListener('click', onDownScale);
  scaleBiggerElement.removeEventListener('click', onUpScale);
};

export{scaleValueElement, previewPhotoElement, onRemoveScale, onAddScale, DEFAUL_VALUE};
