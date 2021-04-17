import styles from "./../styles/components/short-article.module.scss";
import React from "react";
import Image from "./image";

const ShortArticle = ({image, title, subtitle, body}) => {
	return <div className={styles.shortArticle}>
		<figure className={styles.video}>
			<Image image={image} />
		</figure>

		<div className={styles.caption}>
			<div className={styles.text}>
				<h1 className={styles.title}>{title}</h1>
				<div className={styles.subtitle} dangerouslySetInnerHTML={{__html: body}} />
			</div>
		</div>

		<div className={styles.secondaryCaption}>
			<h2 className="">{subtitle}</h2>
		</div>
	</div>
}

export default ShortArticle;