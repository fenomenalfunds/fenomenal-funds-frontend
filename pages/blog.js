import Layout from "../layout/website-layout";
import Grid from '@material-ui/core/Grid';
import styles from './../styles/blog.module.scss';
import {fetchAPI} from "../lib/api";
import Seo from "../components/seo";
import Image from "../components/image";
import ArticleGrid from "../components/article-grid";

const Blog = ({blog, articles}) => {
	return <Layout>
		<Seo seo={blog.seo} />

		<Grid container justify="center" spacing={0} className={styles.blog}>
			<Grid item xs={10}>
				<section>
					<div className={styles.header}>
						<Image image={blog.image} className={styles.logo} />
						<h1>{blog.title}</h1>
					</div>

					{articles ?
						<ArticleGrid articles={articles} /> :
							<p>Oops! We're not ready yet, but come back soon and we'll have plenty of interesting articles to share</p>}
				</section>
			</Grid>
		</Grid>
	</Layout>
}

export async function getStaticProps() {
	const [blog, articles] = await Promise.all([
			fetchAPI('/blog'),
			fetchAPI('/articles?_sort=publish:DESC')
	]);

	return {
		props: {
			blog,
			articles
		},
		revalidate: 1
	}
}

export default Blog;