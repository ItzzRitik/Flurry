import faker from '@faker-js/faker';

const users = Array(10).fill(0).map(() => {
	const firstName = faker.name.firstName(),
		lastName = faker.name.lastName();
	return {
		username: faker.internet.userName(firstName, lastName),
		name: firstName + ' ' + lastName,
		email: faker.internet.exampleEmail(firstName, lastName),
		avatar: faker.internet.avatar()
	};
});

export default users;
