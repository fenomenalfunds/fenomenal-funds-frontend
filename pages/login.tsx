import Link from 'next/link';
import styles from './../styles/components/login.module.scss';
import Layout from './../layout/website-layout';
import Router from 'next/router';
import _ from 'lodash';
import Grid from "@material-ui/core/Grid";
import * as React from 'react';
import { NextPageContext } from 'next';
import { useAuth } from '../lib/auth.context';
import { useGlobalMessaging } from '../lib/global-messaging.context';
import TokenService from '../lib/token.service';
import { ILoginIn } from '../lib/auth.types';
import {useState} from "react";
import {userLogin} from "../lib/auth";

interface IProps {
	action: string;
}

function Login(props: IProps) {
	const tokenService = new TokenService();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState({status: '', text: []});
	//const [messageState, messageDispatch] = useGlobalMessaging();
	const [authState, authDispatch] = useAuth();

	React.useEffect(() => {
		if (props.action && props.action == 'logout') {
			authDispatch({
				type: 'removeAuthDetails'
			});

			tokenService.deleteToken();

			Router.push('/');
		}
	}, []);

	async function handleLogin() {
		const loginInfo = {
			identifier: username,
			password: password
		}

		await userLogin(loginInfo)
				.then(res => {
					console.log('RES', res);
					tokenService.saveToken(res.jwt);
					return res.user;
				})
				.then(response => {
					console.log('RESPONSE', response);
					authDispatch({
						type: "setAuthDetails",
						payload: {
							id: response.id,
							username: response.username,
							photo: response.photo,
							fullname: response.fullname,
							email: response.email
						}
					});

					Router.push('/user/profile');
				})
				.catch(error => console.error('ERROR', error));
	}

	return <Layout>
		<Grid container justify="center" spacing={0} className={styles.login}>
			<Grid item xs={11} lg={2}>
				<div className={styles.form}>
					<form>
						<label htmlFor="email">
							Email
							<input type="email" onChange={e => setUsername(e.target.value)} value={username} placeholder="Email" autoComplete="email"/>
						</label>
						<label htmlFor="password">
							Password
							<input type="password" onChange={e => setPassword(e.target.value)}
							       value={password} placeholder="Password" autoComplete="current-password"/>
						</label>
						<button type="button" className="btn red" onClick={() => handleLogin()}>Login</button>
					</form>
					{(!_.isEmpty(message) && !_.isEmpty(message.text)) && <div className={`${styles.feedback} ${message.status}`}>
						{_.map(message.text, (msg, m) => {
							return <p key={m}>{msg.message}</p>
						})}
					</div>}
				</div>
			</Grid>
		</Grid>
	</Layout>
}

Login.getInitialProps = async (ctx: NextPageContext) => {
	if (ctx.query && ctx.query.l == 't') {
		return { action: 'logout' };
	}

	return {};
};

export default Login;