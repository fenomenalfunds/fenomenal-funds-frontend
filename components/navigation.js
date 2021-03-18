import Link from 'next/link';
import styles from './../styles/components/navigation.module.scss';

const Navigation = ({active}) => {
	return <nav className={`${styles.navigation} ${active ? styles.active : null}`}>

		<ul className={styles.mainNav}>
			<li>
				<Link href={`/about-us`}>
					<a>About Us</a>
				</Link>
			</li>
			<li>
				<Link href={`/`}>
					<a>Our Approach</a>
				</Link>
			</li>
			<li>
				<Link href={`/`}>
					<a>Learnings</a>
				</Link>
			</li>
			<li>
				<Link href={`/grants`}>
					<a>Grants</a>
				</Link>
			</li>
			<li>
				<Link href={`/`}>
					<a>Contact</a>
				</Link>
			</li>
		</ul>
		<ul className={styles.secNav}>
			<li>
				<Link href={`/`}>
					<a className={styles.btn}>Login</a>
				</Link>
			</li>
		</ul>
	</nav>
}

export default Navigation;