
import Back from '../../../assets/icons/back.svg';
import styles from '../../../styles/components/panels/header/header.module.scss';
import { useSession } from '../../../utils/fetcher';
import Avatar from './Avatar';

export default function Header () {
	const session = useSession();

	return (
		<div className={styles.header}>
			<div className={styles.back}>
				<Back className={styles.icon} />
				<p>Home</p>
			</div>
			<Avatar user={session} />
		</div>
	);
}
