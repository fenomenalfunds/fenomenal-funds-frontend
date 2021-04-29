import {Image, Placeholder, Transformation} from 'cloudinary-react';
import {getLocalUrl} from "../lib/media";

const getCloudinaryDetails = (src) => {
	if(src.startsWith('https')) {
		const url = new URL(src);
		if (url.host === 'res.cloudinary.com') {
			try {
				const path = url.pathname.split('/');
				const vIndex = path.findIndex((el) => el.length && el.match(/^v\d*$/));
				const version = path[vIndex].substr(1);
				const id = path.slice(vIndex ? vIndex + 1 : 4).join('/');
				return { cloudName: path[1], version, id };
			} catch (e) {
				console.warn(`URL ${src} could not be parsed as a Cloudinary image`);
			}
		}
	}

	return null;
};

const ProfilePhoto = (props) => {
	const { image, children } = props;
	const attributes = {...props}
	delete attributes.image;
	delete attributes.src;
	if (!image || !image.url) return <></>;
	const imageUrl = getLocalUrl(image.url);
	const cloud = getCloudinaryDetails(imageUrl);
	return cloud ? (
			<Image
					responsive
					cloudName={cloud.cloudName}
					publicId={cloud.id}
					version={cloud.version}
					secure={true}
					dpr="auto"
					width="auto"
					crop="limit"
					responsiveUseBreakpoints="true"
					loading="lazy"
					alt={image.alternativeText || image.caption}
					title={image.alternativeText || image.caption}
					{...attributes}
			>
				<Placeholder type="vectorize" />
				<Transformation gravity="face:auto" height="700" quality="auto:best" radius="0" width="700" x="0" crop="fill" />
				{children}
			</Image>
	) : (
			<img
					src={imageUrl}
					alt={image.alternativeText || image.caption}
			/>
	);
};

export default ProfilePhoto;