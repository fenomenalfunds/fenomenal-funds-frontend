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
import HighlightsSection from "../components/highlights-section";
import ContactSection from "../components/contact-section";
import {useRouter} from "next/router";
import Loading from "../components/loading";

const Home = ({home, blog, about, editorial, highlights, contact}) => {
	const router = useRouter();
	if (router.isFallback) return <Loading/>;
	if (!home) return <NotFound/>

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
					<LargeArticleBox
							title={editorial.title}
							content={editorial.body}
							overlay={null}
							image={editorial.thumbnail}
							publish={editorial.publish}
					/>
				</Grid>
			</Grid>

			{highlights &&
			<HighlightsSection
					title={highlights.title}
					subtitle={highlights.subtitle}
					stories={highlights.stories}
			/>}

			{about &&
			<AboutSection
					title={about.title}
					subtitle={about.subtitle}
					teams={(about.staff && about.staff.teams) ? about.staff.teams : null}
			/>}

			{/* HIGHLIGHTS SECTION */}
			<Grid container justify="center" className={styles.insights}>
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

			{/* CONTACT SECTION */}
			<ContactSection
					title={contact.title}
					subtitle={contact.body}
					email={contact.sent_to}
			/>

		</div>
	</Layout>
}

export async function getServerSideProps() {
	const [home, about, blog, editorial, highlights, contact] = await Promise.all([
		fetchAPI('/home'),
		fetchAPI('/about-us'),
		fetchAPI('/blog'),
		fetchAPI('/editorial'),
		fetchAPI('/highlights'),
		fetchAPI('/contact')
	]);

	return {
		props: {
			home,
			blog,
			about,
			editorial,
			highlights,
			contact
		}
	}
}

export default Home;
