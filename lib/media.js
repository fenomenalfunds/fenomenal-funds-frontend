import {getStrapiURL} from "./api";

export function getStrapiMedia(media) {
	if(media && media.url) {
		return media.url.startsWith("/")
				? getStrapiURL(media.url)
				: media.url;
	} else {
		return null;
	}
}

export function getLocalUrl(media) {
	if(media) {
		return media.startsWith("/")
				? getStrapiURL(media)
				: media;
	} else {
		return null;
	}
}