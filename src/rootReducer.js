import { combineReducers } from 'redux';
import homeReducer from './components/Home/homeReducer';
import uploadsReducer from './components/Uploads/uploadsReducer';

const rootReducer = combineReducers({
  home: homeReducer,
  uploads: uploadsReducer
}) 

export default rootReducer;