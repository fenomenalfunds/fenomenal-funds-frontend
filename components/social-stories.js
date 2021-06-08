import React, {Component} from "react";
import socialstory from './../lib/socialstory';

class SocialStories extends Component {
	constructor(props) {
		super(props);
	}

	launch = () => {
		this.socialstory.launch();
	}

	render() {
		const settings = {
			playlist: this.props.stories
		}

		return <div ref={el => (this.socialstory = el)} {...settings} />
	}
}

export default SocialStories;