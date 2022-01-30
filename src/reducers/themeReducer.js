import {
  TOGGLE_THEME
} from '../actions/types';

const themeReducer = (state = 'light', action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      const currentTheme = action.payload;
      const selectedTheme = action.payload === 'light' ? 'dark' : 'light';
      document.body.classList.remove(currentTheme);
      document.body.classList.add(selectedTheme);
			return selectedTheme;
    default:
      return state;
  }
};

export default themeReducer;