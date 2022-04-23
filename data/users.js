import faker from '@faker-js/faker';

export const users = Array(10).fill(0).map(() => {
	return {
		username: faker.internet.userName(),
		email: faker.internet.exampleEmail(),
		avatar: faker.internet.avatar()
	};
});
