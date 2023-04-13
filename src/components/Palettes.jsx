import React, { useEffect, useState } from 'react';
import Palette from './Palette';
import '../styles/palette.css';

const Palettes = (props) => {
	const [colors, setColors] = useState([]);
	const [likes, setLikes] = useState(0);

	useEffect(() => {
		setColors(props.palette.colors);
	}, []);
	console.log(props.palette.colors);
	return (
		<>
			{colors.length > 0 ? (
				<div className='palette-main-container'>
					<div className='paletteContainer'>
						{colors.map((color) => {
							return <Palette color={color} />;
						})}
					</div>
					<div className='palette-info'>
						<h1 className='paletteName'>{props.palette.name}</h1>

						<div className='like-container'>
							<p>{likes}</p>
							<button onClick={() => setLikes((likes) => likes + 1)}>like</button>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

export default Palettes;
