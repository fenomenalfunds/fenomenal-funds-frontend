import propTypes from 'prop-types';
import Link from 'next/link';
import styles from './../styles/components/small-article-box.module.scss';
import Image from "./image";

const SmallArticleBox = ({title, subtitle, image, link}) => {
	return <div className={styles.smallArticleBox}>
		<Link href={link}>
			<a>
				<figure className={styles.image}>
					{image ?
							<Image image={image}/> :
							<img src="/temp/arun-anoop-A4-_RXUrRnk-unsplash.png" alt=""/>
					}
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