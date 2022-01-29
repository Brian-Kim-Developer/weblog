import {
	SELECT_POST
} from '../actions/types';

const selectedPostReducer = (state = {}, action) => {
	switch (action.type) {
		case SELECT_POST:
            console.log('test', action.payload)
			return action.payload.posts.find(post => post.id === action.payload.id);
		default:
			return state;
	}
};

export default selectedPostReducer