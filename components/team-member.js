import styles from './../styles/components/team-box.module.scss';
import propTypes from 'prop-types';

const TeamMember = ({name, slug, position, image}) => {
	return <div className={styles.teamMember}>
		<figure className={styles.photo}>
			<img src={image.url} alt={image.alternativeText} />
		</figure>
		<p className={styles.caption}>
			{name} <br/> {position}
		</p>
	</div>
}

TeamMember.propTypes = {
	image: propTypes.object.isRequired,
	name: propTypes.string.isRequired,
	slug: propTypes.string.isRequired,
	position: propTypes.string
}

export default TeamMember;