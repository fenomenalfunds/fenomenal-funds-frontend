import styles from './../styles/components/position-box.module.scss';

const PositionBox = ({title, subtitle, category, publisher}) => {
	console.info('@@@@@@ publisher @@@@@@', publisher);
	return <div className={styles.positionBox}>
		<small>{category ? category : 'Opportunity'}</small>
		<h4 className={styles.title}>
			{title}
			{publisher &&
			<div className={styles.apply}>
				<a href={`mailto:${publisher.email}?subject=Application for ${title}`} target="_blank">Apply</a>
			</div>}
		</h4>
		<p>{subtitle}</p>
		<hr/>
	</div>
}

export default PositionBox;