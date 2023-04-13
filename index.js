import axios from 'axios';

axios.get('https://colorserver1.onrender.com/').then((res) => {
	console.log(res.data);
});
