import styles from './../styles/components/resource-box.module.scss';
import Image from "./image";
import Link from 'next/link';

const ResourceBox = ({title, subtitle, slug, image}) => {
	return <div className={styles.resourceBox}>
		<Link href={`/resource/${slug}`}>
			<a>
				<figure className={styles.image}>
					<Image image={image} />
				</figure>
			</a>
		</Link>
		<div className={styles.details}>
			<h3>
				<Link href={`/resource/${slug}`}>
					<a>
						{title}
					</a>
				</Link>
			</h3>
			<p>{subtitle}</p>
		</div>
	</div>
}

export default ResourceBox;