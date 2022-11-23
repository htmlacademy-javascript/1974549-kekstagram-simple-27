import {
  SCALE_MAX_VALUE,
  SCALE_MIN_VALUE,
  SCALE_STEP,
  DEFAUL_VALUE
} from './constants.js';

const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const previewPhoto = document.querySelector('.img-upload__preview img');

let defaultScale = 100;


const scaleImage = () => {
  previewPhoto.style.transform = `scale(${DEFAUL_VALUE / 100})`;
  scaleValue.value = `${DEFAUL_VALUE}%`;
  defaultScale = 100;
};
const scaleReset = () => {
  scaleImage ();
};

const onButtonDownScale = () => {
  if(defaultScale > SCALE_MIN_VALUE){
    defaultScale -= SCALE_STEP;
    scaleValue.value = `${defaultScale}%`;
    previewPhoto.style.transform = `scale(${defaultScale / 100})`;
  }
};

const onUpButtonScale = () => {
  if(defaultScale < SCALE_MAX_VALUE){
    defaultScale += SCALE_STEP;
    scaleValue.value = `${defaultScale}%`;
    previewPhoto.style.transform = `scale(${defaultScale / 100})`;
  }
};

scaleSmaller.addEventListener('click', onButtonDownScale);
scaleBigger.addEventListener('click', onUpButtonScale);

export{scaleReset};
