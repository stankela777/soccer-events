import axios from 'axios';

export function requestExample(vuexContext) {
	const options = {
		method: 'GET',
		url: 'URL',
		headers: {
			'x-rapidapi-host': 'api-host',
			'x-rapidapi-key': 'XXXXXXXXX'
		}
	};

	return axios.request(options).then(function(response) {
		console.log(response.data);
		console.log(vuexContext);
		// vuexContext.commit('setTitle', response.data);
	}).catch(function(error) {
		console.error(error);
	});
}