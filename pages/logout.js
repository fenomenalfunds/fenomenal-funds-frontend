import {destroyUser, redirectUser} from "../lib/auth";
import {Component} from "react";

class Logout extends Component{

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
}

export default Logout;