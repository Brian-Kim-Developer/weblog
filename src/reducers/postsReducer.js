import {
	FETCH_POSTS
} from '../actions/types';

const postReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_POSTS:
			const posts = action.payload;
			const postsWithDate = posts.map(post => {
				return {...post, date: new Date(2022-post.id, 0, 30)}
			});
			const sortedPosts = postsWithDate.sort((a, b) => {
				const dateA = new Date(a.date).getTime();
				const dateB = new Date(b.date).getTime();
				return dateB - dateA;
			});
			return sortedPosts;
		default:
			return state;
	}
};

export default postReducer