import {
	FETCH_POST
} from '../actions/types';

const selectedPostReducer = (state = {}, action) => {
	switch (action.type) {
		case FETCH_POST:
			let selectedPost = action.payload.posts.find(post => post.id === action.payload.id);
			selectedPost = {...selectedPost, date: new Date(2022-action.payload.id, 0, 30)};
			return selectedPost;
		default:
			return state;
	}
};

export default selectedPostReducer