import React, { useReducer, useState } from 'react';

/*
const UseReducer = () => {
  const [count, setCount] = useState(0);
	const [showText, setShowText] = useState(true);
	const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
		setShowText(!showText);
	};
	return (
    <div>
    <h1>Count = {count}</h1>
    <button onClick={handleClick}>Click Me</button>
    <p>
    {showText
      ? 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam molestias sit quis sint expedita maxime dolorum voluptatibus sequi culpa magnam.'
      : null}
			</p>
		</div>
    );
  };
  
  */

const reducer = (state, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return { count: state.count + 1, showText: state.showText };
		case 'SHOWTEXT':
			return { count: state.count, showText: !state.showText };
		default:
			return state;
	}
};
const UseReducer = () => {
	const initialState = {
		count: 0,
		showText: true,
	};
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			<h1>Count = {state.count}</h1>
			<button
				onClick={() => {
					dispatch({ type: 'INCREMENT' });
					dispatch({ type: 'SHOWTEXT' });
				}}>
				Click Me
			</button>
			<p>
				{state.showText
					? 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam molestias sit quis sint expedita maxime dolorum voluptatibus sequi culpa magnam.'
					: null}
			</p>
		</div>
	);
};
export default UseReducer;
