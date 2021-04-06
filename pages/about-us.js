import styles from './../styles/about-us.module.scss';
import Layout from "../layout/website-layout";
import Head from 'next/head';
import Grid from '@material-ui/core/Grid';
import TeamBox from "../components/team-box";
import {fetchAPI} from "../lib/api";
import Seo from "../components/seo";
import Image from "../components/image";
import AboutSection from "../components/about-section";

const AboutUsPage = ({about, editorial}) => {
	return <Layout>
		<Seo seo={about.seo} />

		<Grid container justify="center" className={styles.aboutUs}>
			<Grid item xs={10}>
				<article>
					<section className={styles.header} dangerouslySetInnerHTML={{__html: about.intro}} />

					<section className={styles.letter}>
						<div className={styles.image}>
							<figure>
								<Image image={editorial.image} />
							</figure>
						</div>
						<div className={styles.body}>
							<h1 className={styles.title}>{editorial.title}</h1>
							<div className={styles.text} dangerouslySetInnerHTML={{__html: editorial.body}} />
						</div>
					</section>

					<section className={styles.complementary}>
						<h1 className={styles.title}>{about.mission_statement.title}</h1>

						<div className={styles.text} dangerouslySetInnerHTML={{__html: about.mission_statement.mission}} />

						<div className={styles.image}>
							<figure>
								<img src="/temp/naxph-pKyY_fosG90-unsplash.png" alt=""/>
							</figure>
						</div>
					</section>

					{about.staff &&
					<AboutSection
							title={about.staff.title}
							subtitle={about.staff.subtitle}
							background={false}
							teams={(about.staff && about.staff.teams) ? about.staff.teams : null}
					/>}

				</article>
			</Grid>
		</Grid>
	</Layout>
}

export async function getStaticProps() {
	const [about, editorial] = await Promise.all([
			fetchAPI('/about-us'),
			fetchAPI('/editorial')
	]);

	return {
		props: {
			about,
			editorial
		}
	}
}

export default AboutUsPage;