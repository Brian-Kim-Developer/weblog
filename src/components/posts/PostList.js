import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import { fetchPosts } from '../../actions';
import Profile from '../Profile';
import '../../style/posts/PostList.scss';

const PostList = (props) => {

	const { theme, posts, fetchPosts } = props;

  useEffect(() => {
    fetchPosts();
  }, [])
 
	return (
		<React.Fragment>
			<Profile />
			{posts.length && posts.map(post => {
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
				)
			})}
		</React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
		theme: state.theme,
		posts: state.posts
	};
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
