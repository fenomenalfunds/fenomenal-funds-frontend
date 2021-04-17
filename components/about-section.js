import _ from "lodash";
import propTypes from 'prop-types';
import styles from './../styles/components/about-section.module.scss';
import TeamBox from "./team-box";
import Grid from "@material-ui/core/Grid";
import Image from "./image";

const AboutSection = ({title, subtitle, image, teams, background = true}) => {
	return <section className={`${styles.about} ${background ? '' : styles.alt}`}>
		<Grid container justify="center">
			<Grid item xs={10}>
				<div className={styles.titleBox}>
					<h2 className={styles.title}>{title}</h2>
					<div className={styles.subtitle} dangerouslySetInnerHTML={{__html: subtitle}} />
				</div>

				{image &&
				<figure className={styles.diagram}>
					<Image  image={image} />
				</figure>}

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
			</Grid>
		</Grid>
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