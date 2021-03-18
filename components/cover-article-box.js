import styles from './../styles/components/cover-article-box.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import {faGlobeAfrica, faClock} from "@fortawesome/free-solid-svg-icons";

const CoverArticleBox = ({title, subtitle, author, publish, image, link}) => {
	return <div className={styles.coverArticleBox}>
		<Link href={link}>
			<a>
				<figure className={styles.image}>
					<img src={image.url} alt={image.alternativeText}/>
				</figure>
				<div className={styles.content}>
					<h4 className={styles.title}>{title}</h4>
					<p className={styles.subtitle}>{subtitle}</p>
					<p>
						<span className={styles.author}>
							<FontAwesomeIcon icon={faGlobeAfrica}/> {author.name}
						</span>
						<span className={styles.date}>
							<FontAwesomeIcon icon={faClock}/> {publish}
						</span>
					</p>
				</div>
			</a>
		</Link>
	</div>
}

export default CoverArticleBox;