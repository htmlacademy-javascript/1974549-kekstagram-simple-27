const pictureElement = document.querySelector('#picture').content.querySelector('.picture');
const pictureListElement = document.querySelector('.pictures');

const createMiniaturePhotos = (miniature) => {
  const fragment = document.createDocumentFragment();
  miniature.forEach(({likes, comments, url, description}) => {
    const clonePictureElement = pictureElement.cloneNode(true);
    clonePictureElement.querySelector('.picture__likes').textContent = likes;
    clonePictureElement.querySelector('.picture__comments').textContent = comments;
    clonePictureElement.querySelector('.picture__img').src = url;
    clonePictureElement.querySelector('.picture__img').alt = description;
    fragment.appendChild(clonePictureElement);
  });
  pictureListElement.appendChild(fragment);
};

export {createMiniaturePhotos};
