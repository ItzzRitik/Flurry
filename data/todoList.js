import { faker } from '@faker-js/faker';

import { users } from './users';

export const todoList = Array(200).fill(0).map(() => {
	return {
		todo: faker.lorem.sentence(),
		priority: faker.lorem.sentence(),
		dueDate: faker.datatype.boolean() ? faker.date.soon() : faker.date.future(),
		createdBy: users[faker.random.arrayElement(users.length)],
		assignedTo: users[faker.random.arrayElement(users.length)]
	};
});
