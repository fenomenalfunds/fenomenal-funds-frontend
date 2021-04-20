import styles from './../styles/components/insights-section.module.scss';
import Grid from "@material-ui/core/Grid";
import _ from "lodash";
import ArticleBox from "./article-box";
import Link from "next/link";

const InsightsSection = ({title, subtitle, reports}) => {
	return <Grid container justify="center" className={styles.insights}>
		<Grid item xs={10}>
			<section>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.subtitle}>{subtitle}</p>

				{reports &&
				<div className={styles.articles}>
					{_.map(_.slice(reports, 0, 2), (report) => {
						return <ArticleBox
								key={report.id}
								title={report.title}
								subtitle={report.subtitle}
								image={report.image}
								url={`/reports/${report.slug}`}
						/>
					})}
				</div>}

				<div>
					<Link href="/learnings">
						<a className="btn red">View all insights</a>
					</Link>
				</div>
			</section>
		</Grid>
	</Grid>
}

export default InsightsSection;