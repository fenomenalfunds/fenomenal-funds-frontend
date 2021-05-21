import styles from './../../styles/blog-detail.module.scss';
import _ from 'lodash';
import Grid from "@material-ui/core/Grid";
import Layout from "../../layout/website-layout";
import moment from "moment";
import {fetchReportDetail, fetchReportRoutes} from "../../lib/api";
import Seo from "../../components/seo";
import Image from "../../components/image";
import NotFound from "../../components/not-found";

const ReportDetail = ({report}) => {
	if (_.isEmpty(report)) return <NotFound link="/blog" text="Return to blog"/>;

	return <Layout>
		<Seo seo={report.seo}/>

		<Grid container justify="center" spacing={0} className={styles.blogDetail}>
			<Grid item xs={11} lg={10}>
				<article className={styles.article}>
					<figure className={styles.image}>
						<Image image={report.image}/>
					</figure>
					<div className={styles.header}>
						<div className={styles.title}>
							<h1>{report.title}</h1>
							{!_.isEmpty(report.author) &&
							<p className={styles.author}>{report.author.fullname && report.author.fullname}</p>}
							{report.publish && <p className={styles.date}>{moment(report.publish).format('LL')}</p>}
							{report.category && <p className={styles.category}>
								{report.category.icon && <Image image={report.category.icon}/>}
								{report.category.name}
							</p>}
							{report.tags &&
							<p className={styles.tags}>
								{_.map(report.tags, (tag, t) => {
									return <span key={t}>{tag.tag}</span>
								})}
							</p>}
						</div>
						<div className={styles.intro} dangerouslySetInnerHTML={{__html: report.intro}}/>
					</div>
				</article>
			</Grid>
			<Grid item xs={11} lg={8}>
				<div className={styles.body} dangerouslySetInnerHTML={{__html: report.body}}/>
			</Grid>
			<Grid item xs={11} lg={2}>
				{!_.isEmpty(report.documents) ? <div className={styles.downloads}>
					Downloadable resources

					{_.map(report.documents, (document, d) => {
						return <p key={d}>
							<a href={document.url} className="btn" target="_blank" download>
								{document.caption ? document.caption : `Download ${document.ext}`}
							</a>
						</p>
					})}
				</div> : ' '}
			</Grid>
		</Grid>
	</Layout>
}

export async function getStaticProps(
	{
		params
	}
, preview =
	{
	}
)
	{
		const data = await fetchReportDetail(params.slug, preview);

		if (_.isEmpty(data.report)) return {notFound: true}

		return {
			props: {
				...data
			},
			revalidate: true
		}
	}

export async function getStaticPaths()
	{
		const paths = await fetchReportRoutes();

		return {
			paths: paths,
			fallback: true
		}
	}

export default ReportDetail;