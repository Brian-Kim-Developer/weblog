import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import { fetchPost } from '../../actions';
import '../../style/posts/PostDetail.scss';

const PostDetail = (props) => {

	const { post, fetchPost, theme } = props;

  useEffect(() => {
    fetchPost(Number(props.match.params.id));
  }, [fetchPost, props.match.params.id])

  return (
		<div className={`post-container ${theme}`}>
			<header>
				<h1>{post.title}</h1>
				<p><Moment format="MMM D, YYYY" date={post.date} /></p>
			</header>
			<div>
				<p className="content">{post.body}</p>
			</div>
		</div>
  );
};

const mapStateToProps = (state) => {
  return {
		theme: state.theme,
		post: state.selectedPost
	};
};

export default connect(
  mapStateToProps,
  { fetchPost }
)(PostDetail);
