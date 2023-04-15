import React from 'react';
import UseState from './hooks/useState/UseState';
import UseReducer from './hooks/useReducer/UseReducer';
import UseEffect from './hooks/useEffect/UseEffect';
import PaletteContainer from './components/PaletteContainer';
import './styles/app.css';
import Hello from './components/Hello';

const App = () => {
	return (
		<div className='appContainer'>
			{/* <UseState /> */}
			{/* <UseReducer /> */}
			{/* <UseEffect /> */}
			<PaletteContainer />
			<Hello />
		</div>
	);
};

export default App;
