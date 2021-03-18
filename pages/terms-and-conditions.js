import Head from 'next/head';
import Grid from '@material-ui/core/Grid';
import Layout from "../layout/website-layout";
import styles from './../styles/components/terms-and-conditions.module.scss';

const TermAndConditions = () => {
	return <Layout>
		<Head>
			<title>Terms and Conditions</title>
		</Head>

		<Grid container justify="center" spacing={3} className={styles.termsAndConditions}>
			<Grid item xs={10}>
				<article>
					<h1>Terms and Conditions</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus metus, ullamcorper sit
						amet ullamcorper et, tempor placerat ex. Lorem ipsum dolor sit amet, consectetur adipiscing
						elit. Donec suscipit, ex sed finibus blandit, augue erat aliquet neque, et vehicula orci velit
						quis velit. Pellentesque mattis ornare metus maximus eleifend. Pellentesque et mi eget velit
						varius sollicitudin. Vivamus egestas nisi viverra justo auctor aliquam. Maecenas sodales tellus
						at lorem ornare sodales. In ut dolor varius, consequat erat quis, gravida orci. Mauris vehicula
						turpis at justo tincidunt laoreet. Pellentesque malesuada diam quis ante tristique, vitae
						feugiat lacus tempus. Sed facilisis orci et ligula pharetra ornare. Quisque tellus odio,
						lobortis lacinia sodales vitae, elementum vel nibh. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Duis tristique eu justo at feugiat.</p>
					<p>Nulla blandit est et velit commodo congue. Nullam ipsum est, condimentum porta lectus sit amet,
						fringilla ultricies turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. In
						congue sed nulla nec volutpat. Maecenas dolor ante, facilisis in placerat vitae, maximus ut
						libero. Donec a tristique arcu, id porttitor magna. Sed a elit hendrerit, pretium sem et,
						blandit urna. Duis imperdiet finibus odio, ut fringilla libero auctor eu. Sed nec mauris
						vitae orci malesuada iaculis sed sed tortor. Praesent elementum enim in metus auctor auctor.</p>
					<p>Vestibulum vitae quam id nibh accumsan porttitor in sit amet arcu. Quisque consectetur enim odio.
						Curabitur non porttitor orci. Fusce eleifend vehicula finibus. Etiam vulputate ipsum vel
						tristique fermentum. Mauris id maximus erat. Fusce blandit dui mi, consectetur aliquet risus
						elementum et. Cras tempus ultricies ligula, nec faucibus orci rhoncus ut. Nulla facilisi.
						Phasellus posuere dolor quis arcu ullamcorper scelerisque. Quisque nec consequat orci.
						Sed rhoncus felis a tellus aliquet varius.</p>
					<p>Proin id faucibus nulla. Nunc bibendum nec enim vitae cursus. Sed vel hendrerit arcu, eget
						vulputate tellus. Pellentesque a purus tellus. Ut semper, enim ut tempus volutpat, elit tortor
						imperdiet leo, at scelerisque orci risus non dui. Proin efficitur eros eu euismod bibendum.
						Nullam rutrum cursus massa at ultricies. Aenean aliquet, velit vel pretium molestie, odio
						mauris fermentum nulla, vel molestie massa risus nec magna. Suspendisse libero felis, lobortis
						sit amet blandit ultricies, gravida quis velit. Sed efficitur dapibus erat, at viverra metus.
						Nunc dignissim eget ante sed semper.</p>
					<p>Nullam pharetra auctor ante nec varius. Nam mattis imperdiet velit, eu dapibus mi hendrerit ac.
						Nam vel purus cursus, aliquam massa ac, posuere nulla. Fusce eget ligula id neque semper
						vehicula. Duis ultrices sem ac nunc commodo, quis vehicula est sagittis. Vivamus egestas
						mollis leo vel finibus. Cras placerat elit mauris, eu cursus nunc maximus id. Phasellus sit
						amet eleifend metus. Donec in congue sem, sed molestie libero.</p>

					<p className={styles.termsLogo}>
						<img src="/fenomenal-funds-logo-alt.svg" alt=""/>
					</p>
				</article>
			</Grid>
		</Grid>
	</Layout>
}

export default TermAndConditions;