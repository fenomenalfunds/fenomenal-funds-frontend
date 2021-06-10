import styles from './../styles/components/login.module.scss';
import {useState} from 'react';
import _ from 'lodash';
import Router from 'next/router';
import Layout from "../layout/website-layout";
import Grid from "@material-ui/core/Grid";
import {userLogin} from "../lib/auth";
import Session from "react-session-api";

function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState({status: '', text: []});

	async function handleLogin() {
		const loginInfo = {
			identifier: username,
			password: password
		}

		const loginResponse = await userLogin(loginInfo);

		if(loginResponse.jwt) {
			Session.set('ff-session', {
				jwt: loginResponse.jwt,
				...loginResponse
			});

			Session.onSet((data) => {
				setMessage({
					status: styles.success,
					text: [{message: `Welcome ${data}`}]
				});

				Router.push('/user/profile');
			});

			/*setMessage({
				status: styles.success,
				text: [{message: "Login successful"}]
			})

			Router.push('/user/profile');*/
		} else {
			console.error('Failed to login ', loginResponse);
			setMessage({
				status: styles.error,
				text: loginResponse.message[0].messages
			})
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
					{!_.isEmpty(message.text) && <div className={`${styles.feedback} ${message.status}`}>
						{_.map(message.text, (msg, m) => {
							return <p key={m}>{msg.message}</p>
						})}
					</div>}
				</div>
			</Grid>
		</Grid>
	</Layout>;
}

export async function getServeSideProps(ctx) {
	Session.clear();

	return {
		props: {}
	}
}

export default Login;