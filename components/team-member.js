import styles from './../styles/components/team-box.module.scss';
import propTypes from 'prop-types';
import ProfilePhoto from "./profile-photo";

const TeamMember = ({name, slug, position, image}) => {
	return <div className={styles.teamMember}>
		<figure className={styles.photo}>
			<ProfilePhoto image={image} />
		</figure>
		<p className={styles.caption}>
			<span>{name}</span>
			{position && <><br/> {position}</>}
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