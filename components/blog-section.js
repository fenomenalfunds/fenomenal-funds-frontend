import _ from "lodash";
import propTypes from 'prop-types';
import styles from './../styles/components/blog-section.module.scss';
import SmallArticleBox from "./small-article-box";

const BlogSection = ({title, subtitle, articles}) => {
	return <section className={styles.blog}>
		<h1 className={styles.title}>{title}</h1>
		<p className={styles.subtitle}>{subtitle}</p>

		{articles &&
		<div className={styles.articles}>
			{_.map(articles, (article) => {
				return <SmallArticleBox
						key={article.id}
						title={article.title}
						subtitle={article.subtitle}
						image={article.thumbnail}
						link={`/blog/${article.slug}`}
				/>
			})}
		</div>}
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