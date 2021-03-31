import _ from 'lodash';
import propTypes from 'prop-types';
import styles from './../styles/components/team-box.module.scss';
import TeamMember from "./team-member";

const TeamBox = ({title, members, variant}) => {
	return <section className={`${styles.teamBox} ${variant && styles.alt}`}>
		<h2 className={styles.title}>{title}</h2>

		<div className={styles.members}>
			{_.map(members, (member) => {
				return <TeamMember
						key={member.id}
						name={member.fullname}
						slug={member.username}
						position={member.position}
						image={member.photo}
				/>
			})}
		</div>
	</section>
}

TeamBox.propTypes = {
	title: propTypes.string.isRequired,
	members: propTypes.array.isRequired,
	variant: propTypes.bool
}

TeamBox.defaultProps = {
	title: "Please add title",
	members: [],
	variant: true
}

export default TeamBox;