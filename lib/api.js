import NotFound from "../components/not-found";

export function getStrapiURL(path = "") {
	return `${
			process.env.STRAPI_API_URL
	}${path}`;
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