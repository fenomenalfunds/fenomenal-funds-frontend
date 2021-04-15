import React, {Component} from "react";
import withRouter from 'next/router';
import styles from './../styles/our-approach.module.scss';
import Grid from '@material-ui/core/Grid';
import Layout from "../layout/website-layout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faPause, faVolumeMute, faVolumeUp} from "@fortawesome/free-solid-svg-icons";
import {fetchAPI} from "../lib/api";
import Seo from "../components/seo";
import Loading from "../components/loading";
import NotFound from "../components/not-found";
import ReactPlayer from "react-player";
import {getStrapiMedia} from "../lib/media";
import Image from "../components/image";

class OurApproachPage extends Component {
	constructor() {
		super();
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
		if(this.state.volume < 1) {
			this.setState({volume: this.state.volume + .1})
		}
	}

	handleVolumeDown = () => {
		if(this.state.volume > 0) {
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

	/*const router = useRouter();
	if (router.isFallback) return <Loading/>;*/

	render() {
		let {approach} = this.props;

		if (!approach) return <NotFound/>;

		return <Layout>
			<Seo seo={approach.seo}/>

			<Grid container justify="center" spacing={0} className={styles.ourApproach}>
				<Grid item xs={12}>
					<article>
						<section className={styles.videoHeader}>
							<figure className={styles.video}>
								{approach.video ?
										<ReactPlayer
												ref={this.ref}
												url={this.state.url}
												controls={false}
												width="100%"
												height="100%"
												playsinline={false}
												muted={this.state.muted}
												volume={this.state.volume}
												playing={this.state.play}
												//onPlay={this.handlePlay}
												//onPause={this.handlePlay}
												loop={true}
										/> :
										<Image image={approach.cover}/>}
							</figure>

							{!this.state.play &&
							<div className={styles.caption}>
								<div className={styles.text}>
									<h1 className={styles.title}>{approach.title}</h1>
									<div className={styles.subtitle} dangerouslySetInnerHTML={{__html: approach.intro}}/>
								</div>
							</div>}

							{(approach.video && !this.state.play) &&
							<button type="button" className={styles.playButton} onClick={this.handlePlay}>
								<FontAwesomeIcon icon={faPlay} aria-label="Play button"/>
							</button>}

							{(approach.video && this.state.play) &&
							<button type="button" className={styles.pauseButton} onClick={this.handlePlay}>
								<FontAwesomeIcon icon={faPause} aria-label="Play button"/>
							</button>}

							{(approach.video && (this.state.play && this.state.muted)) &&
							<button type="button" className={styles.mutedButton} onClick={() => this.setState({muted:false})}>
								<FontAwesomeIcon icon={faVolumeMute} aria-label="Volume Muted button"/>
							</button>}

							{(approach.video && (this.state.play && !this.state.muted)) &&
							<button type="button" className={styles.mutedButton} onClick={() => this.setState({muted:true})}>
								<FontAwesomeIcon icon={faVolumeUp} aria-label="Volume On button"/>
							</button>}
						</section>

						<section className={styles.videoHeader}>
							<figure className={styles.video}>
								<img src="/temp/annie-spratt-0cgpyigyIkM-unsplash.png" alt=""/>
							</figure>

							<div className={styles.caption}>
								<h1 className={styles.title}>Infrastructure of women's funds</h1>
								<p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Pellentesque iaculis non sapien non accumsan. Donec euismod dictum iaculis. Proin nec
									leo vel dui convallis lobortis.</p>
							</div>

							<div className={styles.secondaryCaption}>
								<h2 className={styles.title}>Funding for <strong>the feminist ecosystem</strong></h2>
							</div>
						</section>

						<section className={styles.articleHeader}>
							<figure className={styles.image}>
								<img src="/temp/clarke-sanders-JpCOGj0uIlI-unsplash.png" alt=""/>
							</figure>

							<div className={styles.caption}>
								<h1 className={styles.title}>Resilience of women's fund ecosystem</h1>
							</div>
						</section>
					</article>
				</Grid>
			</Grid>
		</Layout>
	}
}

export default OurApproachPage;

export async function getStaticProps() {
	const approach = await fetchAPI('/approach');

	return {
		props: {
			approach
		},
		revalidate: true
	}
}