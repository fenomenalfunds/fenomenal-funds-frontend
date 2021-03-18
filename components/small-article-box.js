import propTypes from 'prop-types';
import Link from 'next/link';
import styles from './../styles/components/small-article-box.module.scss';

const SmallArticleBox = ({title, subtitle, image, link}) => {
	return <div className={styles.smallArticleBox}>
		<Link href={link}>
			<a>
				<figure className={styles.image}>
					<img src={image.url} alt={image.alternativeText && image.alternativeText} />
				</figure>
				<h3 className={styles.title}>{title}</h3>
				{subtitle && <p className={styles.subtitle}>{subtitle}</p>}
			</a>
		</Link>
	</div>
}

SmallArticleBox.protoTypes = {
	title: propTypes.string.isRequired,
	image: propTypes.object.isRequired,
	link: propTypes.string.isRequired,
	subtitle: propTypes.string
}

export default SmallArticleBox;