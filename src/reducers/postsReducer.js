import {
	FETCH_POSTS
} from '../actions/types';

const postReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_POSTS:
			let posts = action.payload;
			let postsWithDate = posts.map(post => {
				return {...post, date: new Date(2022-post.id, 0, 30)}
			});
			
			return postsWithDate;
		default:
			return state;
	}
};

export default postReducer