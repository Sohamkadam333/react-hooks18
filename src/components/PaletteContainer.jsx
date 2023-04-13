import React, { useState, useEffect } from 'react';
import { PalettesData } from '../data/PalettesData';
import '../styles/palettesContainer.css';
import Palettes from './Palettes';
const PaletteContainer = () => {
	const [palettes, setPalettes] = useState([]);

	useEffect(() => {
		setPalettes(PalettesData);
		console.log(PalettesData);
	}, []);
	return (
		<div className='palettesContainer'>
			{palettes.length > 0 ? (
				palettes.map((palette) => {
					return <Palettes palette={palette} />;
				})
			) : (
				<h1>Loading....</h1>
			)}
		</div>
	);
};

export default PaletteContainer;
