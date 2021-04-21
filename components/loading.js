import styles from './../styles/components/loading.module.scss';
import Head from 'next/head';

const Loading = () => {
	return <div className={styles.loading}>
		<Head>
			<title>Loading...</title>
			<link rel="shortcut icon" href="/fnfd.svg"/>
		</Head>
		<img src="/loading.svg" alt="Loading"/>
	</div>
}

export default Loading;