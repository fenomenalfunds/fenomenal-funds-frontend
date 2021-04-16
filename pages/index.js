import styles from './../styles/components/Home.module.scss';
import _ from 'lodash';
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
import Link from "next/link";

const Home = ({home, blog, about, editorial, highlights, insights, contact}) => {
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
							content={editorial.subtitle}
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
					image={about.image}
			/>}

			{/* INSIGHTS SECTION */}
			{insights &&
			<Grid container justify="center" className={styles.insights}>
				<Grid item xs={10}>
					<section>
						<h1 className={styles.title}>{insights.title}</h1>
						<p className={styles.subtitle}>{insights.subtitle}</p>

						{insights.reports &&
						<div className={styles.articles}>
							{_.map(_.slice(insights.reports, 0, 2), (report) => {
								return <ArticleBox
										key={report.id}
										title={report.title}
										subtitle={report.subtitle}
										image={report.image}
										url={`/reports/${report.slug}`}
								/>
							})}
						</div>}

						<div>
							<Link href="/learnings">
								<a className="btn red">View all insights</a>
							</Link>
						</div>
					</section>
				</Grid>
			</Grid>}

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

export async function getStaticProps() {
	const [home, about, blog, editorial, highlights, insights, contact] = await Promise.all([
		fetchAPI('/home'),
		fetchAPI('/about-us'),
		fetchAPI('/blog'),
		fetchAPI('/editorial'),
		fetchAPI('/highlights'),
		fetchAPI('/insights'),
		fetchAPI('/contact')
	]);

	return {
		props: {
			home,
			blog,
			about,
			editorial,
			highlights,
			insights,
			contact
		},
		revalidate: true
	}
}

export default Home;
