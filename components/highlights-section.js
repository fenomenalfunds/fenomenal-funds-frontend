import styles from './../styles/components/highlights-section.module.scss';
import {Grid} from "@material-ui/core";
import StoriesSlider from "./stories-slider";

const HighlightsSection = ({title, subtitle, stories}) => {
	return <section className={styles.insights}>
		<Grid container spacing={0}>
			<Grid item lg={12} xs={12}>
				<hr className={styles.divider} />
				<div className={styles.content}>
					<h1>{title}</h1>
					<p>{subtitle}</p>
					<div className={styles.stories}>
						<StoriesSlider
							slides={stories}
						/>
					</div>
				</div>
				<hr className={styles.divider} />
			</Grid>
		</Grid>
	</section>
}

export default HighlightsSection;