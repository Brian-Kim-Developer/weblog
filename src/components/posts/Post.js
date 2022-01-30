import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import '../../style/posts/Post.scss';

const Post = (props) => {

	const { post, theme } = props;
 
	return (
		<div key={post.id} className="post">
			<header>
				<h3>
					<Link to={`/posts/${post.id}`} className={theme}>{post.title}</Link>
				</h3>
				<small><Moment format="MMM D, YYYY" date={post.date} className={`date ${theme}`} /></small>
			</header>
			<p className={theme}>{post.body}</p>
		</div>
  );
};

const mapStateToProps = (state) => {
  return {
		theme: state.theme,
	};
};

export default connect(
  mapStateToProps
)(Post);
