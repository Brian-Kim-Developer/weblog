import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../../actions';
import Profile from '../Profile';
import Post from './Post';

const PostList = (props) => {

	const { posts, fetchPosts } = props;

  useEffect(() => {
    fetchPosts();
  }, [])
 
	return (
		<React.Fragment>
			<Profile />
			{posts.length && posts.map(post => {
				return <Post post={post}/>
			})}
		</React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
		posts: state.posts
	};
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
