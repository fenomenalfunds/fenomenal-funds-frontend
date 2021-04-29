import styles from './../styles/components/square-article-box.module.scss';
import Link from 'next/link';
import ProfilePhoto from "./profile-photo";

const SquareArticleBox = ({title, subtitle, image, link}) => {
	return <div className={styles.coverArticleBox}>
		<Link href={link}>
			<a>
				<figure className={styles.image}>
					<ProfilePhoto image={image} />
				</figure>
				<div className={styles.content}>
					<h4 className={styles.title}>{title}</h4>
					<p className={styles.subtitle}>{subtitle}</p>
				</div>
			</a>
		</Link>
	</div>
}

export default SquareArticleBox;