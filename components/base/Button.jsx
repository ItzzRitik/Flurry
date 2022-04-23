import styles from '../../styles/components/base/button.module.scss';

export default function Button ({ title = 'add', onClick }) {
	return (
		<div className={styles.button} onClick={onClick}>{title}</div>
	);
}
