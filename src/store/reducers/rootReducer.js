import { combineReducers } from 'redux';
import cakeReducer from './cakeReducer';

const rootReducer = combineReducers({
    cake: cakeReducer
})

export default rootReducer;