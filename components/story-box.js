import styles from './../styles/components/story-box.module.scss';
import Image from "./image";

const StoryBox = ({title, subtitle, cover, video, click}) => {
	return <div className={styles.storyBox} onClick={click}>
		<figure className={styles.cover}>
			<Image image={cover} />
		</figure>
		<div className={styles.caption}>
			<h4>{title}</h4>
			<p>{subtitle}</p>
		</div>
	</div>
}

export default StoryBox;