import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectPost } from '../../actions';

const PostDetail = (props) => {

	const { post, posts, selectPost } = props;

  useEffect(() => {
    selectPost(posts, Number(props.match.params.id));
  }, [])

  return (
		<React.Fragment>
			<div>ID: {post.id}</div>
			<div>User ID: {post.userId}</div>
			<div>Title: {post.title}</div>
			<div>Body: {post.body}</div>
		</React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
		posts: state.posts,
		post: state.selectedPost
	};
};

export default connect(
  mapStateToProps,
  { selectPost }
)(PostDetail);
