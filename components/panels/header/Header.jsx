import Image from 'next/image';
import useSWR from 'swr';

import Back from '../../../assets/icons/back.svg';
import styles from '../../../styles/components/panels/header/header.module.scss';
import { fetcher } from '../../../utils/helpers/fetcher';

export default function Header () {
	const { data: session } = useSWR('api/getSession', fetcher);
	console.log(session);

	return (
		<div className={styles.header}>
			<div className={styles.back}>
				<Back className={styles.icon} />
				<p>Home</p>
			</div>
			<div className={styles.avatar}>
				<p className={styles.userName}>{session.name}</p>
				<Image alt='avatar' src={session.avatar} layout='fill' />
			</div>
		</div>
	);
}
