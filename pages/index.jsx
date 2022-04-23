import { useMemo } from 'react';

import TodoCard from '../components/panels/todo/TodoCard';
import { useTodoQuery, useSessionQuery } from '../data/redux/api';
import styles from '../styles/dashboard.module.scss';

export default function Dashboard () {
	const { data: todo = [] } = useTodoQuery(),
		{ data: session = {} } = useSessionQuery(),

		assignedToUser = useMemo(() => todo.filter((todo) => todo.assignedTo === session.username), [todo, session]),
		createdByUser = useMemo(() => todo.filter((todo) => todo.assignedTo === session.username), [todo, session]),
		reminders = useMemo(() => todo.filter((todo) => todo.dueDate === new Date()), [todo]);

	return (
		<div className={styles.dashboard}>
			<TodoCard className={styles.allTodo} items={todo} />
			<div className={styles.todoGroups}>
				<TodoCard groupName='Assigned to you' items={assignedToUser} />
				<TodoCard groupName='created by you' items={createdByUser} />
				<TodoCard groupName='reminders' items={reminders} />
				<TodoCard groupName='routine' items={todo} />
			</div>
		</div>
	);
}
