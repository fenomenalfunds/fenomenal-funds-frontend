import styles from './../../styles/blog-detail.module.scss';
import Head from 'next/head';
import Grid from "@material-ui/core/Grid";
import Layout from "../../layout/website-layout";
import moment from "moment";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobeAfrica} from "@fortawesome/free-solid-svg-icons";
import CoverArticleBox from "../../components/cover-article-box";

const BlogDetail = () => {
	return <Layout>
		<Head>
			<title>Sample Article</title>
		</Head>
		<Grid container justify="center" spacing={0} className={styles.blogDetail}>
			<Grid item xs={10}>
				<article className={styles.article}>
					<figure className={styles.image}>
						<img src="/temp/loren-joseph-GVeJ-TXWJ1g-unsplash.png" alt=""/>
					</figure>
					<div className={styles.header}>
						<div className={styles.title}>
							<h1>Excepteur sint occaecat cupidatat non proident</h1>
							<p className={styles.author}>Author Name</p>
							<p className={styles.date}>{moment().calendar()}</p>
							<p className={styles.category}>
								<FontAwesomeIcon icon={faGlobeAfrica}/>
								NGO Website
							</p>
							<p className={styles.tags}>
								<span>article</span>
								<span>blog</span>
								<span>news</span>
								<span>women</span>
							</p>
						</div>
						<div className={styles.intro}>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis non sapien
								non accumsan. Donec euismod dictum iaculis. Proin nec leo vel dui convallis lobortis.
								Vestibulum mattis in urna sed ultricies. Etiam dictum lectus sit amet metus tincidunt
								tincidunt. Vivamus ut sem et massa aliquet dignissim. Pellentesque habitant morbi
								tristique senectus et netus et malesuada fames ac turpis egestas.</p>

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis non sapien
								non accumsan. Donec euismod dictum iaculis. Proin nec leo vel dui convallis lobortis.
								Vestibulum mattis in urna sed ultricies. Etiam dictum lectus sit amet metus tincidunt
								tincidunt. Vivamus ut sem et massa aliquet dignissim. Pellentesque habitant morbi
								tristique senectus et netus et malesuada fames ac turpis egestas.</p>
						</div>
					</div>

					<div className={styles.body}>
						<img src="/temp/pavan-gupta-_HzlOHmboSk-unsplash.png" alt=""/>

						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis non sapien
							non accumsan. Donec euismod dictum iaculis. Proin nec leo vel dui convallis lobortis.
							Vestibulum mattis in urna sed ultricies. Etiam dictum lectus sit amet metus tincidunt
							tincidunt. Vivamus ut sem et massa aliquet dignissim. Pellentesque habitant morbi
							tristique senectus et netus et malesuada fames ac turpis egestas.</p>


						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus metus, ullamcorper sit
							amet ullamcorper et, tempor placerat ex. Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Donec suscipit, ex sed finibus blandit, augue erat aliquet neque, et vehicula orci
							velit quis velit. Pellentesque mattis ornare metus maximus eleifend. Pellentesque et mi eget
							velit varius sollicitudin. Vivamus egestas nisi viverra justo auctor aliquam. Maecenas
							sodales tellus at lorem ornare sodales. In ut dolor varius, consequat erat quis, gravida
							orci. Mauris vehicula turpis at justo tincidunt laoreet. Pellentesque malesuada diam quis
							ante tristique, vitae feugiat lacus tempus. Sed facilisis orci et ligula pharetra ornare.
							Quisque tellus odio, lobortis lacinia sodales vitae, elementum vel nibh. Lorem ipsum dolor
							sit amet, consectetur adipiscing elit. Duis tristique eu justo at feugiat.</p>
						<p>Nulla blandit est et velit commodo congue. Nullam ipsum est, condimentum porta lectus sit
							amet, fringilla ultricies turpis. Interdum et malesuada fames ac ante ipsum primis in
							faucibus. In congue sed nulla nec volutpat. Maecenas dolor ante, facilisis in placerat
							vitae, maximus ut libero. Donec a tristique arcu, id porttitor magna. Sed a elit hendrerit,
							pretium sem et, blandit urna. Duis imperdiet finibus odio, ut fringilla libero auctor eu.
							Sed nec mauris vitae orci malesuada iaculis sed sed tortor. Praesent elementum enim in metus
							auctor auctor.</p>
						<p>Vestibulum vitae quam id nibh accumsan porttitor in sit amet arcu. Quisque consectetur enim
							odio. Curabitur non porttitor orci. Fusce eleifend vehicula finibus. Etiam vulputate ipsum
							vel tristique fermentum. Mauris id maximus erat. Fusce blandit dui mi, consectetur aliquet
							risus elementum et. Cras tempus ultricies ligula, nec faucibus orci rhoncus ut. Nulla
							facilisi. Phasellus posuere dolor quis arcu ullamcorper scelerisque. Quisque nec consequat
							orci. Sed rhoncus felis a tellus aliquet varius.</p>
						<p>Proin id faucibus nulla. Nunc bibendum nec enim vitae cursus. Sed vel hendrerit arcu, eget
							vulputate tellus. Pellentesque a purus tellus. Ut semper, enim ut tempus volutpat, elit
							tortor imperdiet leo, at scelerisque orci risus non dui. Proin efficitur eros eu euismod
							bibendum. Nullam rutrum cursus massa at ultricies. Aenean aliquet, velit vel pretium
							molestie, odio mauris fermentum nulla, vel molestie massa risus nec magna. Suspendisse
							libero felis, lobortis sit amet blandit ultricies, gravida quis velit. Sed efficitur dapibus
							erat, at viverra metus. Nunc dignissim eget ante sed semper.</p>
						<p>Nullam pharetra auctor ante nec varius. Nam mattis imperdiet velit, eu dapibus mi hendrerit
							ac. Nam vel purus cursus, aliquam massa ac, posuere nulla. Fusce eget ligula id neque semper
							vehicula. Duis ultrices sem ac nunc commodo, quis vehicula est sagittis. Vivamus egestas
							mollis leo vel finibus. Cras placerat elit mauris, eu cursus nunc maximus id. Phasellus sit
							amet eleifend metus. Donec in congue sem, sed molestie libero.</p>
					</div>
				</article>

				<aside className={styles.related}>
					<h2 className={styles.title}>Related posts</h2>

					<div className={styles.articles}>
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
					</div>
				</aside>
			</Grid>
		</Grid>
	</Layout>
}

export default BlogDetail;