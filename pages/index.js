import styles from './../styles/components/Home.module.scss';
import Grid from '@material-ui/core/Grid';
import LargeArticleBox from "../components/large-article-box";
import Layout from "../layout/website-layout";
import Seo from "../components/seo";
import {fetchHomeContent} from "../lib/api";
import Image from "../components/image";
import NotFound from "../components/not-found";
import AboutSection from "../components/about-section";
import BlogSection from "../components/blog-section";
import HighlightsSection from "../components/highlights-section";
import ContactSection from "../components/contact-section";
import {useRouter} from "next/router";
import Loading from "../components/loading";
import InsightsSection from "../components/insights-section";

const Home = ({home, blog, about, editorial, highlight, insight, contact}) => {
	const router = useRouter();
	if (router.isFallback) return <Loading/>;
	if (!home) return <NotFound/>;

	return <Layout>
		<Seo seo={home.seo}/>
		<div className={styles.homepage}>

			<Grid container justify="center" spacing={0} className={styles.homepage}>
				<Grid item xs={10} lg={12}>
					<div className={styles.header}>
						<div className={styles.caption} dangerouslySetInnerHTML={{__html: home.header_text}}/>

						<span className={styles.diagonal}>&nbsp;</span>

						{home.header_image &&
						<Image image={home.header_image} className={styles.logo}/>}
					</div>
				</Grid>

				{editorial &&
				<Grid item xs={12} lg={10}>
					<LargeArticleBox
							title={editorial.title}
							content={editorial.subtitle}
							overlay={null}
							image={editorial.thumbnail}
							publish={editorial.publish}
							link={`/about-us#editorial-letter`}
					/>
				</Grid>}
			</Grid>

			{highlight &&
			<HighlightsSection
					title={highlight.title}
					subtitle={highlight.subtitle}
					stories={highlight.stories}
			/>}

			{about &&
			<AboutSection
					title={about.title}
					subtitle={about.subtitle}
					image={about.image}
			/>}

			{/* INSIGHTS SECTION */}
			{insight &&
			<InsightsSection
					title={insight.title}
					subtitle={insight.subtitle}
					reports={insight.reports}
			/>}

			{/* BLOG SECTION */}
			{blog &&
			<BlogSection
					title={blog.title}
					subtitle={blog.subtitle}
					articles={blog.articles}
			/>}

			{/* CONTACT SECTION */}
			{contact &&
			<ContactSection
					title={contact.title}
					subtitle={contact.body}
					email={contact.sent_to}
			/>}

		</div>
	</Layout>
}

export async function getStaticProps(preview = {}) {
	const data = await fetchHomeContent(preview);

	return {
		props: {
			...data
		},
		revalidate: true
	}
}

export default Home;
