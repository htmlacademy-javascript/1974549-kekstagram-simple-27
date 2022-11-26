import {
  MIN_LENGTH,
  MAX_LENGTH
} from './constants.js';
import {
  sendData
} from './api.js';
import {
  isEscapeKey
} from './util.js';

const bodyElement = document.querySelector('body');
const userFormElement = document.querySelector('.img-upload__form');
const submitButtonElement = userFormElement.querySelector('.img-upload__submit');
const descriptionElement = userFormElement.querySelector('.text__description');
const reportSuccessElement = document.querySelector('#success').content.querySelector('.success');
const reportErrorElement = document.querySelector('#error').content.querySelector('.error');
const successButtonElement = document.querySelector('#success').content.querySelector('.success__button');
const errorButtonElement = document.querySelector('#error').content.querySelector('.error__button');

const pristine = new Pristine(userFormElement, {
  classTo: 'text',
  errorTextClass: 'text__description--error',
  errorTextParent: 'text',
  errorClass: 'text__description--invalid',
  successClass: 'text__description--valid',
  errorTextTag: 'div',
});

const validateCommentMin = (value) => value.length >= MIN_LENGTH;

const validateCommentMax = (value) => value.length <= MAX_LENGTH;

pristine.addValidator(
  descriptionElement,
  validateCommentMin,
  'Меньше 20 символов'
);

pristine.addValidator(
  descriptionElement,
  validateCommentMax,
  'Больше 140 символов'
);

const onMessageEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hiddenReport();
  }
};

const onHidenMessage = () => {
  hiddenReport();
};

const blockSubmitButton = () => {
  submitButtonElement.disabled = true;
  descriptionElement.readOnly = true;
  submitButtonElement.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButtonElement.disabled = false;
  descriptionElement.readOnly = false;
  submitButtonElement.textContent = 'Загрузить';
};

const getSuccessReport = () => {
  const successReport = reportSuccessElement.cloneNode(true);
  document.addEventListener('keydown', onMessageEsc);
  document.addEventListener('click', onHidenMessage);
  successButtonElement.addEventListener('click', onHidenMessage);
  bodyElement.append(successReport);
  bodyElement.style.overflow = 'hidden';
};

const getErrorReport = () => {
  const errorReport = reportErrorElement.cloneNode(true);
  document.addEventListener('keydown', onMessageEsc);
  document.addEventListener('click', onHidenMessage);
  errorButtonElement.addEventListener('click', onHidenMessage);
  bodyElement.append(errorReport);
  bodyElement.style.overflow = 'hidden';
};

function hiddenReport() {
  const reportElement = document.querySelector('.success') || document.querySelector('.error');
  reportElement.remove();
  document.removeEventListener('keydown', onMessageEsc);
  document.removeEventListener('click', onHidenMessage);
  successButtonElement.removeEventListener('click', onHidenMessage);
  errorButtonElement.removeEventListener('click', onHidenMessage);
  bodyElement.style.overflow = 'auto';
}

const setUserModule = (onSuccess) => {
  userFormElement.addEventListener('submit', onSubmitButton);

  function onSubmitButton(evt) {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          getSuccessReport();
        },
        () => {
          getErrorReport();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  }
};


export {
  descriptionElement,
  setUserModule,
};
