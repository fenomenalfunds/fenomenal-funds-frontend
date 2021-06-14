import styles from './../../styles/blog-detail.module.scss';
import _ from 'lodash';
import Grid from "@material-ui/core/Grid";
import Layout from "../../layout/website-layout";
import {fetchResourceDetail} from "../../lib/api";
import Seo from "../../components/seo";
import Image from "../../components/image";
import NotFound from "../../components/not-found";
import {getUser} from "../../lib/auth";

const ResourceDetail = ({document, related}) => {
	if (_.isEmpty(document)) return <NotFound link="/resources" text="Return to resources"/>;

	return <Layout>
		<Seo seo={document.seo}/>

		<Grid container justify="center" spacing={0} className={styles.blogDetail}>
			<Grid item xs={11} lg={10}>
				<article className={styles.article}>
					{document.image &&
					<figure className={styles.image}>
						<Image image={document.image}/>
					</figure>}
					<div className={styles.header}>
						<div className={styles.title}>
							<h1>{document.title}</h1>
						</div>
						<div className={styles.intro} dangerouslySetInnerHTML={{__html: document.subtitle}}/>
					</div>
				</article>
			</Grid>
			<Grid item xs={11} lg={8}>
				<div className={styles.body} dangerouslySetInnerHTML={{__html: document.body}}/>
			</Grid>
			<Grid item xs={11} lg={2}>
				{!_.isEmpty(document.files) ? <div className={styles.downloads}>
					Downloadable resources

					{_.map(document.files, (document, d) => {
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

export async function getServerSideProps(ctx) {
	const cookies = getUser(ctx);
	const data = await fetchResourceDetail(ctx, cookies.jwt, ctx.params.slug);

	if (_.isEmpty(data.document)) return {notFound: true}

	return {
		props: {
			...data
		}
	}
}

export default ResourceDetail;