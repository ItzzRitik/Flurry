import { useRouter } from 'next/router';

import styles from '../../../styles/components/panels/todo/todoCard.module.scss';
import TodoItem from './TodoItem';

export default function TodoCard ({ className, groupName = 'all todo', items = [], type = 'minimal' }) {
	const router = useRouter(),
		openAllTodos = () => {
			if (groupName === 'all todo') {
				router.push('/todos');
			}
		};
	let classList = styles.todoCard;
	className && (classList += ` ${className}`);

	return (
		<div className={classList}>
			<h3 className={styles.title} onClick={openAllTodos}>{groupName} ({items.length})</h3>
			<div className={styles.todoList}>
				{
					items.map?.((item, index) => (
						<TodoItem key={index} item={item} type={type} />
					))
				}
			</div>
		</div>
	);
}
