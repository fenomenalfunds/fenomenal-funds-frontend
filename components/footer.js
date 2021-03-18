import Link from 'next/link';
import styles from './../styles/components/footer.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return <footer className={styles.footer}>
		<div className={styles.leftColumn}>
			<ul className={styles.nav}>
				<li>
					<Link href={`/`}>
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
					<Link href={`/`}>
						<a>Grants</a>
					</Link>
				</li>
				<li>
					<Link href={`/`}>
						<a>Contact</a>
					</Link>
				</li>
			</ul>

			<ul className={styles.social}>
				<li>
					<a href="https://facebook.com">
						<FontAwesomeIcon icon={faFacebookF} /> fenomenal.funds
					</a>
				</li>
				<li>
					<a href="https://twitter.com">
						<FontAwesomeIcon icon={faTwitter} /> @fnfd
					</a>
				</li>
				<li>
					<a href="https://instagram.com">
						<FontAwesomeIcon icon={faInstagram} /> fenomenalfunds
					</a>
				</li>
			</ul>
			<div className={styles.newsletter}>
				<label htmlFor="newsletter">
					Subscribe to our newsletter
				</label>
				<div className={styles.fieldGroup}>
					<input type="email" id="email" placeholder="E-mail address" />
					<button type="button">Ok</button>
				</div>
			</div>
		</div>

		<div className={styles.rightColumn}>
			1805 Davis Ave. <br/>
			94103 San Francisco, CA <br/>
			707-750-0418 <br/>
			415-757-2608 <br/>
			hello@fenomenalfunds.org
		</div>

		<div className={styles.bottomRow}>
			<Link href={`/termn-and-conditions`}>
				<a>Terms and Conditions</a>
			</Link>
			<Link href={`/privacy-policy`}>
				<a>Privacy Policy</a>
			</Link>
		</div>
	</footer>
}

export default Footer;