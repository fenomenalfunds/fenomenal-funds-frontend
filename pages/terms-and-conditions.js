import moment from "moment";
import Grid from '@material-ui/core/Grid';
import Layout from "../layout/website-layout";
import styles from './../styles/components/terms-and-conditions.module.scss';
import {fetchTermsAndConditions} from "../lib/api";
import Seo from "../components/seo";

const TermAndConditions = ({terms}) => {
	return <Layout>
		<Seo seo={terms.seo} />

		<Grid container justify="center" spacing={3} className={styles.termsAndConditions}>
			<Grid item xs={10}>
				<article>
					<h1>{terms.title}</h1>
					<div dangerouslySetInnerHTML={{__html: terms.body}} />

					<p className={styles.termsLogo}>
						<img src="/fenomenal-funds-logo-alt.svg" alt=""/>
						<br/><br/>
						<small>Last updated: {moment(terms.publish).calendar()}</small>
					</p>
				</article>
			</Grid>
		</Grid>
	</Layout>
}

export async function getStaticProps(preview={}) {
	const data = await fetchTermsAndConditions(preview);

	return {
		props: {
			...data
		}
	}
}

export default TermAndConditions;