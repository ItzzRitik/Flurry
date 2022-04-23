import styles from '../../../styles/components/panels/todo/todoCard.module.scss';
import TodoItem from './TodoItem';

export default function TodoCard ({ className, groupName = 'all todo', items = [], type = 'minimal' }) {

	let classList = styles.todoCard;
	className && (classList += ` ${className}`);

	return (
		<div className={classList}>
			<h3 className={styles.title}>{groupName}</h3>
			<div className={styles.todoList}>
				{
					items.map((item, index) => (
						<TodoItem key={index} item={item} type={type} />
					))
				}
			</div>
		</div>
	);
}
