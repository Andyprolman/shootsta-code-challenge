import { combineReducers } from 'redux';
import uploadsReducer from './components/Uploads/uploadsReducer';

const rootReducer = combineReducers({
  uploads: uploadsReducer
}) 

export default rootReducer;
