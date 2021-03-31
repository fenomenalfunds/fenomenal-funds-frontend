import _ from "lodash";
import propTypes from 'prop-types';
import styles from './../styles/components/about-section.module.scss';
import TeamBox from "./team-box";

const AboutSection = ({title, subtitle, teams}) => {
	return <section className={styles.about}>
		<div className={styles.titleBox}>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.subtitle}>{subtitle}</p>
		</div>

		{teams &&
		<div className={styles.membersBubbles}>
			{_.map(teams, (team, k) => {
				return <div key={k}>
					<TeamBox
							title={team.title}
							members={team.users}
							variant={(k !== 0)}
					/>
				</div>
			})}
		</div>}
	</section>;
}

AboutSection.propTypes = {
	title: propTypes.string.isRequired,
	subtitle: propTypes.string.isRequired,
	teams: propTypes.array
}

AboutSection.defaultProps = {
	title: "Please add section title",
	subtitle: "Please add section subtitle"
}

export default AboutSection;