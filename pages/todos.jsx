import { useState } from 'react';

import Button from '../components/base/Button';
import AddTodo from '../components/panels/add/AddTodo';
import TodoItem from '../components/panels/todo/TodoItem';
import styles from '../styles/allTodo.module.scss';
import { useTodo } from '../utils/fetcher';

export default function AllTodo () {
	const [showTodoModal, setShowTodoModal] = useState(false),
		todo = useTodo();

	return (
		<div className={styles.allTodo}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>All Todos</h2>
					<Button onClick={() => setShowTodoModal(true)} />
				</div>
				<div className={styles.todoList}>
					{
						todo.map?.((item, index) => (
							<TodoItem key={index} item={item} type='detail' />
						))
					}
				</div>
			</div>
			<AddTodo showTodoModal={showTodoModal} close={() => setShowTodoModal(false)} />
		</div>
	);
}
