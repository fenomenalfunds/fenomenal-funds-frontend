import styles from './../styles/components/resources.module.scss';
import Layout from "../layout/website-layout";
import {parseCookies} from "nookies";
import {fetchResourcesContent} from "../lib/api";
import Seo from "../components/seo";
import NotFound from "../components/not-found";
import Grid from "@material-ui/core/Grid";

const CareersPage = ({content, resources}) => {
	if(!content) return <NotFound />;

	return <Layout>
		<Seo seo={content.seo} />

		<Grid container justify="center" spacing={0} className={styles.resources}>
			<Grid item xs={11} lg={10}>
				<div className={styles.header}>
					<h1 className={styles.title}>{content.title}</h1>
					<div className={styles.subtitle} dangerouslySetInnerHTML={{__html: content.about}} />
				</div>
			</Grid>
		</Grid>
	</Layout>
}

export async function getServerSideProps(ctx) {
	const cookies = parseCookies(ctx);
	const data = await fetchResourcesContent(cookies.jwt);

	return {
		props: {
			...data
		}
	}
}

export default CareersPage;