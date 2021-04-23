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

export async function fetchInsightsPage(preview) {
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

export async function fetchPrivacyPolicy(preview) {
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

export async function fetchTermsAndConditions(preview) {
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

export async function fetchHomeContent(preview) {
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
	    stories(limit:5,sort:"published_at:DESC"){
	      title
	      subtitle
	      publish
	      cover{
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

export async function fetchAboutContent(preview) {
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
	        users{
	          username
	          fullname
	          position
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

export async function fetchBlogContent(preview) {
	const result = await fetchGraphQL(`
	query fetchBlogContent($start:Int=0,$limit:Int=11){
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
	  articles(start:$start,limit:$limit,sort:"publish:DESC"){
	    title
	    subtitle
	    slug
	    intro
	    image{
	      url
	      caption
	      alternativeText
	    }
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
		blog: result?.blog,
		articles: result?.articles
	}
}

export async function fetchApproachContent(preview) {
	const result = await fetchGraphQL(`
	query fetchApproachContent{
	  approach{
	    title
	    subtitle
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

export async function fetchArticleDetail(slug, tags = [], preview) {
	const result = await fetchGraphQL(`
	query fetchArticleDetail{
	  articles(where:{slug:"${slug}"}){
	    title
	    subtitle
	    intro
	    publish
	    body
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
	  related: articles(limit: 4,where:{tags:{slug_in: [${tags}], slug_ne: "${slug}"}}) {
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
		variables: {
			where: {
				...(preview ? {} : {status:true})
			}
		}
	});

	return {
		article: result?.articles[0],
		related: result?.related
	}
}

