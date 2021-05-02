import _ from 'lodash';
import ReactPlayer from "react-player";
import {getCloudinaryDetails} from "./cloud-image";

const CloudVideo = (props) => {
	const {video, playing} = props;
	if (!video || !video.url) return <></>;
	const cloudinary = getCloudinaryDetails(video.url);
	const video_name = _.split(cloudinary.id, '.')[0];

	return video.url ? (
			<ReactPlayer
					width="100%"
					height="100%"
					playing={playing}
					url={[
						{src: `https://res.cloudinary.com/${cloudinary.cloudName}/video/upload/v${cloudinary.version}/${video_name}.webm`, type: 'video/webm'},
						{src: `https://res.cloudinary.com/${cloudinary.cloudName}/video/upload/v${cloudinary.version}/${video_name}.mp4`, type: 'video/mp4'},
						{src: `https://res.cloudinary.com/${cloudinary.cloudName}/video/upload/v${cloudinary.version}/${video_name}.ogg`, type: 'video/ogg'}
					]}
			/>
	) : <></>;
}

export default CloudVideo;