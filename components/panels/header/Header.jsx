import Image from 'next/image';

import Back from '../../../assets/icons/back.svg';
import styles from '../../../styles/components/panels/header/header.module.scss';
import { useSession } from '../../../utils/fetcher';

export default function Header () {
	const session = useSession();

	return (
		<div className={styles.header}>
			<div className={styles.back}>
				<Back className={styles.icon} />
				<p>Home</p>
			</div>
			<div className={styles.avatar}>
				<p className={styles.userName}>{session.name}</p>
				{session.avatar && <Image alt='avatar' src={session.avatar} layout='fill' />}
			</div>
		</div>
	);
}
