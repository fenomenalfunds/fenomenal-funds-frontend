import styles from './../../styles/blog-detail.module.scss';
import _ from 'lodash';
import Grid from "@material-ui/core/Grid";
import Layout from "../../layout/website-layout";
import moment from "moment";
import CoverArticleBox from "../../components/cover-article-box";
import {fetchGrantArticleDetail, fetchGrantsRoutes} from "../../lib/api";
import Seo from "../../components/seo";
import Image from "../../components/image";
import NotFound from "../../components/not-found";

const GrantArticleDetail = ({article, related}) => {
	if (_.isEmpty(article)) return <NotFound link="/blog" text="Return to blog" />;

	return <Layout>
		<Seo seo={article.seo}/>

		<Grid container justify="center" spacing={0} className={styles.blogDetail}>
			<Grid item xs={11} lg={10}>
				<article className={styles.article}>
					<figure className={styles.image}>
						<Image image={article.image}/>
					</figure>
					<div className={styles.header}>
						<div className={styles.title}>
							<h1>{article.title}</h1>
							{!_.isEmpty(article.author) &&
							<p className={styles.author}>{article.author.fullname && article.author.fullname}</p>}
							{article.publish && <p className={styles.date}>{moment(article.publish).format('LL')}</p>}
							{article.category && <p className={styles.category}>
								{article.category.icon && <Image image={article.category.icon}/>}
								{article.category.name}
							</p>}
							{article.tags &&
							<p className={styles.tags}>
								{_.map(article.tags, (tag, t) => {
									return <span key={t}>{tag.tag}</span>
								})}
							</p>}
						</div>
						<div className={styles.intro} dangerouslySetInnerHTML={{__html: article.intro}}/>
					</div>

					<div className={styles.body} dangerouslySetInnerHTML={{__html: article.body}}/>
				</article>

				{(related && !_.isEmpty(related)) &&
				<aside className={styles.related}>
					<h2 className={styles.title}>Related posts</h2>

					<div className={styles.articles}>
						{_.map(related, (article, a) => {
							return <CoverArticleBox
									key={a}
									title={article.title}
									subtitle={article.subtitle}
									image={article.thumbnail}
									author={article.author}
									publish={moment(article.publish).calendar()}
									link={`/grants/${article.slug}`}
							/>
						})}
					</div>
				</aside>}
			</Grid>
		</Grid>
	</Layout>
}

export async function getStaticProps({params}, preview = {}) {
	const data = await fetchGrantArticleDetail(params.slug, preview);

	if(_.isEmpty(data.article)) return { notFound: true }

	return {
		props: {
			...data
		},
		revalidate: true
	}
}

export async function getStaticPaths() {
	const paths = await fetchGrantsRoutes();

	return {
		paths: paths,
		fallback: true
	}
}

export default GrantArticleDetail;