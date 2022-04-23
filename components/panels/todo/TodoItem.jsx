import moment from 'moment';

import styles from '../../../styles/components/panels/todo/todoItem.module.scss';
import { useUsers } from '../../../utils/fetcher';
import Avatar from '../header/Avatar';

export default function TodoItem ({ item, type }) {
	const users = useUsers(),
		priorityStyle = {
			high: { backgroundColor: '#fbd9e1', color: '#e5000e' },
			medium: { backgroundColor: '#d2ffec', color: '#1c8a34' },
			low: { backgroundColor: '#e3f8ff', color: '#20989f' }
		}[item.priority];

	if (type === 'detail') {
		return (
			<div className={`${styles.todoItem} ${styles.detail}`}>
				<span className={styles.bullet} />
				<p className={styles.title}>{item.todo}</p>
				<span className={styles.priority} style={priorityStyle}>{item.priority}</span>
				<p className={styles.date}>{moment(item.dueDate).format('DD MMM, YYYY')}</p>
			</div>
		);
	}

	return (
		<div className={`${styles.todoItem} ${type === 'detail' ? styles.detail : ''}`}>
			<div className={styles.content}>
				<span />
				<p>{item.todo}</p>
			</div>
			{
				type === 'compact' &&
				<div className={styles.footer}>
					<span className={styles.priority} style={priorityStyle}>{item.priority}</span>
					<Avatar user={users.find?.((user) => user.username === item.assignedTo)} />
				</div>
			}
		</div>
	);
}
