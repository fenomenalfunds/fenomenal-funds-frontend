import styles from './../styles/components/large-article-box.module.scss';
import Image from "./image";
import moment from "moment";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

const LargeArticleBox = ({title, content, overlay, image, publish, link}) => {
	return <article className={styles.largeArticleBox}>
		<div className={styles.imageOverlay}>
			<figure>
				<Image image={image}/>
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
				<div className={styles.text} dangerouslySetInnerHTML={{__html: content}}/>
				<br/>
				{publish &&
				<p>{moment(publish).format('LL')}</p>}
				{link &&
				<Link href={link}>
					<a className={styles.link}>Read article <FontAwesomeIcon icon={faChevronRight} /></a>
				</Link>}
			</div>
		</div>
	</article>
}

export default LargeArticleBox;