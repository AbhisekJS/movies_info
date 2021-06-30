import { GET_MOVIES, SEARCH_MOVIES, LOADING } from './movieTypes';

export const fetchMoviesData = (data) => {
	return {
		type: GET_MOVIES,
		payload: data
	};
};
export function searchMovie(data) {
	return {
		type: SEARCH_MOVIES,
		payload: data
	};
}
export function loadStatus() {
	return {
		type: LOADING
	};
}

export const getMovies = () => async (dispatch) => {
	dispatch(loadStatus());
	try {
		const res = await fetch(
			'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1'
		);
		const movieData = await res.json();
		console.log(movieData.results);
		dispatch(fetchMoviesData(movieData.results));
	} catch (err) {
		console.log(err.message);
	}
};

export const searchMovies = (value) => async (dispatch) => {
	dispatch(loadStatus());
	try {
		const res = await fetch(
			`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${value}`
		);
		const movieData = await res.json();
		dispatch(searchMovie(movieData.results));
	} catch (err) {
		console.log(err.message);
	}
};
