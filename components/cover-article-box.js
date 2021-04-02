import propTypes from 'prop-types';
import styles from './../styles/components/cover-article-box.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import {faGlobeAfrica, faClock} from "@fortawesome/free-solid-svg-icons";
import Image from "./image";

const CoverArticleBox = ({title, subtitle, author, publish, image, link}) => {
	return <div className={styles.coverArticleBox}>
		<Link href={link}>
			<a>
				<figure className={styles.image}>
					{image ?
							<Image image={image}/> :
							<img src="/FF_2021_ImagePlaceholder_510x288.jpg" alt="" />}
				</figure>
				<div className={styles.content}>
					<h4 className={styles.title}>{title}</h4>
					<p className={styles.subtitle}>{subtitle}</p>
					<p>
						{(author && author.fullname) &&
						<span className={styles.author}>
							<FontAwesomeIcon icon={faGlobeAfrica}/> {author.fullname}
						</span>}
						<span className={styles.date}>
							<FontAwesomeIcon icon={faClock}/> {publish}
						</span>
					</p>
				</div>
			</a>
		</Link>
	</div>
}

CoverArticleBox.propTypes = {
	title: propTypes.string.isRequired,
	image: propTypes.object.isRequired,
	link: propTypes.string.isRequired,
	subtitle: propTypes.string,
	author: propTypes.object,
	publish: propTypes.string
}

CoverArticleBox.defaultProps = {
	title: "Please add title",
	intro: "Please add intro text",
	link: "/",
}

export default CoverArticleBox;