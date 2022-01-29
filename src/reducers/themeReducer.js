import {
  TOGGLE_THEME
} from '../actions/types';

const themeReducer = (state = 'light', action) => {
  switch (action.type) {
    case TOGGLE_THEME:
			return action.payload.theme;
    default:
      return state;
  }
};

export default themeReducer;