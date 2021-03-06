import streams from '../apis/posts';
import {
  TOGGLE_THEME,
	FETCH_POSTS,
  FETCH_POST
} from './types';

export const toggleTheme = (theme) => {
  return {
    type: TOGGLE_THEME,
    payload: theme
  };
};

export const fetchPosts = () => async dispatch => {
  const response = await streams.get('/posts');

  dispatch({
    type: FETCH_POSTS,
    payload: response.data
  });
};

export const fetchPost = (id) => async dispatch => {
  const response = await streams.get('/posts');

  dispatch({
    type: FETCH_POST,
    payload: {
      id,
      posts: response.data
    }
  });
}
