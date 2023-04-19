// Promise is handle or not
function handleResponseFromAPI(promise) {
	return promise
	.then(() => ({
		status: 200,
		ody: 'success',
	}))
	.catch(() => Error())
	.finally(() => console.log('Got a response from the API'));
}

export default handleResponseFromAPI;
