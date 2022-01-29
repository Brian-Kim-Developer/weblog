import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import { fetchPosts } from '../../actions';

const PostList = (props) => {

	const { posts, fetchPosts } = props;

  useEffect(() => {
    fetchPosts();
  }, [])
 
	return (
		posts.length && posts.map(post => {
			return (
				<React.Fragment key={post.id}>
					<Moment format="MMM D, YYYY" date={post.date} />
					<div>User ID: {post.userId}</div>
					<Link to={`/posts/${post.id}`}>Title: {post.title}</Link>
					<div>Body: {post.body}</div>
				</React.Fragment>
			)
		})
  );
};

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
