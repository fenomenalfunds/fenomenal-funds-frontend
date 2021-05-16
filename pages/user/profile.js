import styles from './../../styles/components/profile.module.scss';
import Layout from "../../layout/website-layout";
import Grid from "@material-ui/core/Grid";
import {fetchProfileContent} from "../../lib/api";
import {ReactSession as Session} from 'react-client-session';
import ProfilePhoto from "../../components/profile-photo";
import {useState} from "react";
import {useRouter} from "next/router";


const ProfilePage = ({data}) => {
	const router = useRouter();

	function handleLogout() {
		console.log('logout');
		Session.remove('username');
		Session.remove('email');
		Session.remove('photo');
		Session.remove('id');
		console.log('Logged out');
		router.push('/login');
	}

	const [user, setUser] = useState(data);

	function handleChange(e) {
		setUser({
			...user,
			[e.target.name]: e.target.value
		})
	}

	return <Layout>
		<Grid container justify="center" spacing={5} className={styles.profile}>
			<Grid item xs={11} lg={8} className={styles.logout}>
				<button type="button" className="btn red" onClick={() => handleLogout()}>LogOut</button>
			</Grid>
			<Grid container spacing={5} justify="center">
				<Grid item xs={11} lg={2}>
					<figure className={styles.photo}>
						<ProfilePhoto image={user.photo} />
					</figure>
				</Grid>
				<Grid item xs={11} lg={6}>
					<form onSubmit={() => handleSubmit}>
						<div className={`${styles.row} ${styles.half}`}>
							<label htmlFor="username">
								Username
								<input type="text" id="username" name="username" value={user.username} placeholder="username" onChange={handleChange} />
							</label>
						</div>

						<div className={`${styles.row} ${styles.half}`}>
							<label htmlFor="fullname">
								Full Name
								<input type="text" id="fullname" name="fullname" value={user.fullname} placeholder="Name Last name" onChange={handleChange} />
							</label>
						</div>

						<div className={styles.row}>
							<label htmlFor="email">
								Email
								<input type="email" id="email" name="email" value={user.email} placeholder="name@domain.com" onChange={handleChange} />
							</label>
						</div>

						<div className={styles.row}>
							<label htmlFor="about">
								About
								<textarea name="about" id="about" onChange={handleChange} value={user.about} />
							</label>
						</div>

						<div className={`${styles.row} ${styles.half}`}>
							<a href="/user/password" className={styles.password}>Change password</a>
						</div>

						<div className={`${styles.row} ${styles.right} ${styles.half}`}>
							<button type="button" className={styles.submit}>Apply</button>
						</div>

					</form>
				</Grid>
			</Grid>
		</Grid>
	</Layout>
}

export async function getServerSideProps({req}) {
	const cookie = JSON.parse(req.cookies.__react_session__);
	const data = await fetchProfileContent(cookie.jwt, cookie.id);

	return {
		props: {
			data: data
		}
	}
}

export default ProfilePage;