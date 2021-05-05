import {default as Blog, getStaticProps as pagedStaticProps} from "./blog/page/[page]";
export default Blog;

export async function getStaticProps({params, preview = {}}) {
	return pagedStaticProps({params, preview});
}

/*export async function getStaticPaths() {
	//const paths = await getCategoryPaths(FIRST_PAGE_SIZE, OTHER_PAGE_SIZE);
	return {
		paths: [], //paths.filter(x => x.params?.page === 1),
		fallback: true,
	};
}*/