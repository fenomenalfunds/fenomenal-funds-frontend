import CloudImage from "./cloud-image";
import {getLocalUrl} from "../lib/media";

const Image = ({image, ...props}) => {
	if(image && image.url) {
		return <CloudImage image={image} {...props} />;
	} else {
		return <img src={getLocalUrl('/FF_2021_ImagePlaceholder_1080x810.jpg')} alt={image.alternativeText} />
	}
};

export default Image;