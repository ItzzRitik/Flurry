
import moment from 'moment';

import Add from '../assets/icons/add.svg';
import Loader from '../components/panels/Loader';
import TodoCard from '../components/panels/todo/TodoCard';
import styles from '../styles/dashboard.module.scss';
import { useTodo, useSession } from '../utils/fetcher';

export default function Dashboard () {
	const todo = useTodo(),
		session = useSession(),

		assignedToUser = todo.filter?.((todo) => todo.assignedTo === session.username),
		createdByUser = todo.filter?.((todo) => todo.createdBy === session.username),
		reminders = todo.filter?.((todo) => (-moment().diff(moment(todo.dueDate), 'days') < 2));

	if (!todo.length) {
		return <Loader fullPage />;
	}

	return (
		<div className={styles.dashboard}>
			<TodoCard className={styles.allTodo} items={todo} type='compact' />
			<div className={styles.todoGroups}>
				<TodoCard groupName='Assigned to you' items={assignedToUser} />
				<TodoCard groupName='created by you' items={createdByUser} />
				<TodoCard groupName='reminders' items={reminders} />
				<TodoCard groupName='routine' items={todo} />
				<div className={styles.create}>
					<Add />
					<p>Create Group</p>
				</div>
			</div>
		</div>
	);
}
