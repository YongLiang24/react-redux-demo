import { combineReducers } from 'redux';

import headers from './headerReducer';
import tcfs from './tcfReducer';

export default combineReducers({
  headers,
  tcfs
})