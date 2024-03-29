import Head from "next/head";
import { useContext } from "react";
import { GlobalContext } from "../pages/_app";
import { getStrapiMedia } from "../lib/media";

const Seo = ({ seo }) => {
	const { defaultSeo, site_name } = useContext(GlobalContext);
	const seoWithDefaults = {
		...defaultSeo,
		...seo,
	};
	const fullSeo = {
		...seoWithDefaults,
		metaTitle: `${seoWithDefaults.meta_title}`,
		shareImage: getStrapiMedia(seoWithDefaults.meta_image),

	};

	return (
			<Head>
				{fullSeo.metaTitle && (
						<>
							<title>{fullSeo.metaTitle} | {site_name}</title>
							<meta property="og:title" content={fullSeo.metaTitle} />
							<meta name="twitter:title" content={fullSeo.metaTitle} />
						</>
				)}
				{fullSeo.meta_description && (
						<>
							<meta name="description" content={fullSeo.meta_description} />
							<meta property="og:description" content={fullSeo.meta_description} />
							<meta name="twitter:description" content={fullSeo.meta_description} />
						</>
				)}
				{fullSeo.shareImage && (
						<>
							<meta property="og:image" content={fullSeo.shareImage} />
							<meta name="twitter:image" content={fullSeo.shareImage} />
							<meta name="image" content={fullSeo.shareImage} />
						</>
				)}
				{fullSeo.article && <meta property="og:type" content={fullSeo.meta_type} />}
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
	);
};

export default Seo;