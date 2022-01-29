import streams from '../apis/posts';
import {
  TOGGLE_THEME,
	FETCH_POSTS,
  SELECT_POST
} from './types';

export const toggleTheme = theme => {
  return {
    type: TOGGLE_THEME,
    payload: theme
  };
};

export const fetchPosts = () => async dispatch => {
  const response = await streams.get('/posts');

  dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const selectPost = (posts, id) => {
  return {
    type: SELECT_POST,
    payload: {
      posts,
      id
    }
  }
}
