import styles from './../styles/learnings.module.scss';
import _ from 'lodash';
import Layout from "../layout/website-layout";
import {fetchInsightsPage} from "../lib/api";
import NotFound from "../components/not-found";
import Seo from "../components/seo";
import {Grid} from '@material-ui/core';
import ReportBox from "../components/report-box";
import DocumentBox from "../components/document-box";

const LearningsPage = ({learnings}) => {
	if (!learnings) return <NotFound/>

	return <Layout>
		<Seo seo={learnings.seo}/>

		<article className={styles.learnings}>
			<Grid container spacing={0} justify="center">
				<Grid item xs={10} lg={10} className={styles.article}>
					<header>
						<h1 className={styles.title}>{learnings.title}</h1>
						<div className={styles.subtitles} dangerouslySetInnerHTML={{__html: learnings.body}}/>
					</header>

					{learnings.reports &&
					<div className={styles.reports}>
						{_.map(learnings.reports, (report) => {
							return <ReportBox
									key={report.id}
									title={report.title}
									subtitle={report.subtitle}
									image={report.image}
							/>
						})}
					</div>}
				</Grid>
			</Grid>

			{learnings.documents &&
			<Grid container spacing={0} justify="center" className={styles.documents}>
				<Grid item lg={10} xs={10}>
					<div className={styles.header}>
						<h2>Directory of useful resources</h2>
						<p>Links, research work and documents</p>
					</div>
					<div className={styles.documentsList}>
						{_.map(_.slice(learnings.documents, 0, 6), (document) => {
							return <DocumentBox
									key={document.id}
									title={document.title}
									icon={document.icon}
									type={document.document_type && document.document_type.title}
									subtitle={document.description}
									body={document.body}
									files={document.files}
							/>
						})}
					</div>
				</Grid>
			</Grid>}
		</article>
	</Layout>
}

export async function getStaticProps() {
	const data = await fetchInsightsPage();

	return {
		props: {
			learnings: data.content
		},
		revalidate: true
	}
}

export default LearningsPage;