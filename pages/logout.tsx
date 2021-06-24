import {destroyUser, redirectUser} from "../lib/auth";
import {Component} from "react";
import {useAuth} from "../lib/auth.context";
import * as React from "react";
import Router from "next/router";
import TokenService from "../lib/token.service";

interface IProps {
	action: string;
}

function Logout(props: IProps) {
	const tokenService = new TokenService();
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

	return <div>Redirecting...</div>
}

/*class Logout extends Component{

	componentDidMount() {
		if(this.props.logout) {
			destroyUser(this);
			redirectUser(this, '/login');
		}
	}

	render() {

		return <div>Redirecting...</div>
	}
}

export async function getServerSideProps(ctx) {
	const logout = destroyUser(ctx);

	return {
		props: {
			logout
		}
	}
}*/

export default Logout;