import {getStrapiMedia} from "../lib/media";
import CloudImage from "./cloud-image";

const Image = ({image, ...props}) => {
	if(image && image.url) {
		const imageUrl = getStrapiMedia(image);

		return <>
			<CloudImage image={image} {...props} />
			{/*<img
					src={imageUrl}
					alt={image.alternativeText || image.name}
					{...props}
			/>*/}
		</>;
	} else {
		return <img src="/FF_2021_ImagePlaceholder_1080x810.jpg" alt=""/>
	}
};

export default Image;