import moment from 'moment';
import Head from 'next/head';
import Layout from "../layout/website-layout";
import Grid from '@material-ui/core/Grid';
import styles from './../styles/blog.module.scss';
import LargeArticleBoxVertical from "../components/large-article-box-vertical";
import CoverArticleBox from "../components/cover-article-box";

const Blog = () => {
	return <Layout>
		<Head>
			<title>Blog</title>
		</Head>

		<Grid container justify="center" spacing={0} className={styles.blog}>
			<Grid item xs={10}>
				<section>
					<div className={styles.header}>
						<img className={styles.logo} src="/fenomenal-funds-logo-alt.svg" alt=""/>

						<h1>Blog</h1>
					</div>

					<div className={styles.articleGrid}>
						<LargeArticleBoxVertical
							title="Excepteur sint occaecat cupidatat non proident"
							image={{url: "/temp/doug-linstedt-jEEYZsaxbH4-unsplash.png", alternativeText: null}}
							author={{name:"Author Name"}}
							body={`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus metus, 
							ullamcorper sit amet ullamcorper et, tempor placerat ex. Lorem ipsum dolor sit amet, 
							consectetur adipiscing elit.</p>
							<p>Donec suscipit, ex sed finibus blandit, augue erat aliquet neque, et vehicula orci velit 
							quis velit. Pellentesque mattis ornare metus maximus eleifend. Pellentesque et mi eget 
							velit varius sollicitudin. Vivamus egestas nisi viverra justo auctor aliquam. Maecenas 
							sodales tellus at lorem ornare sodales. In ut dolor varius, consequat erat quis, gravida 
							orci. Mauris vehicula turpis at justo tincidunt laoreet. Pellentesque malesuada diam quis 
							ante tristique, vitae feugiat lacus tempus. Sed facilisis orci et ligula pharetra ornare. 
							Quisque tellus odio, lobortis lacinia sodales vitae, elementum vel nibh. Lorem ipsum dolor 
							sit amet, consectetur adipiscing elit. Duis tristique eu justo at feugiat.</p>
							<p>Nulla blandit est et velit commodo congue. Nullam ipsum est, condimentum porta lectus 
							sit amet, fringilla ultricies turpis. Interdum et malesuada fames ac ante ipsum primis in 
							faucibus. In congue sed nulla nec volutpat. Maecenas dolor ante, facilisis in placerat 
							vitae, maximus ut libero. Donec a tristique arcu, id porttitor magna. Sed a elit hendrerit, 
							pretium sem et, blandit urna. Duis imperdiet finibus odio, ut fringilla libero auctor eu. 
							Sed nec mauris vitae orci malesuada iaculis sed sed tortor. Praesent elementum enim in 
							metus auctor auctor.</p>
							<p>Vestibulum vitae quam id nibh accumsan porttitor in sit amet arcu. Quisque consectetur 
							enim odio. Curabitur non porttitor orci. Fusce eleifend vehicula finibus. Etiam vulputate 
							ipsum vel tristique fermentum. Mauris id maximus erat. Fusce blandit dui mi, consectetur 
							aliquet risus elementum et. Cras tempus ultricies ligula, nec faucibus orci rhoncus ut. 
							Nulla facilisi. Phasellus posuere dolor quis arcu ullamcorper scelerisque. Quisque nec 
							consequat orci. Sed rhoncus felis a tellus aliquet varius.</p>`}
							publish={moment().calendar()}
							link={`/blog/article-sample`}
						/>

						<CoverArticleBox
							title="Excepteur sint occaecat cupidatat non proident"
							subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
							image={{url: "/temp/damien-santos-87VrEGWbsqA-unsplash.png", alternativeText: null}}
							author={{name:"Author Name"}}
							publish={moment().calendar()}
							link={`/blog/sample-article`}
						/>

						<CoverArticleBox
							title="Excepteur sint occaecat cupidatat non proident"
							subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
							image={{url: "/temp/evgeny-nelmin-d3C_idSlkh0-unsplash.png", alternativeText: null}}
							author={{name:"Author Name"}}
							publish={moment().calendar()}
							link={`/blog/sample-article`}
						/>

						<CoverArticleBox
							title="Excepteur sint occaecat cupidatat non proident"
							subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
							image={{url: "/temp/gemma-chua-tran-jNVgCpQ0LhQ-unsplash.png", alternativeText: null}}
							author={{name:"Author Name"}}
							publish={moment().calendar()}
							link={`/blog/sample-article`}
						/>
						<CoverArticleBox
							title="Excepteur sint occaecat cupidatat non proident"
							subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
							image={{url: "/temp/jeffrey-f-lin-rncKxDYyXqs-unsplash.png", alternativeText: null}}
							author={{name:"Author Name"}}
							publish={moment().calendar()}
							link={`/blog/sample-article`}
						/>
						<CoverArticleBox
							title="Excepteur sint occaecat cupidatat non proident"
							subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
							image={{url: "/temp/joost-crop-lqBUJWTC7Dc-unsplash.png", alternativeText: null}}
							author={{name:"Author Name"}}
							publish={moment().calendar()}
							link={`/blog/sample-article`}
						/>
						<CoverArticleBox
							title="Excepteur sint occaecat cupidatat non proident"
							subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
							image={{url: "/temp/kabita-darlami-woRcoDYcB3o-unsplash.png", alternativeText: null}}
							author={{name:"Author Name"}}
							publish={moment().calendar()}
							link={`/blog/sample-article`}
						/>
						<CoverArticleBox
							title="Excepteur sint occaecat cupidatat non proident"
							subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
							image={{url: "/temp/damien-santos-87VrEGWbsqA-unsplash.png", alternativeText: null}}
							author={{name:"Author Name"}}
							publish={moment().calendar()}
							link={`/blog/sample-article`}
						/>

					</div>
				</section>
			</Grid>
		</Grid>
	</Layout>
}

export default Blog;