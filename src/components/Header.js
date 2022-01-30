import { Link } from 'react-router-dom';
import { toggleTheme } from '../actions';
import { connect } from 'react-redux';
import Toggle from 'react-toggle';

import ImageSun from './images/ImageSun';
import ImageMoon from './images/ImageMoon';

import '../style/Header.scss';

const Header = (props) => {

  const { theme, toggleTheme } = props;

  return (
    <div className="header">
      <Link to="/">
        <h1 className={props.theme}>Overreacted</h1>
      </Link>
      <label>
        <Toggle
          defaultChecked={props.theme === 'dark'}
          icons={{
            checked: <ImageMoon />,
            unchecked: <ImageSun />
          }}
          onChange={() => toggleTheme(theme)} />
      </label>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
		theme: state.theme
	};
};

export default connect(
  mapStateToProps,
  { toggleTheme }
)(Header);
