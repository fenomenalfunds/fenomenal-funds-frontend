import _ from 'lodash';
import moment from "moment/moment";

export function getStrapiURL(path = "") {
	return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${path}`;
}

export function localURL(path = "") {
	return `${process.env.NEXT_PUBLIC_BASE_URL}${path}`;
}

export async function fetchAPI(path) {
	const requestUrl = getStrapiURL(path);
	const response = await fetch(requestUrl);
	if(response.status >= 200 && response.status <= 300) {
		return await response.json();
	} else {
		return null;
	}
}

export async function postAPI(endpoint, variables) {
	const parseJSON = resp => (resp.json ? resp.json() : resp);

	const checkStatus = resp => {
		if (resp.status >= 200 && resp.status < 300) {
			return resp.json();

		}
		return parseJSON(resp).then(resp => {
			throw resp;
		});
	};

	return await fetch(getStrapiURL(endpoint), {
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(variables),
		redirect: "follow"
	})
			.then(checkStatus)
			.catch(error => {
				console.error(error);
				return error;
			});
}

export async function fetchSecureAPI(token, path) {
	const requestUrl = getStrapiURL(path);
	const response = await fetch(requestUrl, {
		method: "GET",
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		},
		redirect: "follow"
	});
	if(response.status >= 200 && response.status <= 300) {
		return await response.json();
	} else {
		return null;
	}
}

/**
 * @param {string} query
 * @param {object} variables
 */
export async function fetchGraphQL(query, variables = {}) {
	const requestUrl = getStrapiURL();
	const response = await fetch(`${requestUrl}/graphql`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({query,variables})
	});

	const json = await response.json();

	if(json.errors){
		console.error('Applicaton errors: ', json.errors);
		throw new Error('Failed to fetch GraphQL');
	}

	return json.data;
}

/**
 * @param {string} token
 * @param {string} query
 * @param {object} variables
 */
export async function fetchSecureGraphQL(token, query, variables = {}) {
	const requestUrl = getStrapiURL();
	const response = await fetch(`${requestUrl}/graphql`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		},
		body: JSON.stringify({query,variables})
	});

	const json = await response.json();

	if(json.errors){
		console.error('Applicaton errors: ', json.errors);
		throw new Error('Failed to fetch GraphQL');
	}

	return json.data;
}

export async function fetchInsightsPage(preview = {}) {
	const result = await fetchGraphQL(`
	query fetchInsights {
	  insight {
	    title
	    subtitle
	    body
	    image {
	      url
	      caption
	      alternativeText
	    }
	    reports(sort:"published_at:DESC"){
	      id
	      title
	      slug
	      subtitle
	      thumbnail {
	        url
	        caption
	        alternativeText
	      }
	    }
	    documents(sort:"published_at:DESC"){
	      id
	      title
	      description
	      slug
	      body
	      document_type{
	        title
	        slug
	      }
	      icon{
	        url
	        caption
	        alternativeText
	      }
	      files{
	        url
	        caption
	        alternativeText
	        ext
	      }
	    }
	    seo{
	      meta_type
	      meta_title
	      meta_image{
	        url
	        caption
	        alternativeText
	      }
	      meta_description
	    }
	  }
	}
	`,{
		variables: {
			where: {
				...(preview ? {} : {status:true})
			}
		}
	});

	return {
		content: result?.insight
	}
}

export async function fetchPrivacyPolicy(preview = {}) {
	const result = await fetchGraphQL(`
	query fetchPrivacyPolicy{
	  privacyPolicy{
	    title
	    body
	    last_update
	    seo{
	      meta_type
	      meta_title
	      meta_description
	      meta_image{
	        url
	        caption
	        alternativeText
	      }
	    }
	  }
	}`, {
		variables: {
			where: {
				...(preview ? {} : {status:true})
			}
		}
	});

	return {
		content: result?.privacyPolicy
	}
}

export async function fetchTermsAndConditions(preview = {}) {
	const result = await fetchGraphQL(`
	query fetchTermsAndConditions{
	  termsAndCondition{
	    title
	    body
	    last_update
	    seo{
	      meta_type
	      meta_title 
	      meta_description
	      meta_image{
	        url
	        caption
	        alternativeText
	      }
	    }
	  }
	}`, {
		variables: {
			where: {
				...(preview ? {} : {status:true})
			}
		}
	});

	return {
		terms: result?.termsAndCondition
	}
}

export async function fetchHomeContent(preview = {}) {
	const result = await fetchGraphQL(`
	query fetchHomeContent{
	  home {
	    header_text
	    header_image{
	      url
	      caption
	      alternativeText
	    }
	    seo{
	      meta_type
	      meta_title
	      meta_description
	      meta_image{
	        url
	        caption
	        alternativeText
	      }
	    }
	  }
	  editorial{
	    title
	    subtitle
	    publish
	    thumbnail{
	      url
	      caption
	      alternativeText
	    }
	  }
	  highlight{
	    title
	    subtitle
	    stories(limit:10,sort:"published_at:DESC"){
	      title
	      subtitle
	      text
	      publish
	      cover{
	        url
	        alternativeText
	        caption
	      }
	      image{
	        url 
	        alternativeText
	        caption
	      }
	    }
	  }
	  aboutUs{
	    title
	    subtitle
	    image{
	      url
	      caption
	      alternativeText
	    }
	  }
	  insight{
	    title
	    subtitle
	    reports(limit:2,sort:"published_at:DESC"){
	      title
	      slug
	      subtitle
	      image{
	        url
	        caption
	        alternativeText
	      }
	    }
	  }
	  blog{
	    title
	    subtitle
	    articles(limit:6,sort:"publish:DESC"){
	      title
	      slug
	      subtitle
	      thumbnail{
	        url
	        caption
	        alternativeText
	      }
	    }
	  }
	  contact{
	    title
	    sent_to
	    body
	  }
	}`, {
		variables: {
			where: {
				...(preview ? {} : {status:true})
			}
		}
	});

	return {
		home: result?.home,
		editorial: result?.editorial,
		highlight: result?.highlight,
		about: result?.aboutUs,
		insight: result?.insight,
		blog: result?.blog,
		contact: result?.contact
	}
}

export async function fetchAboutContent(preview = {}) {
	const result = await fetchGraphQL(`
	query fetchAboutContent{
	  aboutUs{
	    title
	    intro
	    image{
	      url
	      caption
	      alternativeText
	    }
	    seo{
	      meta_type
	      meta_title
	      meta_description
	      meta_image{
	        url
	        caption
	        alternativeText
	      }
	    }
	    mission_statement{
	      title
	      mission
	      image{
	        url
	        caption
	        alternativeText
	      }
	    }
	    vision_statement{
	      title
	      mission
	      image{
	        url
	        caption
	        alternativeText
	      }
	    }
	    staff{
	      title
	      subtitle
	      teams{
	        title
	        team_members(sort:"job",where:{visible:true}){
	          fullname
	          slug
	          job
	          about
	          photo{
	            url
	            caption
	            alternativeText
	          }
	        }
	      }
	    }
	  }
	  editorial{
	    title
	    body
	    image{
	      url
	      caption
	      alternativeText
	    }
	  }
	}`, {
		variables: {
			where: {
				...(preview ? {} : {status:true})
			}
		}
	});

	return {
		about: result?.aboutUs,
		editorial: result?.editorial
	}
}

export async function fetchBlogContent(start, items, preview = {}) {
	const result = await fetchGraphQL(`
	query fetchBlogContent{
	  blog{
	    title
	    subtitle
	    body
	    image{
	      url
	      caption
	      alternativeText
	    }
	    seo{
	      meta_type
	      meta_title
	      meta_description
	      meta_image{
	        url
	        caption
	        alternativeText
	      }
	    }
	  }
	  articles: articlesConnection(start:${start},limit:${items},sort:"publish:DESC"){
	    aggregate{
	      count
	      totalCount
	    }
	    values{
	      title
	      slug
	      subtitle
	      publish
	      thumbnail{
	        url
	        caption 
	        alternativeText
	      }
	      image{
	        url
	        caption
	        alternativeText
	      }
	    }
	  }
	}`, {
		variables: {
			where: {
				...(preview ? {} : {status:true})
			}
		}
	});

	return {
		blog: result?.blog,
		articles: result?.articles.values,
		total: result?.articles.aggregate.count
	}
}

export async function fetchContactContent() {
	const result = await fetchGraphQL(`
	query fetchContactContent{
	  contact{
	    title
	    body
	    email: sent_to,
	    seo{
	      meta_type
	      meta_title
	      meta_description
	      meta_image{
	        url
	        caption
	        alternativeText
	      }
	    }
	  }
	}`);

	return result?.contact || {}
}

export async function fetchApproachContent(preview = {}) {
	const result = await fetchGraphQL(`
	query fetchApproachContent{
	  approach{
	    title
	    subtitle
	    tagline
	    cover{
	      url
	      caption
	      alternativeText
	    }
	    video{
	      url
	      mime
	      alternativeText
	      caption
	      previewUrl
	      hash
	    }
	    seo{
	      meta_type
	      meta_title
	      meta_description
	      meta_image{
	        url
	        caption
	        alternativeText
	      }
	    }
	    section{
	      title
	      subtitle
	      body
	      long_style
	      image{
	        url
	        caption
	        alternativeText
	      }
	    }
	  }
	}`, {
		variables: {
			where: {
				...(preview ? {} : {status:true})
			}
		}
	});

	return {
		approach: result?.approach
	}
}

export async function fetchGrantsContent(preview = {}) {
	const result = await fetchGraphQL(`
	query fetchGrantsContent{
	  grant{
	    title
	    body
	    text{
	      __typename
	      ... on ComponentContentImageTextBlock{
	        title
	        body 
	        long_style
	        subtitle
	        image{
	          url
	          caption
	          alternativeText
	        }
	      }
	    }
	    grant_articles(sort:"date:DESC",limit:9){
	      title
	      slug
	      subtitle
	      date
	      thumbnail{
	        url
	        caption
	        alternativeText
	      }
	    }
	    seo{
	      meta_type
	      meta_title
	      meta_description
	      meta_image{
	        url
	        caption
	        alternativeText
	      }
	    }
	  }
	  blog{
	    articles(sort:"publish:DESC", limit: 4,where:{tags:{slug_in:"grants"}}){
	      title
	      slug
	      subtitle
	      publish
	      author{
	        fullname
	        username
	        photo{
	          url
	          caption
	          alternativeText
	        }
	      }
	      thumbnail{
	        url
	        caption
	        alternativeText
	      }
	    }
	  }
	}`, {
		variables: {
			where: {
				...(preview ? {} : {status:true})
			}
		}
	});

	return {
		grants: result?.grant,
		blog: result?.blog
	}
}

export async function fetchResourcesContent(token, start = 0, preview = {}) {
	const result = await fetchSecureGraphQL(token, `
	query fetchResourcesContent{
	  resource{
	    title
	    subtitle
	    about
	    sections{
	      title
	      subtitle
	      long_style
	      image{
	        url
	        caption
	        alternativeText
	      }
	    }
	    seo{
	      meta_type
	      meta_title
	      meta_description
	      meta_image{
	        url
	        alternativeText
	        caption
	      }
	    }
	  }
	  resources: resourceArticles(start:${start}, limit: 8,sort:"publish:DESC", where:{publish_lt:"${moment().format()}"}){
	    title
	    slug
	    subtitle
	    thumbnail{
	      url
	      caption
	      alternativeText
	    }
	  }
	}`, {
		variables: {
			where: {
				...(preview ? {} : {status:true})
			}
		}
	});

	return {
		content: result?.resource,
		resources: result?.resources
	}
}

export async function fetchResourceDetail(token, slug, preview = {}) {
	const result = await fetchSecureGraphQL(token, `
	query fetchResourceDetail {
	  document: resourceArticles(where:{slug:"${slug}"}) {
	    title
	    subtitle
	    publish
	    image{
	      url
	      caption
	      alternativeText
	    }
	    body 
	    files{
	      caption
	      url
	      ext
	      alternativeText
	    }
	    seo{
	      meta_type
	      meta_title
	      meta_description
	      meta_image{
	        url
	        caption
	        alternativeText
	      }
	    }
	  }
	  related: resourceArticles(where:{slug_nin:"${slug}",publish_gte:"${moment()}"}){
	    title
	    subtitle
	    slug
	    thumbnail{
	      url
	      caption
	      alternativeText
	    }
	  }
	}`, {
		where: {
			...(preview ? {} : {status: true})
		}
	});

	return {
		document: result?.document[0],
		related: result?.related
	}
}

/**
 * @param {int} start
 * @param {object} preview
 * @returns {Promise<{career: *, positions: *}>}
 */
export async function fetchCareersContent(start = 0, preview = {}) {
	const result = await fetchGraphQL(`
	query fetchCareersContent{
	  career{
	    title
	    body 
	    image{
	      url
	      caption
	      alternativeText
	    }
	    seo{
	      meta_type
	      meta_title 
	      meta_description
	      meta_image{
	        url
	        caption
	        alternativeText
	      }
	    }
	  }
	  positions(start:${_.toInteger(start)},limit:4,sort:"publish:DESC",where:{deadline_gt:"${_.now()}"}){
	    title
	    slug
	    short_description
	    description
	    publish
	    deadline
	    job_category{
	      title
	      slug
	    }
	    publisher @skip (if: false){
	      fullname
	      username
	      position
	      email
	      photo{
	        url
	        caption
	        alternativeText
	      }
	    }
	  }
	}`, {
		variables: {
			where: {
				...(preview ? {} : {status:true})
			}
		}
	});

	return {
		career: result?.career,
		positions: result?.positions
	}
}

export async function fetchArticleDetail(slug, tags = [], preview = {}) {

	const result = await fetchGraphQL(`
	query fetchArticleDetail{
	  articles(where:{slug:"${slug}"}){
	    title
	    subtitle
	    intro
	    publish
	    body
	    category{
	      name
	      slug
	    }
	    tags{
	      slug
	      tag
	    }
	    author{
	      username
	      fullname
	      photo{
	        url
	        caption
	        alternativeText
	      }
	    }
	    image{
	      url
	      caption
	      alternativeText
	    }
	    seo{
	      meta_type
	      meta_title
	      meta_description
	      meta_image{
	        url
	        alternativeText
	        caption
	      }
	    }
	  }
	}`, {
		variables: {
			where: {
				...(preview ? {} : {status:true})
			}
		}
	});

	return {
		article: result?.articles[0] || {}
	}
}

export async function fetchGrantArticleDetail(slug, tags = [], preview = {}) {

	const result = await fetchGraphQL(`
	query fetchGrantArticleDetail{
	  article:grantArticles(where:{slug:"africa"}){
	    title
	    subtitle
	    body
	    image{
	      url
	      caption
	      alternativeText
	    }
	    amount
	    date
	    seo{
	      meta_type
	      meta_title
	      meta_description
	      meta_image{
	        url
	        caption
	        alternativeText
	      }
	    }
	  }
	  related: grantArticles(where:{slug_nin:"africa"}){
	    title
	    slug
	    subtitle
	    thumbnail{
	      url
	      caption
	      alternativeText
	    }
	  }
	}`, {
		variables: {
			where: {
				...(preview ? {} : {status:true})
			}
		}
	});

	return {
		article: result?.article[0] || {},
		related: result?.related
	}
}

export async function fetchReportDetail(slug, preview = {}) {

	const result = await fetchGraphQL(`
	query fetchReportDetail{
	  reports(where:{slug:"${slug}"}){
	    title
	    subtitle
	    body
	    documents{
	      alternativeText
	      url
	      caption
	      ext
	    }
	    image{
	      url
	      caption
	      alternativeText
	    }
	    seo{
	      meta_type
	      meta_title
	      meta_description
	      meta_image{
	        url
	        caption
	        alternativeText
	      }
	    }
	  }
	}`, {
		variables: {
			where: {
				...(preview ? {} : {status:true})
			}
		}
	});

	return {
		report: result?.reports[0] || {},
	}
}

export async function fetchRelatedArticles(slug, tags, category) {
	const result = await fetchGraphQL(
`query fetchRelatedArticles{
					related: articles(limit: 4, sort: "publish:DESC", where:{_or: [{tags:{slug_in:[${tags ? tags : ''}]}}, {category:{slug_in:["${category ? category : ''}"]}}], slug_ne: "${slug}"}) {
				    title
				    subtitle
				    slug
				    publish
				    thumbnail{
			      url
			      caption
			      alternativeText
			    }
			  }
			}`);

	return {
		related: result?.related
	}
}

export async function fetchBlogRoutes() {
	const result = await fetchGraphQL(`
	query fetchBlogRoutes{
	  articles(publicationState:LIVE){
	    slug
	  }
	}`);

	if(result?.articles) {
		return _.map(result?.articles, (path, p) => {
			return {
				params: {
					slug: path.slug
				}
			}
		})
	} else {
		return []
	}
}

export async function fetchGrantsRoutes() {
	const result = await fetchGraphQL(`
	query fetchGrantsRoutes{
	  grantArticles(publicationState:LIVE){
	    slug
	  }
	}`);

	if(result?.grantArticles) {
		return _.map(result?.grantArticles, (path, p) => {
			return {
				params: {
					slug: path.slug
				}
			}
		})
	} else {
		return []
	}
}

export async function fetchReportRoutes() {
	const result = await fetchGraphQL(`
	query fetchReportRoutes{
	  reports(publicationState:LIVE){
	    slug
	  }
	}`);

	if(result?.reports) {
		return _.map(result?.reports, (path, p) => {
			return {
				params: {
					slug: path.slug
				}
			}
		})
	} else {
		return []
	}
}

export async function fetchProfileContent(token, id) {
	return await fetchSecureAPI(token, `/users/${id}`);
}
