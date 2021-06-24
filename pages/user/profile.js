import styles from './../../styles/components/profile.module.scss';
import Link from 'next/link';
import Layout from "../../layout/website-layout";
import Grid from "@material-ui/core/Grid";
import {fetchProfileContent} from "../../lib/api";
import ProfilePhoto from "../../components/profile-photo";
import {useState} from "react";
import {useRouter} from "next/router";
import {getUser, updateUser} from "../../lib/auth";
import Image from "../../components/image";
import TokenService from "../../lib/token.service";
import {useAuth} from "../../lib/auth.context";


const ProfilePage = ({data}) => {
	const router = useRouter();
	const [auth, authDispatch] = useAuth();

	function handleLogout() {
		const tokenService = new TokenService();
		tokenService.deleteToken();
		router.push('/login');
	}

	const [user, setUser] = useState(data);

	function handleChange(e) {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log('SUBMIT', e, 'USER', user);
		updateUser(this, user);
	}

	return <Layout>
		<Grid container justify="center" spacing={5} className={styles.profile}>
			<Grid item xs={11} lg={6} className={styles.logout}>
				<button type="button" className="btn red" onClick={() => {
					authDispatch({
						type: "removeAuthDetails"
					});
					handleLogout();
				}}>Logout</button>
			</Grid>
			<Grid container spacing={5} justify="center">
				<Grid item xs={11} lg={2}>
					<label htmlFor="photo" className={styles.photoInput}>
						<figure className={styles.photo}>
							{user.photo ?
									<ProfilePhoto image={user.photo}/> :
									<Image src="/FF_2021_ImagePlaceholder_510x288.jpg" alt={user.fullname}/>
							}
						</figure>
						<input type="file" id="photo" name="photo" onChange={handleChange} />
					</label>
				</Grid>
				<Grid item xs={11} lg={4}>
					<form onSubmit={handleSubmit}>
						<div className={`${styles.row} ${styles.half} ${styles.left}`}>
							<label htmlFor="username">
								Username
								<input type="text" id="username" name="username" value={user.username} placeholder="username" onChange={handleChange} autoComplete="username" />
							</label>
						</div>

						<div className={`${styles.row} ${styles.half} ${styles.right}`}>
							<label htmlFor="fullname">
								Full Name
								<input type="text" id="fullname" name="fullname" value={user.fullname} placeholder="Name Last name" onChange={handleChange} />
							</label>
						</div>

						<div className={`${styles.row}`}>
							<label htmlFor="email">
								Email
								<input type="email" id="email" name="email" value={user.email} placeholder="name@domain.com" onChange={handleChange} autoComplete="email" />
							</label>
						</div>

						<div className={`${styles.row} ${styles.half} ${styles.left}`}>
							<label htmlFor="passwd">
								Password
								<input type="password" name="passwd" id="passwd" placeholder="Password" onChange={handleChange} value={user.password} autoComplete="new-password" />
							</label>
						</div>

						<div className={`${styles.row} ${styles.half} ${styles.right}`}>
							<label htmlFor="passwd2">
								Confirm password
								<input type="password" name="passwd2" id="passwd2" placeholder="Password" onChange={handleChange} value={user.password} autoComplete="new-password" />
							</label>
						</div>

						<div className={`${styles.row} ${styles.rightAlign}`}>
							<button type="submit">Save</button>
						</div>

					</form>
				</Grid>
			</Grid>
		</Grid>
	</Layout>
}

export async function getServerSideProps(ctx) {
	const cookies = getUser(ctx);
	const data = await fetchProfileContent(cookies);


	if(!data) return {notFound:true}

	return {
		props: {
			data: data
		}
	}
}

export default ProfilePage;