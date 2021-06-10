import styles from './../styles/components/social-stories.module.scss';
import Stories from 'react-insta-stories';
import CloseButton from "./close-button";

const SocialStories = ({func, stories, index}) => {
	return <div className={styles.socialStories}>
		<CloseButton func={func} />
		<Stories
				stories={stories}
				currentIndex={index}
				defaultInterval={20000}
				storyStyles={{
					height: '98%',
					width: '100%',
					marginTop: '2%'
				}}
				width="100%"
				height="100%"
		/>
	</div>
}

export default SocialStories;