import Image from 'next/image';

import Back from '../../../assets/icons/back.svg';
import styles from '../../../styles/components/panels/header/header.module.scss';

export default function Header () {
	return (
		<div className={styles.header}>
			<div className={styles.back}>
				<Back className={styles.icon} />
				<p>Home</p>
			</div>
			<div className={styles.avatar}>
				<p className={styles.userName}>User Name</p>
				<Image alt='avatar' src='https://source.unsplash.com/random' layout='fill' />
			</div>
		</div>
	);
}
