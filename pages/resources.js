import styles from './../styles/components/resources.module.scss';
import _ from 'lodash';
import Layout from "../layout/website-layout";
import {parseCookies} from "nookies";
import {fetchResourcesContent} from "../lib/api";
import Seo from "../components/seo";
import NotFound from "../components/not-found";
import Grid from "@material-ui/core/Grid";
import ResourceBox from "../components/resource-box";
import {getUser} from "../lib/auth";

const CareersPage = ({content, resources}) => {
	if(!content) return <NotFound />;

	return <Layout>
		<Seo seo={content.seo} />

		<Grid container justify="center" spacing={0} className={styles.resources}>
			<Grid item xs={11} lg={10}>
				<div className={styles.header}>
					<h1 className={styles.title}>{content.title}</h1>
					<div className={styles.subtitle} dangerouslySetInnerHTML={{__html: content.subtitle}} />
				</div>
			</Grid>
		</Grid>
		<Grid item xs={11} lg={8}>
			<div className={styles.resourcesList}>
				{_.map(resources, (item, i) => {
					return <ResourceBox
							key={i}
							title={item.title}
							subtitle={item.subtitle}
							image={item.thumbnail}
							slug={item.slug}
					/>
				})}
			</div>
		</Grid>
	</Layout>
}

export async function getServerSideProps(ctx) {
	const cookies = getUser(ctx);
	const data = await fetchResourcesContent(cookies.jwt);

	return {
		props: {
			...data
		}
	}
}

export default CareersPage;