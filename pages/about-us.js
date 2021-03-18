import styles from './../styles/about-us.module.scss';
import Layout from "../layout/website-layout";
import Head from 'next/head';
import Grid from '@material-ui/core/Grid';
import TeamBox from "../components/team-box";

const AboutUsPage = () => {
	return <Layout>
		<Head>
			<title>About Us</title>
		</Head>

		<Grid container justify="center" className={styles.aboutUs}>
			<Grid item xs={10}>
				<article>
					<section className={styles.header}>
						<h1 className={styles.title}><strong>Listen</strong> to women's funds, <br/>
							<strong>trust</strong> women's funds,<br/>
							<strong>collaborate</strong> with women's funds,<br/>
							<strong>fund women's funds</strong>.</h1>
					</section>

					<section className={styles.letter}>
						<div className={styles.image}>
							<figure>
								<img src="/temp/clarke-sanders-JpCOGj0uIlI-unsplash.png" alt=""/>
							</figure>
						</div>
						<div className={styles.body}>
							<h1 className={styles.title}>Letter from Co-Charis</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis non sapien
								non accumsan. Donec euismod dictum iaculis. Proin nec leo vel dui convallis lobortis.
								Vestibulum mattis in urna sed ultricies. Etiam dictum lectus sit amet metus tincidunt
								tincidunt. Vivamus ut sem et massa aliquet dignissim. Pellentesque habitant morbi
								tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur non mattis
								nibh. Maecenas euismod mi vel est gravida, in sagittis elit vehicula. Sed gravida justo
								ac semper lacinia. Sed rutrum mauris ligula, pretium condimentum ante aliquet tempor.
								Proin vel leo erat. Integer vel neque ac velit rhoncus blandit id sit amet metus. Nam
								sodales purus non quam pharetra tempor.</p>
						</div>
					</section>

					<section className={styles.complementary}>
						<h1 className={styles.title}>Shifting power in philantropy</h1>

						<div className={styles.text}>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis non sapien
								non accumsan. Donec euismod dictum iaculis. Proin nec leo vel dui convallis lobortis.
								Vestibulum mattis in urna sed ultricies. Etiam dictum lectus sit amet metus tincidunt
								tincidunt. Vivamus ut sem et massa aliquet dignissim. Pellentesque habitant morbi
								tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur non mattis
								nibh. Maecenas euismod mi vel est gravida, in sagittis elit vehicula. Sed gravida justo
								ac semper lacinia. Sed rutrum mauris ligula, pretium condimentum ante aliquet tempor.
								Proin vel leo erat. Integer vel neque ac velit rhoncus blandit id sit amet metus. Nam
								sodales purus non quam pharetra tempor.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Pellentesque iaculis
								non sapien non accumsan. Donec euismod dictum iaculis. Proin nec leo vel dui convallis
								lobortis.</p>
						</div>

						<div className={styles.image}>
							<figure>
								<img src="/temp/naxph-pKyY_fosG90-unsplash.png" alt=""/>
							</figure>
						</div>
					</section>

					<section className={styles.whoWeAre}>
						<div className={styles.titleBox}>
							<h2 className={styles.title}>Who we are</h2>
							<p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Pellentesque iaculis
								non sapien non accumsan. Donec euismod dictum iaculis. Proin nec leo vel dui convallis
								lobortis.</p>
						</div>

						<div className={styles.membersBubbles}>
							<div>
								<TeamBox
									title="Steering Committee"
									variant={true}
								/>
							</div>

							<div>
								<TeamBox
									title="Advisory Committee"
									variant={true}
								/>
							</div>
							<div>
								<TeamBox
									title="Advisory Committee"
									variant={false}
								/>
							</div>
						</div>
					</section>
				</article>
			</Grid>
		</Grid>
	</Layout>
}

export default AboutUsPage;