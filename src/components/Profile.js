import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../style/Profile.scss';

const Profile = (props) => {

  const { theme } = props;

  return (
    <div className="profile">
        <img src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg" alt="Profile"/>
        <p className={theme}>Personal blog by <a href="https://mobile.twitter.com/dan_abramov" className={theme}>Dan Abramov</a>. I&nbsp;explain with words and code.</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
		theme: state.theme
	};
};

export default connect(
  mapStateToProps
)(Profile);
