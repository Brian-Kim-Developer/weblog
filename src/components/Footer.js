import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../style/Footer.scss'

const Footer = (props) => {

	const { theme } = props;
 
	return (
		<footer>
			<div>
				<Link to="/rss.xml" target="_blank" rel="noopener noreferrer" className={theme}>rss</Link>
			</div>
			<a href="https://mobile.twitter.com/dan_abramov" target="_blank" rel="noopener noreferrer" className={theme}>twitter</a>
			<span>&nbsp;•&nbsp;</span>
			<a href="https://github.com/gaearon" target="_blank" rel="noopener noreferrer" className={theme}>github</a>
			<span>&nbsp;•&nbsp;</span>
			<a href="https://stackoverflow.com/users/458193/dan-abramov" target="_blank" rel="noopener noreferrer" className={theme}>stack overflow</a>
		</footer>
  );
};

const mapStateToProps = (state) => {
  return {
		theme: state.theme,
	};
};

export default connect(
  mapStateToProps
)(Footer);
