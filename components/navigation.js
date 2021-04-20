import _ from 'lodash';
import Link from 'next/link';
import styles from './../styles/components/navigation.module.scss';
import {useState} from "react";
import CloseButton from "./close-button";

const Navigation = ({items}) => {

	const [active, setActive] = useState(false);

	return <nav className={active ? styles.navigationActive : styles.navigation }>
		<div className={styles.navContainer}>
			<CloseButton func={() => setActive(false)} />
			<ul className={styles.mainNav}>
				<li className={styles.logo}>
					<Link href="/">
						<a className={styles.webLink}>
							<img src="/fnfd-white.svg" alt="Fenomenal Funds logo icon" />
						</a>
					</Link>
					<button className={styles.mobLink} onClick={() => setActive(true)}>
						<img src="/fnfd-white.svg" alt="Fenomenal Funds logo icon" />
					</button>
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