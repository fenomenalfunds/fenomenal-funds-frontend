import styles from './../styles/components/stories-slider.module.scss';
import React, {Component} from "react";
import Slider from 'react-slick';
import _ from 'lodash';
import StoryBox from "./story-box";
import dynamic from "next/dynamic";
import Image from "./image";
const SocialStories = dynamic(() => import("./social-stories"), {ssr: false});

class StoriesSlider extends Component{

	constructor(props) {
		super(props);
		this.state = {
			play: false,
			index: 0,
			stories: _.map(props.slides, (story) => {
				return {
					content: (props) => {
						return <div className={styles.story}>
							<figure className={styles.background}>
								<Image image={story.image[0]} />
							</figure>
							<div className={styles.content}>
								<h1>{story.title}</h1>
								<div className={styles.body} dangerouslySetInnerHTML={{__html: story.text}} />
							</div>
						</div>},
					styles: {
						width: '100%',
						height: '100%'
					}
				}
			})
		}
		this.next = this.next.bind(this);
		this.prev = this.prev.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.closeStories = this.closeStories.bind(this);
	}

	next() {
		this.slider.slickNext();
	}

	prev() {
		this.slider.slickPrev();
	}

	handleClick(index) {
		return this.setState({
			play: true,
			index: index
		})
	}

	closeStories() {
		return this.setState({
			play: false
		});
	}

	render() {

		const settings = {
			dots: false,
			arrows: false,
			infinite: true,
			speed: 1000,
			autoplay: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		};

		return <div className={styles.storiesSlider}>
			{this.props.slides.length > 5 ?
					<Slider ref={c => (this.slider = c)} {...settings}>
						{_.map(this.props.slides, (slide, key) => {
							return <div key={key}>
								<StoryBox
										title={slide.title}
										subtitle={slide.subtitle}
										cover={slide.cover}
										click={() => this.handleClick(key)}
								/>
							</div>
						})}
					</Slider> :
					<div className={styles.noSlider}>
						{_.map(this.props.slides, (slide, key) => {
							return <StoryBox
									key={key}
									title={slide.title}
									subtitle={slide.subtitle}
									cover={slide.cover}
									click={() => this.handleClick(key)}
							/>
						})}
					</div>
			}

			{this.state.play &&
			<SocialStories
					stories={this.state.stories}
					index={this.state.index}
					func={() => this.closeStories()}
			/>}
		</div>
	}
}

export default StoriesSlider;