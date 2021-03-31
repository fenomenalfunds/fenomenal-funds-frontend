import {getStrapiMedia} from "../lib/media";

const Image = ({image, ...props}) => {
	const imageUrl = getStrapiMedia(image);

	return (
			<img
					src={imageUrl}
					alt={image.alternativeText || image.name}
					{...props}
			/>
	);
};

export default Image;