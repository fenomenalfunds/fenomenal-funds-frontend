import _ from 'lodash';
import Grid from '@material-ui/core/Grid';
import {useRouter} from "next/router";
import Layout from "./../../../layout/website-layout";
import styles from './../../../styles/blog.module.scss';
import Seo from "./../../../components/seo";
import Image from "./../../../components/image";
import ArticleGrid from "./../../../components/article-grid";
import NotFound from "./../../../components/not-found";
import Pagination from "./../../../components/pagination";
import {fetchBlogContent} from "../../../lib/api";

export const FIRST_PAGE_SIZE = 11;
export const OTHER_PAGE_SIZE = 16;

const getStartFromPage = (page) => {
	return (page > 1 ? FIRST_PAGE_SIZE + OTHER_PAGE_SIZE * (page - 2) : 0);
};

const Page = ({blog, articles, page, start, total}) => {
	const router = useRouter();
	if(!blog) return <NotFound />;

	return <Layout>
		<Seo seo={blog.seo} />

		<Grid container justify="center" spacing={0} className={styles.blog}>
			<Grid item xs={11} lg={10}>
				<section>
					<div className={styles.header}>
						<Image image={blog.image} className={styles.logo} />
						<h1>{blog.title}</h1>
					</div>

					{articles ?
							<ArticleGrid articles={articles} /> :
							<p>Oops! We're not ready yet, but come back soon and we'll have plenty of interesting articles to share</p>}

					<Pagination
							page={parseInt(page)}
							start={start + 1}
							end={start + _.size(articles)}
							totalItems={total}
							firstPageSize={FIRST_PAGE_SIZE}
							otherPageSize={OTHER_PAGE_SIZE}
							router={router}
					/>
				</section>
			</Grid>
		</Grid>
	</Layout>
}

export async function getStaticProps(params, preview={}) {
	const {page = 1} = params;
	const start = getStartFromPage(page);
	const items = page === 1 ? FIRST_PAGE_SIZE : OTHER_PAGE_SIZE;
	const data = await fetchBlogContent(start, items, preview);
	//console.info('********** params ***********', params);
	if(_.isEmpty(data.blog)) return {notFound:true};

	return {
		props: {
			...data,
			page: page,
			start: start
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

export default Page;