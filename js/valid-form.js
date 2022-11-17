import {
  MAX_LENGTH,
  MIN_LENGTH
} from './constants.js';

const userModuleForm = document.querySelector('.img-upload__form');
const pristine = new Pristine(userModuleForm, {
  classTo: 'text',
  errorTextClass: 'text__description--error',
  errorTextParent: 'text',
  successClass: 'text__description--valid',
  errorClass: 'text__description--invalid',
  errorTextTag: 'div',
});


const validateDescriptionText = (value) => value.length >= MIN_LENGTH && value.length <= (MAX_LENGTH - 1);

pristine.addValidator(
  userModuleForm.querySelector('.text__description'),
  validateDescriptionText,
  'Введите от 20 до 140 символов'
);


const onUploadFormSubmit = ()=>{
  userModuleForm.addEventListener('submit',(evt)=>{
    const isValid = pristine.validate();
    if (!isValid) {
      evt.preventDefault();
    }
  });
};


export {onUploadFormSubmit};
