import React, {Component} from "react";
import styles from './../styles/our-approach.module.scss';
import _ from 'lodash';
import Grid from '@material-ui/core/Grid';
import Layout from "../layout/website-layout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faPause, faVolumeMute, faVolumeUp} from "@fortawesome/free-solid-svg-icons";
import {fetchApproachContent} from "../lib/api";
import Seo from "../components/seo";
import NotFound from "../components/not-found";
import {getStrapiMedia} from "../lib/media";
import Image from "../components/image";
import ShortArticle from "../components/short-article";
import LongArticle from "../components/long-article";
import CloudVideo from "../components/video";

class OurApproachPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			play: false,
			muted: true,
			url: null,
			volume: 0.5
		}
	}

	handlePlay = () => {
		this.setState({play: !this.state.play})
	}

	handleVolumeUp = () => {
		if (this.state.volume < 1) {
			this.setState({volume: this.state.volume + .1})
		}
	}

	handleVolumeDown = () => {
		if (this.state.volume > 0) {
			this.setState({volume: this.state.volume + .1})
		}
	}

	ref = player => {
		this.player = player;
	}

	componentDidMount() {
		this.setState({
			url: getStrapiMedia(this.props.approach.video)
		})
	}

	render() {
		let {approach} = this.props;

		if (!approach) return <NotFound/>;

		return <Layout>
			<Seo seo={approach.seo}/>

			<div className={styles.ourApproach}>
				<Grid container justify="center" spacing={0}>
					<Grid item xs={12} lg={12}>
						<article>
							{approach.video &&
							<section className={styles.videoHeader}>
								<div className={styles.video}>
									{approach.video ?
											<CloudVideo
													playing={this.state.play}
													forwardRef={this.ref}
													video={this.props.approach.video}
											/> :
											<Image image={approach.cover}/>}
								</div>

								<div className={`${styles.caption} ${this.state.play ? styles.nocaption : null}`}>
									<div className={styles.text}>
										<h1 className={styles.title}>{approach.title}</h1>
										<div className={styles.subtitle} dangerouslySetInnerHTML={{__html: approach.subtitle}}/>
									</div>
								</div>

								{(approach.video && !this.state.play) &&
								<button type="button" className={styles.playButton} onClick={this.handlePlay}>
									<FontAwesomeIcon icon={faPlay} aria-label="Play button"/>
								</button>}

								{(approach.video && this.state.play) &&
								<button type="button" className={styles.pauseButton} onClick={this.handlePlay}>
									<FontAwesomeIcon icon={faPause} aria-label="Play button"/>
								</button>}

								{(approach.video && (this.state.play && this.state.muted)) &&
								<button type="button" className={styles.mutedButton} onClick={() => this.setState({muted: false})}>
									<FontAwesomeIcon icon={faVolumeMute} aria-label="Volume Muted button"/>
								</button>}

								{(approach.video && (this.state.play && !this.state.muted)) &&
								<button type="button" className={styles.mutedButton} onClick={() => this.setState({muted: true})}>
									<FontAwesomeIcon icon={faVolumeUp} aria-label="Volume On button"/>
								</button>}
							</section>}

							{approach.section &&
							_.map(approach.section, (section, key) => {
								return section.long_style ?
										<LongArticle
												key={key}
												title={section.title}
												subtitle={section.subtitle}
												image={section.image[0]}
												body={section.body}
										/> :
										<ShortArticle
												key={key}
												title={section.title}
												subtitle={section.subtitle}
												image={section.image[0]}
												body={section.body}
										/>
							})}
						</article>
					</Grid>
				</Grid>
			</div>
		</Layout>
	}
}

export default OurApproachPage;

export async function getStaticProps(preview = {}) {
	const data = await fetchApproachContent(preview);

	return {
		props: {
			...data
		},
		revalidate: true
	}
}