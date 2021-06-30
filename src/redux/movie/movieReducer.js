import { GET_MOVIES, LOADING } from './movieTypes';
import { SEARCH_MOVIES } from './movieTypes';

const initialState = {
	movies: [],
	loading: false,
	error: null
};

export const movieReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOADING:
			return {
				...state,
				loading: true
			};
		case GET_MOVIES:
			return {
				...state,
				movies: action.payload,
				loading: false,
				error: ''
			};
		case SEARCH_MOVIES:
			return {
				...state,
				movies: action.payload,
				loading: false,
				error: ''
			};
		default:
			return state;
	}
};
