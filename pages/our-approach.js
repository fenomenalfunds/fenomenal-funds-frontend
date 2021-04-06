import styles from './../styles/our-approach.module.scss';
import Head from 'next/head';
import Grid from '@material-ui/core/Grid';
import Layout from "../layout/website-layout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import {fetchAPI} from "../lib/api";
import Seo from "../components/seo";

const OurApproachPage = ({approach}) => {

	console.log('%%%%%%%%% APPROACH %%%%%%%%%', approach);
	return <Layout>
		<Seo seo={approach.seo} />

		<Grid container justify="center" spacing={0} className={styles.ourApproach}>
			<Grid item xs={12}>
				<article>
					<section className={styles.videoHeader}>
						<figure className={styles.video}>
							<img src="/temp/gemma-chua-tran-mZQpsI1CoVQ-unsplash.png" alt=""/>
						</figure>

						<FontAwesomeIcon icon={faPlay} size="4x" />

						<div className={styles.caption}>
							<h1 className={styles.title}>{approach.title}</h1>
							<div className={styles.subtitle} dangerouslySetInnerHTML={{__html: approach.intro}} />
						</div>
					</section>

					<section className={styles.videoHeader}>
						<figure className={styles.video}>
							<img src="/temp/annie-spratt-0cgpyigyIkM-unsplash.png" alt=""/>
						</figure>

						<div className={styles.caption}>
							<h1 className={styles.title}>Infrastructure of women's funds</h1>
							<p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Pellentesque iaculis non sapien non accumsan. Donec euismod dictum iaculis. Proin nec
								leo vel dui convallis lobortis.</p>
						</div>

						<div className={styles.secondaryCaption}>
							<h2 className={styles.title}>Funding for <strong>the feminist ecosystem</strong></h2>
						</div>
					</section>

					<section className={styles.articleHeader}>
						<figure className={styles.image}>
							<img src="/temp/clarke-sanders-JpCOGj0uIlI-unsplash.png" alt=""/>
						</figure>

						<div className={styles.caption}>
							<h1 className={styles.title}>Resilience of women's fund ecosystem</h1>
						</div>
					</section>
				</article>
			</Grid>
		</Grid>
	</Layout>
}

export async function getStaticProps() {
	const approach = await fetchAPI('/approach');

	return {
		props: {
			approach
		}
	}
}

export default OurApproachPage;