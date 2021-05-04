import styles from './../styles/components/contact-page.module.scss';
import _ from 'lodash';
import Layout from "../layout/website-layout";
import Seo from "../components/seo";
import {fetchContactContent} from "../lib/api";
import {Grid} from "@material-ui/core";

const CareersPage = ({title, body, email, seo}) => {
	return <Layout>
		<Seo seo={seo}/>

		<Grid container justify="center" spacing={0} className={styles.contact}>
			<Grid item lg={10} xs={11}>
				<article className={styles.body}>
					<header className={styles.header}>
						<h1>{title}</h1>
						<div className={styles.subtitle} dangerouslySetInnerHTML={{__html: _.replace(body, '{%EMAIL%}', email)}} />
					</header>
					<section>
						<div className={styles.form}>
							<Grid container spacing={3}>
								<Grid item xs={12} lg={6}>
									<label htmlFor="name">Name</label>
									<input type="text" id="name" placeholder="First name"/>
								</Grid>
								<Grid item xs={12} lg={6}>
									<label htmlFor="last_name">Last name</label>
									<input type="text" id="last_name" placeholder="Last name"/>
								</Grid>
								<Grid item xs={12}>
									<label htmlFor="email">Email</label>
									<input type="email" placeholder="Email"/>
								</Grid>
								<Grid item xs={12}>
									<label htmlFor="message">Message</label>
									<textarea id="message" rows="5" placeholder="Type your message here"/>
								</Grid>
								<Grid item xs={12} style={{textAlign: "right"}}>
									<button type="submit" className="btn red">Send</button>
								</Grid>
							</Grid>
						</div>
					</section>
				</article>
			</Grid>
		</Grid>
	</Layout>
}

export async function getStaticProps() {
	const data = await fetchContactContent();

	return {
		props: {
			...data
		}
	}
}

export default CareersPage;