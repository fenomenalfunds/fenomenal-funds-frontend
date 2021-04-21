import propTypes from 'prop-types';
import styles from './../styles/components/large-article-box-vertical.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGlobeAfrica, faClock, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from "./image";

const LargeArticleBoxVertical = ({title, intro, link, image, publish, author}) => {

	return <article className={`${styles.largeArticleBoxHorizontal}`}>
		<Link href={link}>
			<a>
				<figure className={styles.image}>
					{image ?
							<Image image={image}/> :
							<img src="/FF_2021_ImagePlaceholder_1080x608.jpg" alt=""/>
					}
				</figure>
			</a>
		</Link>
		<div className={styles.body}>
			<h1 className={styles.title}>{title}</h1>
			<p>
				{author &&
				<span className={styles.author}>
					<FontAwesomeIcon icon={faGlobeAfrica} /> {author.fullname}
				</span>}
				{publish &&
				<span className={styles.date}>
					<FontAwesomeIcon icon={faClock} /> {publish}
				</span>}
			</p>
			<div className={styles.text} dangerouslySetInnerHTML={{__html: intro}} />
			<p className={styles.link}>
				<Link href={link}>
					<a>Read more <FontAwesomeIcon icon={faChevronRight} /></a>
				</Link>
			</p>
		</div>
	</article>
}

LargeArticleBoxVertical.propTypes = {
	title: propTypes.string.isRequired,
	intro: propTypes.string.isRequired,
	link: propTypes.string.isRequired,
	image: propTypes.object.isRequired,
	publish: propTypes.string,
	author: propTypes.object
}

LargeArticleBoxVertical.defaultProps = {
	title: "Please add title",
	intro: "Please add intro text",
	link: "/",
}

export default LargeArticleBoxVertical;