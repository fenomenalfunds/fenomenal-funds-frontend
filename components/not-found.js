import styles from './../styles/components/not-found.module.scss';
import Link from 'next/link';

const NotFound = ({link, text}) => {
	return <div className={styles.notFound}>
		<h1>404 <br/> Not Found</h1>
		<p>Yeah, well... this is awkward!!! <br/>
			We can't find what you are looking for.</p>
		<p>
			<Link href={`${link ? link : '/'}`}>
				<a className="btn">{`${text ? text : 'Go back home'}`}</a>
			</Link>
		</p>
	</div>
}

export default NotFound;