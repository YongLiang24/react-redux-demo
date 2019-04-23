import header from './headerReducer';
import tcf from './tcfReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    header,
    tcf
})
