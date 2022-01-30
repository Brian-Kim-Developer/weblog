import { Link } from 'react-router-dom';
import { toggleTheme } from '../actions';
import { connect } from 'react-redux';

import '../style/Header.scss';

const Header = (props) => {

  const { theme, toggleTheme } = props;

  return (
    <div className="header">
      <Link to="/">
        <h1 className={props.theme}>Overreacted</h1>
      </Link>
      <button className="react-toggle" onClick={() => toggleTheme(theme)}>Toggle Theme</button>
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
