import {DEFAUL_VALUE} from './constants.js';
import {scaleValue, previewPhoto, onRemoveScale, onAddScale} from './scale-button.js';
import {elementDescription} from './valid-form.js';
import {isEscapeKey, isEnterKey} from './util.js';
import {onListChange, resetSliderImg} from './photo-effect.js';

const body = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUpload = document.querySelector('.img-upload__input');
const userCloseModalWindow = imgUploadOverlay.querySelector('.img-upload__cancel');

const onUserModuleReset = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.toggle('modal-open');
  elementDescription.value = '';
  scaleValue.value = `${DEFAUL_VALUE}%`;
  previewPhoto.style = 'transform: scale(1)';
  resetSliderImg();
  onRemoveScale();
  imgUpload.value = '';
  imgUpload.innerHTML = '';
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
  imgUploadOverlay.classList.remove('hidden');
  body.classList.toggle('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  onAddScale();
  uploadForm.addEventListener('change', onListChange);
  document.removeEventListener('change', onEnterKeydown);
};

function onEnterKeydown (evt){
  if (isEnterKey(evt)) {
    openUserModule();
  }
}

imgUpload.addEventListener('change', () => {
  openUserModule();
});

document.addEventListener('change', onEnterKeydown);

// Закрытие модального окна
const closeUserModule = () =>{
  uploadForm.removeEventListener('change', onListChange);
  document.removeEventListener('keydown', onPopupEscKeydown);
  onUserModuleReset();
};

userCloseModalWindow.addEventListener('click', () => {
  closeUserModule();
});

//Закрытие через Enter
userCloseModalWindow.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeUserModule();
  }
});

export{closeUserModule};
