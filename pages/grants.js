import styles from './../styles/grants.module.scss';
import _ from 'lodash';
import Grid from "@material-ui/core/Grid";
import Layout from "../layout/website-layout";
import moment from "moment";
import CoverArticleBox from "../components/cover-article-box";
import SquareArticleBox from "../components/square-article-box";
import {fetchAPI, fetchGrantsContent} from "../lib/api";
import NotFound from "../components/not-found";
import Seo from "../components/seo";

const GrantDetail = ({grants, blog}) => {
	if(!grants) return <NotFound />;

	return <Layout>
		<Seo seo={grants.seo} />

		<Grid container justify="center" spacing={0} className={styles.grantsDetail}>
			<Grid item xs={10}>
				<article className={styles.article}>

					<div className={styles.header}>
						<h1 className={styles.title}>{grants.title}</h1>
						<div className={styles.subtitle} dangerouslySetInnerHTML={{__html: grants.body}} />
					</div>

					<div className={styles.body}>
						<div className={styles.description}>
							<h2 className={styles.title}>{grants.text[0] && grants.text[0].title}</h2>
							<p className={styles.subtitle}>{grants.text[0] && grants.text[0].subtitle}</p>
						</div>
						<div className={styles.mosaic}>
							{_.map(grants.grant_articles, (art, a) => {
								return <SquareArticleBox
										key={a}
										title={art.title}
										subtitle={art.subtitle}
										image={art.thumbnail}
										link={`/grants/${art.slug}`}
								/>
							})}
						</div>
					</div>
				</article>

				{(blog && !_.isEmpty(blog.articles)) &&
				<aside className={styles.blog}>
					<div className={styles.titleBox}>
						<h2 className={styles.title}>Blog</h2>
						<p className={styles.subtitle}>Find out about the work, news and updates from organizations</p>
					</div>

					<div className={styles.articles}>
						{_.map(_.slice(blog.articles, 0, 8), (article, k) => {
							return <CoverArticleBox
									key={k}
									title={article.title}
									subtitle={article.subtitle}
									image={article.thumbnail}
									publish={article.publish ? moment(article.publish).calendar() : null}
									link={`/blog/${article.slug}`}
							/>
						})}
					</div>
				</aside>}
			</Grid>
		</Grid>
	</Layout>
}

export async function getStaticProps() {
	const data = await fetchGrantsContent();

	return {
		props: {
			...data
		},
		revalidate: true
	}
}

export default GrantDetail;