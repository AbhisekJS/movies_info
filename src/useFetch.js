import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
	const [response, setResponse] = useState(null);
	useEffect(async () => {
		const res = await fetch(url);
		const json = await res.json();
		setResponse(json);
	});
	return response;
};
