/* Handle multiple successful promises
 *     Put () because return Promise resolve object
 */
import { createUser, uploadPhoto } from './utils';

function handleProfileSignup() {
	return Promise.all([uploadPhoto(), createUser()])
	.then((values) => {
		const { body } = values[0];
		const { firstName, lastName } = values[1];
	});
}

export default handleProfileSignup;
