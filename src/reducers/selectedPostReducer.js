import {
	FETCH_POST
} from '../actions/types';

const selectedPostReducer = (state = {}, action) => {
	switch (action.type) {
		case FETCH_POST:
			return action.payload;
		default:
			return state;
	}
};

export default selectedPostReducer