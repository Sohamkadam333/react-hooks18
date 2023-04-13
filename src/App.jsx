import React from 'react';
import UseState from './hooks/useState/UseState';
import UseReducer from './hooks/useReducer/UseReducer';
import UseEffect from './hooks/useEffect/UseEffect';
import PaletteContainer from './components/PaletteContainer';
import './styles/app.css';

const App = () => {
	return (
		<div className='appContainer'>
			{/* <UseState /> */}
			{/* <UseReducer /> */}
			{/* <UseEffect /> */}
			<PaletteContainer />
		</div>
	);
};

export default App;
