import styles from './../styles/components/careers.module.scss';
import _ from 'lodash';
import {fetchCareersContent} from "../lib/api";
import Layout from "../layout/website-layout";
import Seo from "../components/seo";
import NotFound from "../components/not-found";
import {Grid} from "@material-ui/core";
import PositionBox from "../components/position-box";

const CareersPage = ({career, positions}) => {
	if(!career) return <NotFound />;

	return <Layout>
		<Seo seo={career.seo} />

		<Grid container justify="center" spacing={0} className={styles.careers}>
			<Grid item lg={10} xs={11}>
				<article>
					<header className={styles.header}>
						<h1>{career.title}</h1>
						<div dangerouslySetInnerHTML={{__html: career.body}} />
					</header>

					<section className={styles.positions}>
						<h1 className={styles.title}>Positions</h1>

						<div className={styles.positionsGrid}>
							{_.map(positions, (position, p) => {
								return <PositionBox
									key={p}
									category={position.job_category && position.job_category.title}
									title={position.title}
									subtitle={position.short_description}
									publisher={position.publisher}
								/>
							})}
						</div>
					</section>
				</article>
			</Grid>
		</Grid>
	</Layout>
}

export async function getStaticProps(params, preview = {}) {
	const data = await fetchCareersContent(params, preview);

	return {
		props: {
			...data
		},
		revalidate: true
	}
}

export default CareersPage;