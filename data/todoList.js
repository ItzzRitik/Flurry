import { faker } from '@faker-js/faker';

import { users } from './users';

const todoList = Array(300).fill(0).map(() => {
	return {
		todo: faker.lorem.sentence(),
		priority: faker.random.arrayElement(['High', 'Medium', 'Low']),
		dueDate: faker.datatype.boolean() ? faker.date.soon() : faker.date.future(),
		createdBy: faker.random.arrayElement(users).username,
		assignedTo: faker.random.arrayElement(users).username
	};
});

export default todoList;
