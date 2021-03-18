import styles from './../styles/components/team-box.module.scss';
import TeamMember from "./team-member";

const TeamBox = ({title, members, variant}) => {
	return <section className={`${styles.teamBox} ${variant && styles.alt}`}>
		<h2 className={styles.title}>{title}</h2>

		<div className={styles.members}>
			<TeamMember
				name="Full Name"
				slug="full-name"
				position="Position"
				image={{url:`/profiles/img1.jpg`, alternativeText:"photo"}}
			/>
			<TeamMember
				name="Full Name"
				slug="full-name"
				position="Position"
				image={{url:`/profiles/img9.png`, alternativeText:"photo"}}
			/>
			<TeamMember
				name="Full Name"
				slug="full-name"
				position="Position"
				image={{url:`/profiles/img3.jpg`, alternativeText:"photo"}}
			/>
			<TeamMember
				name="Full Name"
				slug="full-name"
				position="Position"
				image={{url:`/profiles/img4.png`, alternativeText:"photo"}}
			/>
			<TeamMember
				name="Full Name"
				slug="full-name"
				position="Position"
				image={{url:`/profiles/img5.jpg`, alternativeText:"photo"}}
			/>
			<TeamMember
				name="Full Name"
				slug="full-name"
				position="Position"
				image={{url:`/profiles/img6.png`, alternativeText:"photo"}}
			/>
			<TeamMember
				name="Full Name"
				slug="full-name"
				position="Position"
				image={{url:`/profiles/img7.png`, alternativeText:"photo"}}
			/>
			<TeamMember
				name="Full Name"
				slug="full-name"
				position="Position"
				image={{url:`/profiles/img8.png`, alternativeText:"photo"}}
			/>
			<TeamMember
				name="Full Name"
				slug="full-name"
				position="Position"
				image={{url:`/profiles/img10.png`, alternativeText:"photo"}}
			/>
		</div>
	</section>
}

export default TeamBox;