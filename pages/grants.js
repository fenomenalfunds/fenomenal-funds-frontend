import styles from './../styles/grants.module.scss';
import _ from 'lodash';
import Grid from "@material-ui/core/Grid";
import Layout from "../layout/website-layout";
import moment from "moment";
import CoverArticleBox from "../components/cover-article-box";
import SquareArticleBox from "../components/square-article-box";
import {fetchAPI} from "../lib/api";
import NotFound from "../components/not-found";
import Seo from "../components/seo";

const GrantDetail = ({grants}) => {
	if(!grants) return <NotFound />

	return <Layout>
		<Seo seo={grants.seo} />

		<Grid container justify="center" spacing={0} className={styles.grantsDetail}>
			<Grid item xs={10}>
				<article className={styles.article}>

					<div className={styles.header}>
						<h1 className={styles.title}>Grants</h1>
						<p className={styles.subtitle}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis non sapien non
							accumsan. Donec euismod dictum iaculis. Proin nec leo vel dui convallis lobortis. Vestibulum
							mattis in urna sed ultricies. Etiam dictum lectus sit amet metus tincidunt tincidunt.
							Vivamus ut sem et massa aliquet dignissim. Pellentesque habitant morbi tristique senectus et
							netus et malesuada fames ac turpis egestas. Curabitur non mattis nibh. Maecenas euismod mi
							vel est gravida, in sagittis elit vehicula. Sed gravida justo ac semper lacinia. Sed rutrum
							mauris ligula, pretium condimentum ante aliquet tempor. Proin vel leo erat. Integer vel
							neque ac velit rhoncus blandit id sit amet metus. Nam sodales purus non quam pharetra
							tempor.
						</p>
					</div>

					<div className={styles.body}>
						<div className={styles.description}>
							<h2 className={styles.title}>Grants</h2>
							<p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis non sapien
								non accumsan. Donec euismod dictum iaculis. Proin nec leo vel dui convallis lobortis.
								Vestibulum mattis in urna sed ultricies. Etiam dictum lectus sit amet metus tincidunt
								tincidunt. Vivamus ut sem et massa aliquet dignissim. Pellentesque habitant morbi
								tristique senectus et netus et malesuada fames ac turpis egestas.</p>
						</div>
						<div className={styles.mosaic}>
							<SquareArticleBox
								title="Excepteur sint occaecat cupidatat non proident"
								subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
								image={{url: "/temp/evgeny-nelmin-d3C_idSlkh0-unsplash.png", alternativeText: null}}
								author={{name:"Author Name"}}
								publish={moment().calendar()}
								link={`/blog/sample-article`}
							/>

							<SquareArticleBox
								title="Excepteur sint occaecat cupidatat non proident"
								subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
								image={{url: "/temp/gemma-chua-tran-jNVgCpQ0LhQ-unsplash.png", alternativeText: null}}
								author={{name:"Author Name"}}
								publish={moment().calendar()}
								link={`/blog/sample-article`}
							/>
							<SquareArticleBox
								title="Excepteur sint occaecat cupidatat non proident"
								subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
								image={{url: "/temp/jeffrey-f-lin-rncKxDYyXqs-unsplash.png", alternativeText: null}}
								author={{name:"Author Name"}}
								publish={moment().calendar()}
								link={`/blog/sample-article`}
							/>
							<SquareArticleBox
								title="Excepteur sint occaecat cupidatat non proident"
								subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
								image={{url: "/temp/joost-crop-lqBUJWTC7Dc-unsplash.png", alternativeText: null}}
								author={{name:"Author Name"}}
								publish={moment().calendar()}
								link={`/blog/sample-article`}
							/>
							<SquareArticleBox
								title="Excepteur sint occaecat cupidatat non proident"
								subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
								image={{url: "/temp/kabita-darlami-woRcoDYcB3o-unsplash.png", alternativeText: null}}
								author={{name:"Author Name"}}
								publish={moment().calendar()}
								link={`/blog/sample-article`}
							/>
							<SquareArticleBox
								title="Excepteur sint occaecat cupidatat non proident"
								subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
								image={{url: "/temp/ketan-rajput-n-g7dgwNZg4-unsplash.png", alternativeText: null}}
								author={{name:"Author Name"}}
								publish={moment().calendar()}
								link={`/blog/sample-article`}
							/>
							<SquareArticleBox
								title="Excepteur sint occaecat cupidatat non proident"
								subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
								image={{url: "/temp/evgeny-nelmin-d3C_idSlkh0-unsplash.png", alternativeText: null}}
								author={{name:"Author Name"}}
								publish={moment().calendar()}
								link={`/blog/sample-article`}
							/>

							<SquareArticleBox
								title="Excepteur sint occaecat cupidatat non proident"
								subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
								image={{url: "/temp/gemma-chua-tran-jNVgCpQ0LhQ-unsplash.png", alternativeText: null}}
								author={{name:"Author Name"}}
								publish={moment().calendar()}
								link={`/blog/sample-article`}
							/>
							<SquareArticleBox
								title="Excepteur sint occaecat cupidatat non proident"
								subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
								image={{url: "/temp/jeffrey-f-lin-rncKxDYyXqs-unsplash.png", alternativeText: null}}
								author={{name:"Author Name"}}
								publish={moment().calendar()}
								link={`/blog/sample-article`}
							/>
						</div>
					</div>
				</article>

				{grants.articles &&
				<aside className={styles.blog}>
					<div className={styles.titleBox}>
						<h2 className={styles.title}>Blog</h2>
						<p className={styles.subtitle}>Find out about the work, news and updates from organizations</p>
					</div>

					<div className={styles.articles}>
						{_.map(_.slice(grants.articles, 0, 8), (article) => {
							return <CoverArticleBox
									key={article.id}
									title={article.title}
									subtitle={article.subtitle}
									image={article.thumbnail}
									publish={article.publish ? moment(article.publish).calendar() : null}
									link={`/blog/${article.slug}`}
							/>
						})}
					</div>
				</aside>}
			</Grid>
		</Grid>
	</Layout>
}

export async function getServerSideProps() {
	const [grants] = await Promise.all([
			fetchAPI('/grants')
	]);

	return {
		props: {
			grants
		}
	}
}

export default GrantDetail;