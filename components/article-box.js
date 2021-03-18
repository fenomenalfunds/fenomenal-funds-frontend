import Link from 'next/link';
import styles from './../styles/components/article-box.module.scss';

const ArticleBox = ({title, subtitle, url, image}) => {
	return <article className={styles.articleBox}>
		<Link href={url}>
			<a>
				<figure className={styles.image}>
					<img src={image.url} alt={image.alternativeText && image.alternativeText} />
				</figure>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.subtitle}>{subtitle}</p>
			</a>
		</Link>
	</article>
}

export default ArticleBox;