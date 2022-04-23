
import { useRouter } from 'next/router';

import Back from '../../../assets/icons/back.svg';
import styles from '../../../styles/components/panels/header/header.module.scss';
import { useSession } from '../../../utils/fetcher';
import Avatar from './Avatar';

export default function Header () {
	const router = useRouter(),
		session = useSession(),

		onBack = () => {
			router.push('/');
		};
	console.log(router.pathname);
	return (
		<div className={styles.header}>
			<div className={`${styles.back} ${router.pathname === '/' ? styles.disable : ''}`} onClick={onBack}>
				<Back className={styles.icon} />
				<p>Home</p>
			</div>
			<Avatar user={session} />
		</div>
	);
}
