import React, {Component} from "react";
import Slider from 'react-slick';
import _ from 'lodash';
import styles from './../styles/components/stories-slider.module.scss';
import StoryBox from "./story-box";

class StoriesSlider extends Component{

	constructor(props) {
		super(props);
		this.next = this.next.bind(this);
		this.prev = this.prev.bind(this);
	}

	next() {
		this.slider.slickNext();
	}

	prev() {
		this.slider.slickPrev();
	}

	render() {

		const settings = {
			dots: false,
			arrows: false,
			infinite: false,
			speed: 500,
			autoplay: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: false,
						dots: false,
						arrows: false
					}
				}
			]
		};

		return <div className={styles.storiesSlider}>
			<Slider ref={c => (this.slider = c)} {...settings} className={styles.slider}>
				{_.map(this.props.slides, (slide) => {
					return <StoryBox
						key={slide.id}
						title={slide.title}
						subtitle={slide.subtitle}
						cover={slide.cover}
					/>
				})}
			</Slider>
		</div>
	}
}

export default StoriesSlider;