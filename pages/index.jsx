import TodoCard from '../components/panels/todo/TodoCard';
import styles from '../styles/dashboard.module.scss';

export default function Dashboard () {
	return (
		<div className={styles.dashboard}>
			<TodoCard className={styles.allTodo} />
			<div className={styles.todoGroups}>
				<TodoCard groupName='Assigned to you' />
				<TodoCard groupName='created by you' />
				<TodoCard groupName='reminders' />
				<TodoCard groupName='routine' />
			</div>
		</div>
	);
}
