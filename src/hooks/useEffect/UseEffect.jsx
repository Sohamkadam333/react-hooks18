import React, { useEffect } from 'react';
import axios from 'axios';
const UseEffect = () => {
	useEffect(() => {
		// fetch('https://colorserver1.onrender.com/');
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((err) => console.error(err));
	});
	return <div>UseEffect</div>;
};

export default UseEffect;
