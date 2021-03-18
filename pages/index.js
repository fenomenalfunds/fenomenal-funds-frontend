import Head from 'next/head';
import styles from './../styles/components/Home.module.scss';
import Grid from '@material-ui/core/Grid';
import LargeArticleBox from "../components/large-article-box";
import TeamBox from "../components/team-box";
import ArticleBox from "../components/article-box";
import SmallArticleBox from "../components/small-article-box";
import Layout from "../layout/website-layout";

export default function Home() {
	return <Layout>
		<div className={styles.homepage}>
			<Head>
				<title>Fenomenal Funds</title>
			</Head>

			<Grid container justify="center" className={styles.homepage}>
				<Grid item xs={12}>
					<div className={styles.header}>
						<p className={styles.caption}>Fenomenal Funds aims to stregthen the sustainability, resilience
							and visibility of women's funds in order to
							advance the impact of feminist movements around the world.</p>

						<span className={styles.diagonal}>&nbsp;</span>

						<img src="/fenomenal-funds-logo-alt.svg" alt="Fenomenal Funds Logo" className={styles.logo}/>
					</div>
				</Grid>

				<Grid item xs={10}>
					<LargeArticleBox
						title="Letter from Co-Chairs"
						content="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis non sapien non accumsan. Donec euismod dictum iaculis. Proin nec leo vel dui convallis lobortis. Vestibulum mattis in urna sed ultricies. Etiam dictum lectus sit amet metus tincidunt tincidunt. Vivamus ut sem et massa aliquet dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur non mattis nibh. Maecenas euismod mi vel est gravida, in sagittis elit vehicula. Sed gravida justo ac semper lacinia. Sed rutrum mauris ligula, pretium condimentum ante aliquet tempor. Proin vel leo erat. Integer vel neque ac velit rhoncus blandit id sit amet metus. Nam sodales purus non quam pharetra tempor.</p>"
						overlay={{
							title: "Stories",
							text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
						}}
						image={{
							url: "/temp/doug-linstedt-jEEYZsaxbH4-unsplash.png",
							alternativeText: "Young girl sitting at desk"
						}}
					/>
				</Grid>
			</Grid>

			<Grid container justify="center" className={styles.about}>
				<Grid item xs={10}>
					<section>
						<div className={styles.titleBox}>
							<h2 className={styles.title}>Who we are</h2>
							<p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Pellentesque iaculis
								non sapien non accumsan. Donec euismod dictum iaculis. Proin nec leo vel dui convallis
								lobortis.</p>
						</div>

						<div className={styles.membersBubbles}>
							<TeamBox
								title="Steering Committee"
							/>

							<br/>
							<TeamBox
								title="Advisory Committee"
								variant={true}
							/>
							<TeamBox
								title="Advisory Committee"
								variant={true}
							/>
						</div>
					</section>
				</Grid>
			</Grid>

			<Grid container justify="center" className={styles.highlights}>
				<Grid item xs={10}>
					<section>
						<h1 className={styles.title}>Insights from our work</h1>
						<p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Pellentesque iaculis non sapien non accumsan.
							Donec euismod dictum iaculis. Proin nec leo vel dui convallis lobortis.</p>

						<div className={styles.articles}>
							<ArticleBox
								title="Activity Report 2021"
								subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis non sapien non
                accumsan. Donec euismod dictum iaculis. Proin nec leo vel dui convallis lobortis."
								image={{url: "/temp/gemma-chua-tran-P_mprr4eka8-unsplash.png", alternativeText: null}}
								url={`/reports/activity-report-2021`}
							/>

							<ArticleBox
								title="Reports / documents"
								subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis non sapien non
                accumsan. Donec euismod dictum iaculis. Proin nec leo vel dui convallis lobortis."
								image={{url: "/temp/jaikishan-patel-2eMemvByB-8-unsplash.png", alternativeText: null}}
								url={`/reports/documents`}
							/>
						</div>
					</section>
				</Grid>
			</Grid>

			<Grid container justify="center" className={styles.blog}>
				<Grid item xs={8}>
					<section>
						<h1 className={styles.title}>Our Blog</h1>
						<p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Pellentesque iaculis non sapien non accumsan.
							Donec euismod dictum iaculis. Proin nec leo vel dui convallis lobortis.</p>

						<div className={styles.articles}>
							<SmallArticleBox
								title="Excepteur sint occaecat cupidatat non proident"
								subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
								image={{url: "/temp/loren-joseph-GVeJ-TXWJ1g-unsplash.png", alternativeText: null}}
								link="/blog/excepteur-sint-occaecat-cupidatat-non-proident"
							/>
							<SmallArticleBox
								title="Excepteur sint occaecat cupidatat non proident"
								subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
								image={{url: "/temp/max-panama-Gt1A0jNzzbM-unsplash.png", alternativeText: null}}
								link="/blog/excepteur-sint-occaecat-cupidatat-non-proident"
							/>
							<SmallArticleBox
								title="Excepteur sint occaecat cupidatat non proident"
								subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
								image={{url: "/temp/mostafa-meraji-rql24m2eO2s-unsplash.png", alternativeText: null}}
								link="/blog/excepteur-sint-occaecat-cupidatat-non-proident"
							/>
							<SmallArticleBox
								title="Excepteur sint occaecat cupidatat non proident"
								subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
								image={{url: "/temp/naxph-pKyY_fosG90-unsplash.png", alternativeText: null}}
								link="/blog/excepteur-sint-occaecat-cupidatat-non-proident"
							/>
							<SmallArticleBox
								title="Excepteur sint occaecat cupidatat non proident"
								subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
								image={{url: "/temp/ron-hansen-MmfIwBHX1bY-unsplash.png", alternativeText: null}}
								link="/blog/excepteur-sint-occaecat-cupidatat-non-proident"
							/>
							<SmallArticleBox
								title="Excepteur sint occaecat cupidatat non proident"
								subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
								image={{url: "/temp/sean-k-q-ayX003Mabk4-unsplash.png", alternativeText: null}}
								link="/blog/excepteur-sint-occaecat-cupidatat-non-proident"
							/>
							{/*<SmallArticleBox
                title="Excepteur sint occaecat cupidatat non proident"
                subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                image={{url: "/temp/sharon-christina-rorvik-CLyL_YVsWI8-unsplash.png", alternativeText: null}}
                link="/blog/excepteur-sint-occaecat-cupidatat-non-proident"
            />
              <SmallArticleBox
              title="Excepteur sint occaecat cupidatat non proident"
              subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              image={{url:"/temp/thought-catalog-Jnxtlv_Fo14-unsplash.png", alternativeText: null}}
              link="/blog/excepteur-sint-occaecat-cupidatat-non-proident"
              />
              <SmallArticleBox
              title="Excepteur sint occaecat cupidatat non proident"
              subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              image={{url:"/temp/wan-san-yip-mApKTAqxxsY-unsplash.png", alternativeText: null}}
              link="/blog/excepteur-sint-occaecat-cupidatat-non-proident"
              />
              <SmallArticleBox
              title="Excepteur sint occaecat cupidatat non proident"
              subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              image={{url:"/temp/annie-spratt-0cgpyigyIkM-unsplash.png", alternativeText: null}}
              link="/blog/excepteur-sint-occaecat-cupidatat-non-proident"
              />
              <SmallArticleBox
              title="Excepteur sint occaecat cupidatat non proident"
              subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              image={{url:"/temp/artem-beliaikin-BHpxhJdkI1s-unsplash.png", alternativeText: null}}
              link="/blog/excepteur-sint-occaecat-cupidatat-non-proident"
              />
              <SmallArticleBox
              title="Excepteur sint occaecat cupidatat non proident"
              subtitle="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              image={{url:"/temp/belinda-fewings-znbWNyxfUn0-unsplash.png", alternativeText: null}}
              link="/blog/excepteur-sint-occaecat-cupidatat-non-proident"
              />*/}

						</div>
					</section>
				</Grid>
			</Grid>

			<Grid container justify="center" className={styles.contact}>
				<Grid item xs={10}>
					<section>
						<div className={styles.text}>
							<h1>Get in touch!</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis non sapien
								non accumsan. Donec euismod dictum iaculis. Proin nec leo vel dui convallis lobortis.
								Vestibulum mattis in urna sed ultricies. Etiam dictum lectus sit amet metus tincidunt
								tincidunt. Vivamus ut sem et massa aliquet dignissim. Pellentesque habitant morbi
								tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur non mattis
								nibh. Maecenas euismod mi vel est gravida, in sagittis elit vehicula. Sed gravida justo
								ac semper lacinia. Sed rutrum mauris ligula, pretium condimentum ante aliquet tempor.
							</p>
							<p>Or send us an email at <a href="mailto:hello@fenomenalfunds.org">hello@fenomenalfunds.org</a></p>
						</div>

						<div className={styles.form}>
							<Grid container spacing={3}>
								<Grid item xs={6}>
									<label htmlFor="name">Name</label>
									<input type="text" id="name" placeholder="First name" />
								</Grid>
								<Grid item xs={6}>
									<label htmlFor="last_name">Last name</label>
									<input type="text" id="last_name" placeholder="Last name" />
								</Grid>
								<Grid item xs={12}>
									<label htmlFor="email">Email</label>
									<input type="email" placeholder="Email" />
								</Grid>
								<Grid item xs={12}>
									<label htmlFor="message">Message</label>
									<textarea id="message" rows="5" placeholder="Type your message here" />
								</Grid>
								<Grid item xs={12} style={{textAlign:"right"}}>
									<button type="submit" className="btn">Send</button>
								</Grid>
							</Grid>
						</div>
					</section>
				</Grid>
			</Grid>

		</div>
	</Layout>
}
