import { useEffect, useMemo } from 'react';

import { useDispatch } from 'react-redux';

import Add from '../assets/icons/add.svg';
import TodoCard from '../components/panels/todo/TodoCard';
import { populateTodo } from '../data/redux/todoReducer';
import styles from '../styles/dashboard.module.scss';
import { useTodo, useSession, useUsers } from '../utils/fetcher';

export default function Dashboard () {
	const dispatch = useDispatch(),

		todo = useTodo(),
		session = useSession(),
		users = useUsers(),

		assignedToUser = useMemo(() => todo.filter?.((todo) => todo.assignedTo === session.username), [todo, session]),
		createdByUser = useMemo(() => todo.filter?.((todo) => todo.assignedTo === session.username), [todo, session]),
		reminders = useMemo(() => todo.filter?.((todo) => todo.dueDate === new Date()), [todo]);

	useEffect(() => {
		fetch('/api/getTodo').then((res) => res.json().then((data) => dispatch(populateTodo(data))));
	}, [dispatch, users]);

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
