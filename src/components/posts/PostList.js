import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../../actions';
import Profile from '../Profile';
import Post from './Post';
import Footer from '../Footer';

const PostList = (props) => {

	const { posts, fetchPosts } = props;

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts])
 
	return (
		<React.Fragment>
			<Profile />
			{
				posts.length 
					? 
						posts.map(post => {
							return <Post key={post.id} post={post}/>
						})
					:
            "Loading..."
			}
      <Footer />
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
