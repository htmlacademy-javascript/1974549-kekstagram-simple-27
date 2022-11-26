import {closeUserModule} from './user-modal.js';

import {setUserModule} from './valid-form.js';

import {createMiniaturePhotos} from './miniatures.js';

import {getData} from './api.js';

getData((pictures) => {
  createMiniaturePhotos(pictures);
});

setUserModule(closeUserModule);
