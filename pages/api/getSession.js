import faker from '@faker-js/faker';

import { users } from '../../data';

export default function handler (req, res) {
	const session = faker.random.arrayElement(users);
	console.log(session);
	res.status(200).json(session);
}
