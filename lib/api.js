export function getStrapiURL(path = "") {
	return `${process.env.STRAPI_API_URL}${path}`;
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
	    reports{
	      id
	      title
	      slug
	      subtitle
	      image{
	        url
	        caption
	        alternativeText
	      }
	    }
	    documents{
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