import { Link } from 'react-router-dom';
import { toggleTheme } from '../actions';
import { connect } from 'react-redux';

const Header = (props) => {

  const { theme, toggleTheme } = props;

  return (
    <div className="">
      <Link to="/">
        Overreacted
      </Link>
      <div>{theme}</div>
      <button onClick={() => toggleTheme(theme)}>Toggle Theme</button>
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
