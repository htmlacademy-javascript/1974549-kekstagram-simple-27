import {closeUserModule} from './user-modal.js';

import {setUserModule} from './valid-form.js';

import {miniaturePhotos} from './miniatures.js';

import {getData} from './api.js';

getData((pictures) => {
  miniaturePhotos(pictures);
});
setUserModule(closeUserModule);
