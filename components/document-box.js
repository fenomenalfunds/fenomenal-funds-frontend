import styles from './../styles/components/document-box.module.scss';
import Image from "./image";
import {useState} from "react";
import WideOverlay from "./wide-overlay";

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

		<WideOverlay
			title={title}
			body={body}
			icon={icon}
			files={files}
			open={open}
		 func={() => setOpen(false)}/>
	</>
}

export default DocumentBox;