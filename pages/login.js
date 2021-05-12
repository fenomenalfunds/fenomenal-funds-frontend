import _ from 'lodash';
import styles from './../styles/components/login.module.scss';
import {useState} from 'react';
import {useRouter} from 'next/router';
import Layout from "../layout/website-layout";
import Grid from "@material-ui/core/Grid";
import {userLogin} from "../lib/auth";
import {ReactSession as Session} from 'react-client-session';

function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	async function handleLogin() {
		const loginInfo = {
			identifier: username,
			password: password
		}

		const loginResponse = await userLogin(loginInfo);

		if(loginResponse.jwt) {
			Session.setStoreType('cookie');
			Session.set('jwt', loginResponse.jwt);
			Session.set('id', loginResponse.user.id);
			Session.set('username', loginResponse.user.username);
			Session.set('email', loginResponse.user.email);
			Session.set('photo', loginResponse.user.photo.url);

			router.push('/user/profile');
		} else {
			console.error('Failed to login ', loginResponse);
		}

	}

	return <Layout>
		<Grid container justify="center" spacing={0} className={styles.login}>
			<Grid item xs={11} lg={2}>
				<div className={styles.form}>
					<form>
						<label htmlFor="email">
							Email
							<input type="email" onChange={e => setUsername(e.target.value)} value={username} placeholder="Email"/>
						</label>
						<label htmlFor="password">
							Password
							<input type="password" onChange={e => setPassword(e.target.value)} value={password} placeholder="Password"/>
						</label>
						<button type="button" className="btn red" onClick={() => handleLogin()}>Login</button>
					</form>
				</div>
			</Grid>
		</Grid>
	</Layout>;
}

export default Login;