import styles from './../styles/components/long-article.module.scss';
import React from "react";
import Image from "./image";

const LongArticle = ({title, subtitle, body, image}) => {
	return <article className={styles.longArticle}>
		<figure className={styles.image}>
			<Image image={image} />
		</figure>

		<div className={styles.caption}>
			<h1 className={styles.title}>{title}</h1>
		</div>

		<div className={styles.body}>
			<h2 className={styles.subtitle}>{subtitle}</h2>
			<div className={styles.text} dangerouslySetInnerHTML={{__html:body}} />
		</div>
	</article>
}

export default LongArticle;