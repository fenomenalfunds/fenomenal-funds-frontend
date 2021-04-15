import styles from './../styles/components/report-box.module.scss';
import Image from "./image";

const ReportBox = ({title, subtitle, image, body, files}) => {
	return <div className={styles.reportBox}>
		<figure className={styles.cover}>
			<Image image={image} />
		</figure>
		<div className={styles.caption}>
			<h3>{title}</h3>
			<p>{subtitle}</p>
		</div>
	</div>
}

export default ReportBox;