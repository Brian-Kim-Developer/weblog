import { combineReducers } from 'redux';

import themeReducer from './themeReducer';
import postsReducer from './postsReducer';
import selectedPostReducer from './selectedPostReducer';

export default combineReducers({
  theme: themeReducer,
  posts: postsReducer,
  selectedPost: selectedPostReducer
});
