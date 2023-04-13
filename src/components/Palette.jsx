import React, { useState, useRef } from 'react';
import '../styles/color.css';
const Palette = (props) => {
	const [colorCode, setColorCode] = useState(false);
	const colorRef = useRef(null);
	const mouseEnter = () => {
		setColorCode(true);
	};
	const mouseLeave = () => {
		setColorCode(false);
	};

	const handleClick = () => {
		console.log(colorRef.current.id);
		navigator.clipboard.writeText(colorRef.current.id);
		alert('color code copied ' + colorRef.current.id);
	};
	return (
		<div
			ref={colorRef}
			onClick={handleClick}
			className='color'
			id={props.color.hex}
			style={{ backgroundColor: props.color.hex }}
			onMouseEnter={mouseEnter}
			onMouseLeave={mouseLeave}>
			<p className='colorCode'>{colorCode ? props.color.hex : null}</p>
		</div>
	);
};

export default Palette;
