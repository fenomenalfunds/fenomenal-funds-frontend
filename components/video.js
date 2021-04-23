import {ReactVideo} from 'reactjs-media';
import {getLocalUrl} from "../lib/media";

const CloudVideo = (props) => {
	const {video} = props;
	console.info('@@@@@@@ VIDEO @@@@@@', video);
	const attributes = {...props}
	if (!video || !video.url) return <></>;
	return video.url ? (
			<ReactVideo
					src={video.url}
					poster={video.previewUrl}
					primaryColor="green"
					type={video.mime}
			/>
	) : <></>;
}

export default CloudVideo;