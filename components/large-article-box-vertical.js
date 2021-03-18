import styles from './../styles/components/large-article-box-vertical.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGlobeAfrica, faClock} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const LargeArticleBoxVertical = ({title, body, link, image, publish, author}) => {
	return <div className={`${styles.largeArticleBoxHorizontal}`}>
		<Link href={link}>
			<a>
				<figure className={styles.image}>
					<img src={image.url} alt={image.alternativeText} />
				</figure>
			</a>
		</Link>
		<div className={styles.body}>
			<h1 className={styles.title}>{title}</h1>
			<p>
				<span className={styles.author}>
					<FontAwesomeIcon icon={faGlobeAfrica} /> {author.name}
				</span>
				<span className={styles.date}>
					<FontAwesomeIcon icon={faClock} /> {publish}
				</span>
			</p>
			<div className={styles.text} dangerouslySetInnerHTML={{__html: body}} />
		</div>
	</div>
}

export default LargeArticleBoxVertical;