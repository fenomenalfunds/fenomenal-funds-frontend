import _ from 'lodash';
import Link from 'next/link';
import styles from './../styles/components/navigation.module.scss';

const Navigation = ({items}) => {

	return <nav className={`${styles.navigation}`}>
		<div className={styles.navContainer}>
			<ul className={styles.mainNav}>
				<li className={styles.logo}>
					<Link href="/">
						<a><img src="/fnfd-white.svg" alt="Fenomenal Funds logo icon" /></a>
					</Link>
				</li>
				{_.map(items, (item, key) => {
					return item.type === 'INTERNAL' ?
							<li key={key}>
								<Link href={item.path}>
									<a>{item.title}</a>
								</Link>
							</li>
							:
							<li key={key}>
								<a href={item.path} target="_blank" rel="noreferrer">
									{item.title}
								</a>
							</li>
				})}
			</ul>
			<ul className={styles.secNav}>
				<li>
					<Link href={`/`}>
						<a className={styles.btn}>Login</a>
					</Link>
				</li>
			</ul>
		</div>
	</nav>
}

export default Navigation;