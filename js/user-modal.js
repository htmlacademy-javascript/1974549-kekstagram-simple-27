import {DEFAUL_VALUE} from './constants.js';
import {scaleValueElement, previewPhotoElement, onRemoveScale, onAddScale} from './scale-button.js';
import {descriptionElement} from './valid-form.js';
import {isEscapeKey, isEnterKey} from './util.js';
import {onListChange, resetSliderImg} from './photo-effect.js';

const bodyElement = document.querySelector('body');
const uploadFormElement = document.querySelector('.img-upload__form');
const imgOverlayElement = document.querySelector('.img-upload__overlay');
const imgInputElement = document.querySelector('.img-upload__input');
const userCloseModalElement = imgOverlayElement.querySelector('.img-upload__cancel');

const onUserModuleReset = () => {
  imgOverlayElement.classList.add('hidden');
  bodyElement.classList.toggle('modal-open');
  descriptionElement.value = '';
  scaleValueElement.value = `${DEFAUL_VALUE}%`;
  previewPhotoElement.style = 'transform: scale(1)';
  resetSliderImg();
  onRemoveScale();
  imgInputElement.value = '';
  imgInputElement.innerHTML = '';
};

//Закрытие через ESC
const onPopupEscKeydown = function (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onUserModuleReset();
  }
};

// Открытие модального окна
const openUserModule = () => {
  imgOverlayElement.classList.remove('hidden');
  bodyElement.classList.toggle('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  onAddScale();
  uploadFormElement.addEventListener('change', onListChange);
  document.removeEventListener('change', onEnterKeydown);
};

function onEnterKeydown (evt){
  if (isEnterKey(evt)) {
    openUserModule();
  }
};

imgInputElement.addEventListener('change', () => {
  openUserModule();
});

document.addEventListener('change', onEnterKeydown);

// Закрытие модального окна
const closeUserModule = () =>{
  uploadFormElement.removeEventListener('change', onListChange);
  document.removeEventListener('keydown', onPopupEscKeydown);
  onUserModuleReset();
};

userCloseModalElement.addEventListener('click', () => {
  closeUserModule();
});

//Закрытие через Enter
userCloseModalElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeUserModule();
  }
});

export{closeUserModule};
