import styles from './../styles/components/team-box.module.scss';
import propTypes from 'prop-types';
import ProfilePhoto from "./profile-photo";

const TeamMember = ({name, slug, position, image, func}) => {
	return <div className={styles.teamMember} onClick={func}>
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

TeamMember.defaultProps = {
	image: {url: `${process.env.NEXT_PUBLIC_BASE_URL}/FF_2021_ImagePlaceholder_510x288.jpg`},
	name: 'Please add name'
}

export default TeamMember;