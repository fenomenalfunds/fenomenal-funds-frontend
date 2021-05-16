import propTypes from 'prop-types';
import styles from './../styles/components/clear-overlay.module.scss';
import CloseButton from "./close-button";
import ProfilePhoto from "./profile-photo";

const ClearOverlay = ({title, subtitle, text, image, func, open}) => {
	return <div className={`${styles.clearOverlay} ${open ? styles.open : ''}`}>
		<div className={styles.content}>
			<div className={styles.image}>
				<figure>
					<ProfilePhoto image={image} />
				</figure>
			</div>
			<div className={styles.details}>
				<h1 className={styles.title}>{title}</h1>
				<h2 className={styles.subtitle}>{subtitle}</h2>
				<div className={styles.text} dangerouslySetInnerHTML={{__html: text}} />
			</div>
		</div>
		<CloseButton func={func}/>
	</div>
}

ClearOverlay.propTypes = {
	title: propTypes.string.isRequired,
	text: propTypes.string.isRequired,
	image: propTypes.object.isRequired,
	func: propTypes.func.isRequired,
	open: propTypes.bool
}

ClearOverlay.defaultProps = {
	title: 'Please add title',
	text: 'Please add some text',
	image: {url: `${process.env.NEXT_PUBLIC_BASE_URL}/FF_2021_ImagePlaceholder_510x288.jpg`},
	func: null,
	open: false
}

export default ClearOverlay;