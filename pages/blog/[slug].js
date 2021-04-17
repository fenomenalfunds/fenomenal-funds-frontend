import styles from './../../styles/blog-detail.module.scss';
import _ from 'lodash';
import Grid from "@material-ui/core/Grid";
import Layout from "../../layout/website-layout";
import moment from "moment";
import CoverArticleBox from "../../components/cover-article-box";
import {fetchAPI} from "../../lib/api";
import Seo from "../../components/seo";
import Image from "../../components/image";

const BlogDetail = ({article, related}) => {

	console.info('%%%%% article %%%%%', article);

	return <Layout>
		<Seo seo={article.seo} />

		<Grid container justify="center" spacing={0} className={styles.blogDetail}>
			<Grid item xs={10}>
				<article className={styles.article}>
					<figure className={styles.image}>
						<Image image={article.image} />
					</figure>
					<div className={styles.header}>
						<div className={styles.title}>
							<h1>{article.title}</h1>
							{!_.isEmpty(article.author) && <p className={styles.author}>{article.author.fullname && article.author.fullname}</p>}
							{article.publish && <p className={styles.date}>{moment(article.publish).format('LL')}</p>}
							{article.category && <p className={styles.category}>
								{article.category.icon && <Image image={article.category.icon} />}
								{article.category.name}
							</p>}
							{article.tags &&
							<p className={styles.tags}>
								{_.map(article.tags, (tag) => {
									return <span key={tag.id}>{tag.tag}</span>
								})}
							</p>}
						</div>
						<div className={styles.intro} dangerouslySetInnerHTML={{__html: article.intro}} />
					</div>

					<div className={styles.body} dangerouslySetInnerHTML={{__html: article.body}} />
				</article>

				{related &&
				<aside className={styles.related}>
					<h2 className={styles.title}>Related posts</h2>

					<div className={styles.articles}>
						{_.map(related, (article) => {
							return <CoverArticleBox
									key={article.id}
									title={article.title}
									subtitle={article.subtitle}
									image={article.thumbnail}
									author={article.author}
									publish={moment(article.publish).calendar()}
									link={`/blog/${article.slug}`}
							/>
						})}
					</div>
				</aside>}
			</Grid>
		</Grid>
	</Layout>
}

export async function getStaticProps({params}) {
	const articles = await fetchAPI(`/articles?slug=${params.slug}`);

	let where = articles ? _.join(_.map(articles[0].tags, (t) => `_where[0][tags_in]=${t.id}`), '&') : '';

	const related = articles ? await fetchAPI(`/articles?_limit=4&id_ne=${articles[0].id}&${where}`) : [];

	return {
		props: {
			article: articles ? articles[0] : {},
			related: related ? related : []
		},
		revalidate: true
	}
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: true
	}
}

export default BlogDetail;