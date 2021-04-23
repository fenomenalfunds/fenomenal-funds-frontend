import propTypes from 'prop-types';
import styles from "./../styles/components/wide-overlay.module.scss";
import Grid from "@material-ui/core/Grid";
import CloseButton from "./close-button";
import Image from "./image";
import _ from "lodash";

const WideOverlay = ({title, body, func, icon, files, open}) => {
	return <div className={styles.overlay} style={(open ? {display:'flex'} : null)}>
		<Grid container spacing={0} justify="center">
			<Grid item lg={10}>
				<CloseButton  func={func}/>
				<div className={styles.overlayContent}>
					<article className={styles.content}>
						<div className={styles.image}>
							<figure>
								<Image image={icon}/>
							</figure>
						</div>
						<div className={styles.text}>
							<h1 className={styles.title}>{title}</h1>
							<div dangerouslySetInnerHTML={{__html: body}} className={styles.body} />
							{files &&
							_.map(files, (file, key) => {
								return <a key={key} href={file.url} download target="_blank" className={`btn red ${styles.dlc}`}>
									{file.caption ? file.caption : `Download ${file.ext}`}
								</a>
							})}
						</div>
					</article>
				</div>
			</Grid>
		</Grid>
	</div>
}

WideOverlay.propTypes = {
	title: propTypes.string.isRequired,
	body: propTypes.string.isRequired,
	func: propTypes.func.isRequired
}

export default WideOverlay;