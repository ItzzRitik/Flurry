import Image from 'next/image';

import styles from '../../../styles/components/panels/header/avatar.module.scss';

export default function Avatar ({ user = {} }) {
	return (
		<div className={styles.avatar}>
			<p className={styles.userName}>{user.name}</p>
			{user.avatar && <Image alt='avatar' src={user.avatar} layout='fill' />}
		</div>
	);
}
