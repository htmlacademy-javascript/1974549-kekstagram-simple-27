import {
  similarDescriptionPhoto
} from './data.js';

const similarListElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

similarDescriptionPhoto.forEach(({
  likes,
  comments,
  url
}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  similarListElement.append(pictureElement);
});
