import {forEachPolyfill} from './utils/polyfill-foreach';
import {initIe11Download} from './utils/init-ie11-download';

// Utils
// ---------------------------------
forEachPolyfill();
initIe11Download();

// Modules
// ---------------------------------

import './main/scroll';
import './main/accordion';
import './main/validate';
import './main/phoneMask';
import './main/modal';
