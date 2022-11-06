import {
  similarDescriptionPhoto
} from './data.js';


const similarListElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const galleryPhotos = similarDescriptionPhoto();

const getUsersGallery = (galleryValues) => {
  const pictureFragment = document.createDocumentFragment();

  galleryValues.forEach(({
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

  similarListElement.append(pictureFragment);
};

export {
  getUsersGallery,
  galleryPhotos
};
