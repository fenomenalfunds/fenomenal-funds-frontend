import styles from './../styles/components/large-article-box.module.scss';
import Image from "./image";

const LargeArticleBox = ({title, content, overlay, image}) => {
	return <article className={styles.largeArticleBox}>
		<div className={styles.imageOverlay}>
			<figure>
				<Image image={image} />
			</figure>
			{overlay &&
			<div className={styles.textOverlay}>
				<div className={styles.overlayContent}>
					<h4 className={styles.title}>{overlay.title}</h4>
					<p className={styles.caption}>{overlay.text}</p>
				</div>
			</div>}
		</div>

		<div className={styles.content}>
			<div className={styles.contentText}>
				<h1 className={styles.title}>{title}</h1>
				<div className={styles.text} dangerouslySetInnerHTML={{__html: content}} />
			</div>
		</div>
	</article>
}

export default LargeArticleBox;