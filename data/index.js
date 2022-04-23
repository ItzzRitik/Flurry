import faker from '@faker-js/faker';

let session = {},
	users = [],
	todo = [];

users = Array(3).fill(0).map(() => {
	const firstName = faker.name.firstName(),
		lastName = faker.name.lastName();
	return {
		username: faker.internet.userName(firstName, lastName),
		name: firstName + ' ' + lastName,
		email: faker.internet.exampleEmail(firstName, lastName),
		avatar: faker.internet.avatar()
	};
});

todo = Array(30).fill(0).map(() => {
	return {
		todo: faker.lorem.sentence(),
		priority: ['high', 'medium', 'low'][Math.floor(Math.random() * 3)],
		dueDate: faker.date.soon(10),
		createdBy: users[Math.floor(Math.random() * users.length)].username,
		assignedTo: users[Math.floor(Math.random() * users.length)].username
	};
});

session = users.find((user) => todo.filter(({ assignedTo, createdBy }) => assignedTo === user.username || createdBy === user.username).length > 5);

export { users, todo, session };
