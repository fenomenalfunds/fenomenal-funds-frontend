import _ from 'lodash';
import styles from './../styles/components/Home.module.scss';
import Grid from '@material-ui/core/Grid';
import LargeArticleBox from "../components/large-article-box";
import ArticleBox from "../components/article-box";
import Layout from "../layout/website-layout";
import Seo from "../components/seo";
import {fetchAPI} from "../lib/api";
import Image from "../components/image";
import NotFound from "../components/not-found";
import AboutSection from "../components/about-section";
import BlogSection from "../components/blog-section";

const Home = ({home, blog, about, editorial}) => {
	if (!home && !blog) return <NotFound/>

	return <Layout>
		<Seo seo={home.seo}/>
		<div className={styles.homepage}>

			<Grid container justify="center" className={styles.homepage}>
				<Grid item xs={12}>
					<div className={styles.header}>
						<p className={styles.caption}>{home.header_text}</p>

						<span className={styles.diagonal}>&nbsp;</span>

						{home.header_image &&
						<Image image={home.header_image} className={styles.logo}/>}
					</div>
				</Grid>

				<Grid item xs={10}>
					{console.log('====== EDITORIAL ======', editorial)}
					<LargeArticleBox
							title={editorial.title}
							content={editorial.body}
							overlay={null}
							image={editorial.thumbnail}
							publish={editorial.publish}
					/>
				</Grid>
			</Grid>

			{about &&
			<AboutSection
					title={about.title}
					subtitle={about.subtitle}
					teams={(about.staff && about.staff.teams) ? about.staff.teams : null}
			/>}

			{/* HIGHLIGHTS SECTION */}
			<Grid container justify="center" className={styles.highlights}>
				<Grid item xs={10}>
					<section>
						<h1 className={styles.title}>Insights from our work</h1>
						<p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Pellentesque iaculis non sapien non accumsan.
							Donec euismod dictum iaculis. Proin nec leo vel dui convallis lobortis.</p>

						<div className={styles.articles}>
							<ArticleBox
									title="Activity Report 2021"
									subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis non sapien non
                accumsan. Donec euismod dictum iaculis. Proin nec leo vel dui convallis lobortis."
									image={{url: "/temp/gemma-chua-tran-P_mprr4eka8-unsplash.png", alternativeText: null}}
									url={`/reports/activity-report-2021`}
							/>

							<ArticleBox
									title="Reports / documents"
									subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis non sapien non
                accumsan. Donec euismod dictum iaculis. Proin nec leo vel dui convallis lobortis."
									image={{url: "/temp/jaikishan-patel-2eMemvByB-8-unsplash.png", alternativeText: null}}
									url={`/reports/documents`}
							/>
						</div>
					</section>
				</Grid>
			</Grid>

			{/* BLOG SECTION */}
			{blog &&
			<BlogSection
					title={blog.title}
					subtitle={blog.subtitle}
					articles={blog.articles}
			/>}

			<Grid container justify="center" className={styles.contact}>
				<Grid item xs={10}>
					<section>
						<div className={styles.text}>
							<h1>Get in touch!</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis non sapien
								non accumsan. Donec euismod dictum iaculis. Proin nec leo vel dui convallis lobortis.
								Vestibulum mattis in urna sed ultricies. Etiam dictum lectus sit amet metus tincidunt
								tincidunt. Vivamus ut sem et massa aliquet dignissim. Pellentesque habitant morbi
								tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur non mattis
								nibh. Maecenas euismod mi vel est gravida, in sagittis elit vehicula. Sed gravida justo
								ac semper lacinia. Sed rutrum mauris ligula, pretium condimentum ante aliquet tempor.
							</p>
							<p>Or send us an email at <a href="mailto:hello@fenomenalfunds.org">hello@fenomenalfunds.org</a></p>
						</div>

						<div className={styles.form}>
							<Grid container spacing={3}>
								<Grid item xs={6}>
									<label htmlFor="name">Name</label>
									<input type="text" id="name" placeholder="First name"/>
								</Grid>
								<Grid item xs={6}>
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
									<button type="submit" className="btn">Send</button>
								</Grid>
							</Grid>
						</div>
					</section>
				</Grid>
			</Grid>

		</div>
	</Layout>
}

export async function getStaticProps() {
	const [home, about, blog, editorial] = await Promise.all([
		fetchAPI('/home'),
		fetchAPI('/about-us'),
		fetchAPI('/blog'),
		fetchAPI('/editorial')
	]);

	return {
		props: {
			home,
			blog,
			about,
			editorial
		},
		revalidate: 1
	}
}

export default Home;
