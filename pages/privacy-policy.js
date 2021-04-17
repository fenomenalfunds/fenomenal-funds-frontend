import moment from "moment";
import Grid from '@material-ui/core/Grid';
import Layout from "../layout/website-layout";
import styles from './../styles/components/terms-and-conditions.module.scss';
import {fetchPrivacyPolicy} from "../lib/api";
import Seo from "../components/seo";
import NotFound from "../components/not-found";

const PrivacyPolicy = ({content}) => {
	if(!content) return <NotFound />

	return <Layout>
		<Seo seo={content.seo} />

		<Grid container justify="center" spacing={3} className={styles.termsAndConditions}>
			<Grid item xs={10}>
				<article>
					<h1>{content.title}</h1>
					<div dangerouslySetInnerHTML={{__html: content.body}} />

					<p className={styles.termsLogo}>
						<img src="/fenomenal-funds-logo-alt.svg" alt=""/>
						<br/><br/>
						<small>Last updated: {moment(content.publish).calendar()}</small>
					</p>
				</article>
			</Grid>
		</Grid>
	</Layout>
}

export async function getStaticProps(preview = {}) {
	const data = await fetchPrivacyPolicy();

	return {
		props: {
			content: data.content
		},
		revalidate: true
	}
}

export default PrivacyPolicy;