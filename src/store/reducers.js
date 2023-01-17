import { combineReducers } from 'redux';
import common from '../redux/common/reducer';
import authReducer from '../redux/auth/reducer';

const rootReducer = combineReducers({
   common,
   authReducer
});

export default rootReducer;
