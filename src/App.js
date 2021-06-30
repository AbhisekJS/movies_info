import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies, searchMovies } from './redux';

export default function App() {
	const [searchTerm, setSearchTerm] = useState('');
	const dispatch = useDispatch();
	const movies = useSelector((state) => state.movie.movies);
	const loading = useSelector((state) => state.movie.loading);
	// API URLS
	console.log(movies);

	const IMGPATH = 'https://image.tmdb.org/t/p/w1280';

	function handleSubmit(e) {
		e.preventDefault();
		if (searchTerm === '') {
			alert("Fields Can't be blank");
		}
		dispatch(searchMovies(searchTerm));
	}

	useEffect(() => {
		dispatch(getMovies());
		// eslint-disable-next-line
	}, []);

	const onTextChange = (e) => {
		const { value } = e.target;
		setSearchTerm(value);
	};

	function getClassByRate(vote) {
		if (vote >= 8) {
			return 'green';
		} else if (vote >= 5) {
			return 'orange';
		} else {
			return 'red';
		}
	}

	return (
		<div>
			<header>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						className="search"
						placeholder="e.g. Titanic"
						value={searchTerm}
						onChange={onTextChange}
					/>
				</form>
			</header>
			<main>
				{loading ? (
					<h1>Loading</h1>
				) : (
					movies.map((movie) => {
						const { poster_path, title, vote_average, overview, id } = movie;
						return (
							<div className="movie" key={id}>
								{poster_path ? (
									<img src={`${IMGPATH + poster_path}`} alt="{title}" />
								) : (
									<img
										src="https://images.unsplash.com/photo-1512113569142-
								8a60fccc7caa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb
								-1.2.1&auto=format&fit=crop&w=634&q=80"
										alt="{title}"
									/>
								)}

								<div className="movie-info">
									<h3>{title}</h3>
									<span className={getClassByRate(vote_average)}>
										{vote_average}
									</span>
								</div>
								<div className="overview">
									<h3>Overview:</h3>
									{overview}
								</div>
							</div>
						);
					})
				)}
			</main>
		</div>
	);
}