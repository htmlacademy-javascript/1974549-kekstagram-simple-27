import {
  isEscapeKey
} from './util.js';

import {
  onUploadFormSubmit
} from './valid-form.js';

const body = document.querySelector('body');
const uploadFile = body.querySelector('#upload-file');
const imgUploadOverlay = body.querySelector('.img-upload__overlay');
const userCloseModalWindow = body.querySelector('.img-upload__cancel');
const uploadForm = document.querySelector('.img-upload__form');

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function openUserModal() {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.toggle('modal-open');
  onUploadFormSubmit();

  document.addEventListener('keydown', onModalEscKeydown);
}

uploadFile.addEventListener('change', () => {
  openUserModal();
});


function closeUserModal() {
  imgUploadOverlay.classList.add('hidden');
  body.classList.toggle('modal-open');
  uploadForm.reset();

  document.removeEventListener('keydown', onModalEscKeydown);
}

userCloseModalWindow.addEventListener('click', () => {
  closeUserModal();
});
