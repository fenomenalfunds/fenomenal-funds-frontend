import styles from './../styles/components/contact-section.module.scss';
import Grid from "@material-ui/core/Grid";

const ContactSection = ({title, subtitle, email}) => {
	return <Grid container justify="center" className={styles.contact}>
		<Grid item xs={10}>
			<section>
				<div className={styles.text}>
					<h1>{title}</h1>
					<div className={styles.subtitle} dangerouslySetInnerHTML={{__html: subtitle.replace('{%EMAIL%}', email)}} />
				</div>

				<div className={styles.form}>
					<Grid container spacing={3}>
						<Grid item xs={12} lg={6}>
							<label htmlFor="name">Name</label>
							<input type="text" id="name" placeholder="First name"/>
						</Grid>
						<Grid item xs={12} lg={6}>
							<label htmlFor="last_name">Last name</label>
							<input type="text" id="last_name" placeholder="Last name"/>
						</Grid>
						<Grid item xs={12}>
							<label htmlFor="email">Email</label>
							<input type="email" placeholder="Email"/>
						</Grid>
						<Grid item xs={12}>
							<label htmlFor="message">Message</label>
							<textarea id="message" rows="5" placeholder="Type your message here"/>
						</Grid>
						<Grid item xs={12} style={{textAlign: "right"}}>
							<button type="submit" className="btn red">Send</button>
						</Grid>
					</Grid>
				</div>
			</section>
		</Grid>
	</Grid>
}

export default ContactSection;