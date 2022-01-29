import streams from '../apis/posts';
import {
  TOGGLE_THEME,
	FETCH_POSTS
} from './types';

export const toggleTheme = theme => {
  return {
    type: TOGGLE_THEME,
    payload: theme
  };
};

export const fetchPosts = () => async dispatch => {
  const response = await streams.get('/posts');
  console.log('posts', response.data)
  dispatch({ type: FETCH_POSTS, payload: response.data });
};
