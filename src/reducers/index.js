import { combineReducers } from 'redux';

import postReducer from './postReducer';
import themeReducer from './themeReducer';

export default combineReducers({
  theme: themeReducer,
  posts: postReducer
});
