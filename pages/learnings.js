import styles from './../styles/learnings.module.scss';
import _ from 'lodash';
import Layout from "../layout/website-layout";
import {fetchAPI} from "../lib/api";
import NotFound from "../components/not-found";
import Seo from "../components/seo";
import {Grid} from '@material-ui/core';
import ReportBox from "../components/report-box";

const LearningsPage = ({learnings}) => {
	if(!learnings) return <NotFound />

	return <Layout>
		<Seo seo={learnings.seo} />

		{console.log('%%%%%%%%%% LEARNINGS %%%%%%%%%%', learnings)}

		<Grid container justify="center" spacing={0} className={styles.learnings}>
			<Grid item lg={10}>
				<article className={styles.article}>
					<header>
						<h1 className={styles.title}>{learnings.title}</h1>
						<div className={styles.subtitles} dangerouslySetInnerHTML={{__html: learnings.body}} />
					</header>

					{learnings.reports &&
					<div className={styles.reports}>
						{_.map(learnings.reports, (report) => {
							console.log('&&&&&&&&& REPORT &&&&&&&&', report);
							return <ReportBox
								key={report.id}
								title={report.title}
								subtitle={report.subtitle}
								image={report.image}
							/>
						})}
					</div>}
				</article>
			</Grid>
		</Grid>
	</Layout>
}

export async function getServerSideProps() {
	const learnings = await fetchAPI('/insights');

	return {
		props: {
			learnings
		}
	}
}

export default LearningsPage;