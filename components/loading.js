import styles from './../styles/components/loading.module.scss';

const Loading = () => {
	return <div className={styles.loading}>
		<img src="/loading.svg" alt="Loading"/>
	</div>
}

export default Loading;