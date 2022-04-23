import useSWR from 'swr';

import TodoCard from '../components/panels/todo/TodoCard';
import styles from '../styles/dashboard.module.scss';
import { fetcher } from '../utils/helpers/fetcher';

export default function Dashboard () {
	const { data: todoData } = useSWR('/api/getTodo', fetcher),
		{ data: users } = useSWR('/api/getUsers', fetcher),
		{ data: session } = useSWR('/api/getSession', fetcher);

	return (
		<div className={styles.dashboard}>
			<TodoCard className={styles.allTodo} items={todoData} />
			<div className={styles.todoGroups}>
				<TodoCard groupName='Assigned to you' items={todoData.filter(({ assignedTo }) => assignedTo === session.userName)} />
				<TodoCard groupName='created by you' />
				<TodoCard groupName='reminders' />
				<TodoCard groupName='routine' />
			</div>
		</div>
	);
}
