import styles from './../styles/components/document-box.module.scss';
import Image from "./image";
import _ from 'lodash';
import {useState} from "react";
import Grid from '@material-ui/core/Grid';
import CloseButton from "./close-button";

const DocumentBox = ({title, subtitle, icon, type, body, files}) => {
	const [open, setOpen] = useState(false);

	return <>
		<div className={styles.documentBox} onClick={() => setOpen(true)}>
			<div className={styles.icon}>
				<figure>
					<Image image={icon}/>
				</figure>
			</div>
			<div className={styles.description}>
				{type && <small>{type}</small>}
				<h4>{title}</h4>
				<p>{subtitle}</p>
			</div>
		</div>

		<div className={styles.overlay} style={(open ? {display:'flex'} : null)}>
			<Grid container spacing={0} justify="center">
				<Grid item lg={10}>
					<CloseButton  func={() => setOpen(false)}/>
					<div className={styles.overlayContent}>
						<article className={styles.content}>
							<div className={styles.image}>
								<figure>
									<Image image={icon}/>
								</figure>
							</div>
							<div className={styles.text}>
								<h1>{title}</h1>
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
	</>
}

export default DocumentBox;