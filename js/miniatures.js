const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureListElement = document.querySelector('.pictures');

const miniaturePhotos = (simularMiniature) => {
  const fragment = document.createDocumentFragment();
  simularMiniature.forEach(({likes, comments, url, description}) => {
    const clonePictureTemplate = pictureTemplate.cloneNode(true);
    clonePictureTemplate.querySelector('.picture__likes').textContent = likes;
    clonePictureTemplate.querySelector('.picture__comments').textContent = comments;
    clonePictureTemplate.querySelector('.picture__img').src = url;
    clonePictureTemplate.querySelector('.picture__img').alt = description;
    fragment.appendChild(clonePictureTemplate);
  });
  pictureListElement.appendChild(fragment);
};

export {miniaturePhotos};
