import _ from 'lodash';
import styles from './../styles/components/article-grid.module.scss';
import LargeArticleBoxVertical from "./large-article-box-vertical";
import moment from "moment";
import CoverArticleBox from "./cover-article-box";

const ArticleGrid = ({articles}) => {
	return <div className={styles.articleGrid}>
		{_.map(articles, (article, k) => {
			return k === 0 ?
					<LargeArticleBoxVertical
							key={article.id}
							title={article.title}
							image={article.image}
							author={article.author}
							intro={article.intro}
							publish={moment(article.publish).locale('en').format('LL')}
							link={`/blog/${article.slug}`}
					/> :
					<CoverArticleBox
							key={article.id}
							title={article.title}
							subtitle={article.subtitle}
							image={article.thumbnail}
							author={article.author}
							publish={moment(article.publish).locale('en').format('ll')}
							link={`/blog/${article.slug}`}
					/>
		})}
	</div>
}

export default ArticleGrid;