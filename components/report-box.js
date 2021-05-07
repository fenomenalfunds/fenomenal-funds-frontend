import styles from './../styles/components/report-box.module.scss';
import Image from "./image";
import Link from "next/link";

const ReportBox = ({title, slug, subtitle, image, body, files}) => {
	return <Link href={`/reports/${slug}`}>
		<a>
			<div className={styles.reportBox}>
				<figure className={styles.cover}>
					<Image image={image}/>
				</figure>
				<div className={styles.caption}>
					<h3>{title}</h3>
					<p>{subtitle}</p>
				</div>
			</div>
		</a>
	</Link>
}

export default ReportBox;