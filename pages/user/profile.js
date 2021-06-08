import styles from './../../styles/components/profile.module.scss';
import Layout from "../../layout/website-layout";
import Grid from "@material-ui/core/Grid";
import {fetchProfileContent} from "../../lib/api";
import ProfilePhoto from "../../components/profile-photo";
import {useState} from "react";
import {useRouter} from "next/router";
import {parseCookies, destroyCookie} from "nookies";


const ProfilePage = ({data}) => {
	const router = useRouter();

	function handleLogout() {
		console.log('logout');
		destroyCookie(null, 'jwt');
		destroyCookie(null, 'username');
		destroyCookie(null, 'email');
		destroyCookie(null, 'photo');
		destroyCookie(null, 'id');
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
			<Grid item xs={11} lg={6} className={styles.logout}>
				<button type="button" className="btn red" onClick={() => handleLogout()}>LogOut</button>
			</Grid>
			<Grid container spacing={5} justify="center">
				<Grid item xs={11} lg={2}>
					<figure className={styles.photo}>
						{user.photo ?
								<ProfilePhoto image={user.photo}/> :
								<img src="/FF_2021_ImagePlaceholder_510x288.jpg" alt={user.fullname}/>
						}
					</figure>
				</Grid>
				<Grid item xs={11} lg={4}>
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

						<div className={`${styles.row} ${styles.half}`}>
							<label htmlFor="email">
								Email
								<input type="email" id="email" name="email" value={user.email} placeholder="name@domain.com" onChange={handleChange} />
							</label>
						</div>

						<div className={`${styles.row} ${styles.half}`}>
							<a href="/user/password" className={styles.password}>Change password</a>
						</div>

						<div className={`${styles.row} ${styles.right} ${styles.half}`}>
							<button type="button" className={styles.submit}>Save</button>
						</div>

					</form>
				</Grid>
			</Grid>
		</Grid>
	</Layout>
}

export async function getServerSideProps(ctx) {
	const cookies = parseCookies(ctx);
	const data = await fetchProfileContent(cookies.jwt, cookies.id);

	if(!data) return {notFound:true}

	return {
		props: {
			data: data
		}
	}
}

export default ProfilePage;