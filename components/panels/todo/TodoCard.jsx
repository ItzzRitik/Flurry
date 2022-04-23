
import styles from '../../../styles/components/panels/todo/todoCard.module.scss';

export default function TodoCard ({ className, groupName = 'all todo' }) {

	let classList = styles.todoCard;
	className && (classList += ` ${className}`);

	return (
		<div className={classList}>
			<h3 className={styles.title}>{groupName}</h3>
			<div className={styles.todoList}>
				{}
			</div>
		</div>
	);
}
