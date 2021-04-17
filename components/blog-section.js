import _ from "lodash";
import Link from 'next/link';
import propTypes from 'prop-types';
import styles from './../styles/components/blog-section.module.scss';
import SmallArticleBox from "./small-article-box";
import Grid from "@material-ui/core/Grid";

const BlogSection = ({title, subtitle, articles}) => {
	return <section className={styles.blog}>
		<Grid container justify="center">
			<Grid item xs={8}>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.subtitle}>{subtitle}</p>

				{articles &&
				<div className={styles.articles}>
					{_.map(articles, (article, key) => {
						return <SmallArticleBox
								key={key}
								title={article.title}
								subtitle={article.subtitle}
								image={article.thumbnail}
								link={`/blog/${article.slug}`}
						/>
					})}
				</div>}

				<div>
					<Link href="/blog">
						<a className="btn red">View all</a>
					</Link>
				</div>
			</Grid>
		</Grid>
	</section>
}

BlogSection.propTypes = {
	title: propTypes.string.isRequired,
	subtitle: propTypes.string.isRequired,
	articles: propTypes.array.isRequired
}

BlogSection.defaultProps = {
	title: "Please add Title",
	subtitle: "Please add subtitle",
	articles: [
		{
			id: 0,
			title: "Please add blog entries",
			subtitle: "Please add blog entries to display here",
			image: null,
			link: '/'
		},
		{
			id: 0,
			title: "Please add blog entries",
			subtitle: "Please add blog entries to display here",
			image: null,
			link: '/'
		}
	]
}

export default BlogSection;