import { useState } from 'react';

const UseState = () => {
	const [person, setPerson] = useState({
		name: '',
		age: null,
		isMarried: null,
	});
	return (
		<div>
			<input
				type='text'
				name=''
				id=''
				placeholder='Enter your name'
				onChange={(e) => setPerson({ ...person, name: e.target.value })}
			/>
			<input
				type='number'
				name=''
				id=''
				placeholder='Enter your age'
				onChange={(e) => setPerson({ ...person, age: e.target.value })}
			/>

			<select name='' id='' onChange={(e) => setPerson({ ...person, isMarried: e.target.value })}>
				<option>Select Martial Status</option>
				<option value='Married'>Married</option>
				<option value='UnMarried'>UnMarried</option>
			</select>
			<div></div>
			<h1>
				Hello there, my name is {person.name ? person.name : '----'}, i am {person.age ? person.age : '----'} years old
				and i am {person.isMarried ? person.isMarried : '----'}
			</h1>
			<button
				onClick={() => {
					if (person.name && person.age && person.isMarried) {
						// document.body.style.backgroundColor = 'pink';
						console.log('printing page');
						print();
					} else {
						alert('Fill All Fields');
					}
				}}>
				Print
			</button>
		</div>
	);
};

export default UseState;
