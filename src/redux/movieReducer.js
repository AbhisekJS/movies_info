import { GET_MOVIES } from './movieTypes';
import { SEARCH_MOVIES } from './movieTypes';

const initialState = {
	movies: []
};

export const movieReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_MOVIES:
			return {
				...state,
				movies: action.payload
			};
		case SEARCH_MOVIES:
			return {
				...state,
				movies: action.payload
			};
		default:
			return state;
	}
};
