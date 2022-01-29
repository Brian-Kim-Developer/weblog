import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import { fetchPost } from '../../actions';

const PostDetail = (props) => {

	const { post, fetchPost } = props;

  useEffect(() => {
    fetchPost(Number(props.match.params.id));
  }, [])

  return (
		<React.Fragment>
			<Moment format="MMM D, YYYY" date={post.date} />
			<div>User ID: {post.userId}</div>
			<div>Title: {post.title}</div>
			<div>Body: {post.body}</div>
		</React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
		post: state.selectedPost
	};
};

export default connect(
  mapStateToProps,
  { fetchPost }
)(PostDetail);
