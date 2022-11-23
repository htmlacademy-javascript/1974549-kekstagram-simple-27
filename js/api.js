import {ALERT_SHOW_TIME} from './constants.js';

const SAVE_PICTURES_DATA = 'https://27.javascript.pages.academy/kekstagram-simple';
const GET_DATA_PICTURES = 'https://27.javascript.pages.academy/kekstagram-simple/data';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const getData = (onSuccess) => {
  fetch(
    GET_DATA_PICTURES,
  )
    .then((response) => response.json())
    .then((pictures) => {
      onSuccess(pictures);
    })
    .catch(() => {
      showAlert('Ошибка загрузки');
    });
};


const sendData = async (onSuccess, onFail, body) => {
  try {
    const response = await fetch(
      SAVE_PICTURES_DATA,
      {
        method: 'POST',
        body,
      },
    );
    if(!response.ok) {
      throw new Error('Форма не отправлена. Попробуйте ещё раз');
    }
    onSuccess();
  }
  catch(error) {
    onFail(error.message);
  }
};

export{getData, sendData};
