import propTypes from 'prop-types';
import styles from "../styles/components/close-button.module.scss";

const CloseButton = ({func}) => {
	return <button className={styles.close} onClick={func}>
		<span>&nbsp;</span>
		<span>&nbsp;</span>
	</button>
}

CloseButton.propTypes = {
	func: propTypes.func.isRequired
}

export default CloseButton;